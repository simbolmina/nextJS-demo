import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/dist/next-server/lib/head';
import MeetupDetail from '../components/meetups/MeetupDetail';

const MeetupDetails = function (props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

//we need to add this function if this component is a dynmic page while using getStaticProps() not serverSideProps or nothing.

//since pages are are pre-rendered during build process, nextJS renders all possible pages in app, including dynmaic pages. nextJS neeeds which ids it will pregenerate
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://user:Tcsg-134USER@cluster0.rwrjf.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  //we fetch only id proptery of all meetups

  client.close();

  return {
    fallback: false,
    //fallback key tells nextJS if our pathc contains all possible pages or some of them. false means contains all. if user type unsuported id (in site path) nextJS gives a 404 error.
    //true means nextJS will try to create a page. we can use this option for most visited pages but not all of them.
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() }, //lesson 341
    })),

    // this is hard coded path
    // [
    //   //this function returns a object including an array of paths of every dynamic pages.
    //   {
    //     params: {
    //       //if we have multiple dynamic pages we need multiple keys for each dynmic page
    //       meetupId: 'm1',
    //       //
    //     },
    //   },
    //   //for each possible dymic page we need to create an object. not hardcoded ofc.
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://user:Tcsg-134USER@cluster0.rwrjf.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDetails;

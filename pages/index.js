// import { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
//this is a component from next to add head elements for search engines
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'address 5 istanbul',
//     description: 'first meetup',
//   },
//   {
//     id: 'm2',
//     title: 'second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'address 5 istanbul',
//     description: 'first meetup',
//   },
//   {
//     id: 'm3',
//     title: 'third meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'address 5 istanbul',
//     description: 'first meetup',
//   },
// ];

const HomePage = function (props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="descripton"
          content="meetups description on search engine"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// //this funtion talks with server and client never sees this. if our site wont be watch very frequently this is the way to go.
export async function getStaticProps() {
  //fetch data
  const client = await MongoClient.connect(
    'mongodb+srv://user:Tcsg-134USER@cluster0.rwrjf.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      //since mongdb item id is a bit different we had to refoctor it in a map method
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //we can change this in seconds. 3600 is an hour.
    //10 seconds to wait to renegerate incaming request, to update pre-rendered page with never data. it will run every 10secons if there is a request so data is never older than 10 seconds.
  };
}

//if site updates are very frequent we might want to choose this approach. Since its updated auto by every request we dont need to revalidate by ourselves.
//this function does not run during build process (unlike getStaticProps), but during deployment on server.
//code here run on server and wont be exposed to client as getStaticProps.
// export async function getServerSideProps(context) {
//     //context parameter gives us extra data as server side props.
//     const req = context.req; //request
//     const res = context.res; //respond
//     //fetch data
//     return {
//       props: {
//         meetups: DUMMY_MEETUPS,
//       },
//     };
//   }

export default HomePage;

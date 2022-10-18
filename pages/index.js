import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}>
        </MeetupList>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req; //we need for eg: authentication
//     const res = context.res;
//     //fetch data from api/filesystem/database
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }


//special reserved function for getting props during the build phase -faster than getServerSideProps
export async function getStaticProps() {
    //fetch data from API/database
    const client = await MongoClient.connect();
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();//find all documents in the collection
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        //incremental static generation
        revalidate: 10
    };
}

export default HomePage
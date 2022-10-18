//meetup ID dynamic pages
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image="https://images.unsplash.com/photo-1665899689931-6638f06268b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80"
            title='The Second Meetup'
            address='Street 12, City'
            description='The meetup description'
        >
        </MeetupDetail>
    );
}

export async function getStaticPaths() {
    return {
        fallback: false, //allow to pregenerate some pages 
        paths: [
            {
                params: {
                    meetupId: 'm1'
                },
            },
            {
                params: {
                    meetupId: 'm2'
                },
            },
            {
                params: {
                    meetupId: 'm3'
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    //fetch data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: "https://images.unsplash.com/photo-1665899689931-6638f06268b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80",
                id: meetupId,
                address: 'Street 12, City',
                description: 'The meetup description',
            },
        },
    }
}

export default MeetupDetails
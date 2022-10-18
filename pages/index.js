import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://images.pexels.com/photos/13816113/pexels-photo-13816113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address: 'Some address',
        description: 'This is a first meetup'

    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://images.unsplash.com/photo-1665899689931-6638f06268b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80',
        address: 'Some address',
        description: 'This is the second meetup'

    },
    {
        id: 'm3',
        title: 'Third Meetup',
        image: 'https://images.unsplash.com/photo-1665899689931-6638f06268b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80',
        address: 'Some address',
        description: 'This is the third meetup meetup'

    }
]


function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}>
        </MeetupList>
    )
}

//special reserved function for getting props during the build phase
export async function getStaticProps() {
    //fetch data from API/database
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

export default HomePage
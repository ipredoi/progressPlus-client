import CoachListLink from "../Components/coachListLink";
import Avatar from "../Components/avatar";
import UsefulLinks from "../Components/usefulLinks";
import SignOut from "../Components/signOut";
import ProgressList from "../Components/ProgressList";

export default function Feedback() {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <CoachListLink />
      </header>
      <ProgressList />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

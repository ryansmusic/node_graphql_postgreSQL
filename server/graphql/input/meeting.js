import { gql } from 'apollo-server-express';

const meetingInput = gql`
input DurationTime{
  hour: Int
  minutes: Int
}
input Attendees{
email:String
}
input permissions{
  mute:Boolean
  video:Boolean
  muteAll:Boolean
}
`;

export default meetingInput;
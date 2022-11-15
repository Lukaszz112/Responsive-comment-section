import { Content } from "./compontents/content/content";
import Comment from "./compontents/commentSection/comment";
import commentData from "../src/data/commentData.json";

function App() {
  return (
    <Content>
      <Comment Data={commentData}/>
    </Content>
  );
}

export default App;

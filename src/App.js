import { Content } from "./compontents/content/content";
import Comment from "./compontents/commentSection/comment";
import commentData from "../src/data/commentData.json";
import { MainSection } from "./MainSectionStyled";
import { CommentWritingField } from "./compontents/commentSection/commentWritingField/commentWritingField";

function App() {
  return (
    <Content>
      <MainSection>
        <Comment Data={commentData}/>
      </MainSection>
      <CommentWritingField Data={commentData}/>
    </Content>
  );
}

export default App;

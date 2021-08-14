import React from 'react';
import LeftBar from "./LeftBar"
import Main from "./Main";
import RightBar from "./RightBar";
function Home(props) {
    return (
        <div>
            <LeftBar />
      <Main />
      <RightBar />
        </div>
    );
}

export default Home;
/*import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
 
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'd75bd7c1-d3a8-4ad9-8c91-701b3a61bb7f',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
};

export default ChatsPage; */


import { PrettyChatWindow } from 'react-chat-engine-pretty'
 
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='YOUR-PROJECT-ID'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
};

export default ChatsPage;
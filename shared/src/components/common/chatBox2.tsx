import { CardsChat } from '../cards/chat'
 
const ChatBox = () => {
    return (
        <div className="fixed bottom-0 right-0">
            <div className="w-80   flex flex-col">
                <CardsChat />
            </div>
        </div>
    )
}

export default ChatBox
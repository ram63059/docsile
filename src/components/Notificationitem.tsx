import React from 'react'

interface NotificationProps {
  imageUrl: string;
  title: string;
  description: string;
  reactions: number;
  comments?: number; 
  location?: string; 
  type: 'post' | 'question' | 'job' | 'seminar'; 
}

  
const NotificationItem: React.FC<NotificationProps> = ({ imageUrl, title, description, reactions, comments, location, type }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        {imageUrl && (
          <img src={imageUrl} alt="Profile" className={"h-10 w-10 rounded-full mr-2"} />
        )}
        <div>
         

          <p className="text-sm text-gray-500 text-left" > <span className="font-medium" >{title} </span> {description}</p>

         
          
          <p className="text-xs text-gray-400 text-left">
            {reactions} Reactions
            {type === 'post' || type === 'question' ? (
              <> | {comments} Comments</>
            ) : (
              <> | {location}</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

  
  export default NotificationItem;
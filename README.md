📋Table of Contents
1. 🤖 Introduction
2. ⚙️ Tech Stack
3. 🔋 Features
4. 🤸 Quick Start
5. 🕸️ Assets & Code




🤖 Introduction
Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.It's a place where people help each other out.

⚙️ Tech Stack
* Next.js
* TypeScript
* Clerk
* getstream
* shadcn
* Tailwind CSS

- **Next.js**: A React framework for building server-rendered, static, and dynamic websites and applications.
- **TypeScript**: A superset of JavaScript that adds optional static typing, which helps catch errors and improve code maintainability.
- **Clerk**: Provides user authentication and authorization features, including social sign-on and traditional email/password methods.
- **GetStream**: Enables secure real-time functionality, including video and audio streaming, participant management, and meeting controls.
- **shadcn/ui**: A set of accessible and customizable React UI components.
  
🔋 Features

👉 **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.

👉 **New Meeting**: Quickly start a new meeting, configuring camera and microphone settings before joining.

👉 **Meeting Controls**: Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).

👉 **Exit Meeting**: Participants can leave a meeting, or creators can end it for all attendees.

👉 **Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

👉 **Past Meetings List**: Access a list of previously held meetings, including details and metadata.

👉 **View Recorded Meetings**: Access recordings of past meetings for review or reference.

👉 **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.

👉 **Join Meetings via Link**: Easily join meetings created by others by providing a link.

👉 **Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.
and many more, including code architecture and reusability.

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

 Clone the repository: `git clone https://github.com/your-username/meetX.git`

 Install dependencies: `npm install`

 Set up environment variables: Create a `.env.local` file and add the necessary configuration values (e.g., Clerk API keys, GetStream credentials).

 Start the development server: `npm run dev`
 
 Open the application in your browser: `http://localhost:3000`

🕸️ Assets & Code
You can find all the necessary assets and code for this project in the corresponding GitHub repository. Feel free to explore and customize the code to suit your needs.

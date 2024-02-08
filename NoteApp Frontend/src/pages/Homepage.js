import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const Homepage = () => {
  return (
    <Box>
      <Image
        position={"absolute"}
        width={550}
        right={0}
        src={
          "https://www.kindpng.com/picc/m/603-6033446_get-it-done-top-spiral-bound-notepad-with.png"
        }
      ></Image>
      <Heading textAlign={"start"} size={"2xl"} marginTop={2} paddingLeft={17}> 
       . Note App
      </Heading>
      <Text marginTop={5} maxW={"63%"} textAlign={"justify"} position={"relative"} paddingLeft={2}>
        {" "}
        <p>
          NoteMaster is a cutting-edge note-taking application meticulously
          crafted to revolutionize the way you organize your thoughts, tasks,
          and ideas. Developed with Node.js, React.js, and JavaScript, coupled
          with seamless MySQL database connectivity, NoteMaster offers a dynamic
          and intuitive platform for users to capture, manage, and access their
          notes effortlessly. Key Features: Intuitive Interface: NoteMaster
          boasts a sleek and user-friendly interface designed to enhance
          productivity and streamline the note-taking process. With its
          intuitive design, users can easily create, edit, and organize their
          notes with minimal effort. Cross-Platform Compatibility: Whether
          you're on your desktop, tablet, or smartphone, NoteMaster ensures
          seamless synchronization across all your devices. Access your notes
          anytime, anywhere, and never miss a beat. Customizable Categories:
          Stay organized with customizable categories that allow users to
          categorize their notes based on topics, projects, or personal
          preferences. With NoteMaster, finding the right note is just a few
          clicks away. Rich Text Formatting: Express your ideas with precision
          using NoteMaster's rich text formatting options. From bold and italics
          to bullet points and headings, customize your notes to suit your style
          and preferences. Advanced Search Functionality: Say goodbye to endless
          scrolling and searching. NoteMaster offers advanced search
          functionality, enabling users to quickly locate specific notes based
          on keywords, tags, or dates. Collaboration and Sharing: Collaborate
          effortlessly with colleagues, friends, or family members by sharing
          notes in real-time. With NoteMaster, collaboration has never been
          easier. Reminders and Notifications: Stay on top of your tasks and
          deadlines with NoteMaster's built-in reminder and notification system.
          Set reminders for important notes and receive notifications to ensure
          nothing slips through the cracks. Security and Privacy: Your data
          security is our top priority. NoteMaster employs advanced encryption
          protocols to safeguard your notes and ensure your privacy is protected
          at all times. Offline Access: No internet connection? No problem.
          NoteMaster offers offline access, allowing users to view and edit
          their notes even when they're offline. Your productivity knows no
          bounds. Backup and Restore: Rest easy knowing your notes are securely
          backed up and can be easily restored in case of accidental deletion or
          device failure. Experience the future of note-taking with NoteMaster.
          Whether you're a student, professional, or creative thinker,
          NoteMaster empowers you to capture ideas, stay organized, and unleash
          your full potential. Try NoteMaster today and elevate your note-taking
          experience to new heights.
        </p>
      </Text>
    </Box>
  );
};

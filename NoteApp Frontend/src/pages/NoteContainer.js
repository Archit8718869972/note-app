// src/components/NoteApp.js
import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Input,
  Textarea,
  Button,
  Container,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

const NoteContainer = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (title.trim() !== "" && body.trim() !== "") {
      setNotes((prevNotes) => [...prevNotes, { title, body }]);
      setTitle("");
      setBody("");
    }
  };

  const fetchAllNotes = async () => {
    const token = localStorage.getItem("Token");
    const response = await axios.post("http://localhost:4000/note/fetchallnotes", { token });
    console.log('>>>>>>>>>>>response : ', response);
    const result = await response.data;
    console.log('>>>>>>>>>>>res : ', result);
    setNotes(result.data);
    console.log('>>>>>>>>>>>note : ', notes);
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <Container maxW="container.md" mt={8}>
      <VStack align="stretch" spacing={4}>
        <Input
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Enter note body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleAddNote}>
          Add Note
        </Button>
      </VStack>

      <Box mt={8}>
        <h2>Your Notes:</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <strong>{note.title}</strong>: {note.body}
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default NoteContainer;

Project Documentation: ToDo Web Application

Group Number: Group 24
Feature: ToDo List Application with Email Links and Drag-and-Drop Reordering using Bootstrap for Styling

Group Members:

	•	Carter Bartz

Feature Descriptions

The ToDo List web application includes the following capabilities:

	•	Adding and managing tasks: Users can add, edit, and remove tasks.
	•	Filtering tasks: Tasks can be filtered by their status (All, Active, Completed).
	•	Reordering tasks: Users can reorder tasks using drag-and-drop functionality.
	•	Email detection: Automatically detects email addresses within tasks and converts them into clickable mailto links.
	•	Persistent storage: Tasks are saved in the browser’s LocalStorage to maintain state between sessions.

Project Links

	•	Hosted Site: [Insert link here]
	•	GitHub Repository: [Insert link here]
	•	Group Presentation Slideshow: [Insert link here]

Creative Objective

The main goal of this project was to develop an interactive and user-friendly ToDo list application that enhances productivity. Key features such as drag-and-drop task reordering and automatic email detection were implemented to address common user needs for task management and quick communication. The application also integrates persistent storage, ensuring tasks remain available after sessions end.

Tech Summary

The ToDo application was developed using the following technologies and tools:

	•	HTML/CSS: Used for basic structure and custom styling.
	•	JavaScript: Handles core functionality, including task addition, deletion, status toggling, and filtering.
	•	Bootstrap 4.5.2: Provides a responsive design and prebuilt UI components.
	•	SortableJS: A lightweight library enabling drag-and-drop reordering of tasks.
	•	LocalStorage API: Ensures tasks persist across browser sessions.
	•	Regex: Utilized for detecting and formatting email addresses within task text as clickable mailto links.

Implementation Details

Task Addition

	•	Users can add tasks by clicking the ‘Add ToDo’ button or pressing the ‘Enter’ key.
	•	Task text, including email addresses, can be input in the task field.

<h1>Task Filtering</h1>

	•	Tasks can be filtered into the following categories:
	•	All: Shows all tasks.
	•	Active: Displays incomplete tasks.
	•	Completed: Displays completed tasks.

Email Detection

	•	Email addresses within task text are automatically detected and converted into clickable mailto links using a regex pattern.

Reordering

	•	Tasks can be reordered via drag-and-drop, facilitated by SortableJS, enabling users to visually prioritize tasks.

LocalStorage

	•	The LocalStorage API is used to save tasks so that the list persists between browser sessions, even after a page refresh.

Individual Member Notes

	•	Carter Bartz: I contributed to the full development of the application, including coding, testing, and refining features.

Conclusion

Building this ToDo List application was a valuable experience in integrating web technologies to create a functional and cohesive user experience. I gained hands-on experience with libraries like SortableJS and advanced features such as email hyperlinking using regex. One of the main challenges faced was ensuring correct email hyperlink formatting, which was solved through more refined regex expressions. Future improvements could include adding user authentication and implementing task deadlines for advanced task management.

References

	•	SortableJS Documentation
	•	Bootstrap 4.5 Documentation
	•	MDN Web Docs - LocalStorage
	•	Regex Tutorial
	•	Stack Overflow for problem-solving assistance

This format organizes the content into clearly defined sections, making it easy to read and understand. You can replace the placeholder links with actual URLs before sharing or presenting the documentation.

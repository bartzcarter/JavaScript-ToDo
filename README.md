#Project Documentation: ToDo Web Application

Group Number: Group 24
Feature: ToDo List Application with Email Links and Drag-and-Drop Reordering using Bootstrap for styling

Group Members:

	•	Carter Bartz

#Feature Descriptions

This project features a ToDo List web application with the following capabilities:

	•	Adding and managing tasks in a list.
	•	Filtering tasks based on their status (All, Active, Completed).
	•	Reordering tasks using drag-and-drop functionality.
	•	Email detection within tasks, allowing users to click on an email address and open their default mail application.

Project Links

Hosted Site Links:

GitHub Repository:

Group Presentation Slideshow:

Creative Objective

The goal of this project was to create an intuitive and interactive ToDo list application that enhances user productivity through modern web features. I aimed to solve common issues such as task reordering and quick email interactions directly within the task list.

Tech Summary

The ToDo application is built using the following technologies and tools:

	•	HTML/CSS: Basic structure and custom styling of the web application.
	•	JavaScript: Core functionality including task addition, deletion, status toggling, and filtering.
	•	Bootstrap 4.5.2: For responsive design and UI components.
	•	SortableJS: A lightweight library that allows reordering of tasks via drag-and-drop.
	•	LocalStorage API: Used for persisting tasks between sessions.
	•	Regex: Utilized for detecting and transforming emails within tasks into clickable mailto links.

Implementation Details:

	•	Task Addition: Tasks are added by pressing the ‘Add ToDo’ button or hitting the ‘Enter’ key.
	•	Filtering: The application supports filtering tasks into ‘All’, ‘Active’, and ‘Completed’ categories.
	•	Email Interaction: Email addresses within tasks are recognized and hyperlinked using JavaScript and regex.
	•	Reordering: Drag-and-drop functionality is implemented with SortableJS, allowing users to rearrange tasks.
	•	LocalStorage: Ensures tasks persist across page refreshes by saving and loading tasks from the browser’s storage.

Individual Member Notes

Carter Bartz: I contributed to the entire development of this application

Conclusion

Throughout this project, I learned the importance of combining different web technologies to create an engaging and functional user experience. The integration of third-party libraries like SortableJS was insightful, as I gained experience with external tools and their documentation. I successfully met our objectives, though I encountered challenges with email detection that were resolved with improved regex expressions. In the future, I would focus on additional features such as task deadlines and user authentication.

References

	•	SortableJS Documentation
	•	Bootstrap 4.5 Documentation
	•	MDN Web Docs - LocalStorage
	•	Regex Tutorial
	•	Stack Overflow for community-driven solutions

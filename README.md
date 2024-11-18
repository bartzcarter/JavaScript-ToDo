#Project Documentation: ToDo Web Application

Group Number: Group 24Feature: ToDo List Application with Email Links and Drag-and-Drop Reordering using Bootstrap for styling

Group Members:

Carter Bartz

Feature Descriptions

The ToDo List web application has the following capabilities:

Adding and managing tasks in a list.

Filtering tasks based on their status (All, Active, Completed).

Reordering tasks using drag-and-drop functionality.

Automatic detection of email addresses within tasks, which are turned into clickable mailto links.

Persistent task storage using the browser’s LocalStorage to maintain tasks between sessions.

Project Links

Hosted Site: [Insert link here]

GitHub Repository: [Insert link here]

Group Presentation Slideshow: [Insert link here]

Creative Objective

The primary goal of this project was to create a user-friendly, interactive ToDo list application that improves productivity through features like drag-and-drop task reordering and quick email interactions within tasks. The project addresses common user needs for task management and integrates useful enhancements such as persistent task storage.

Tech Summary

The ToDo application was developed using the following technologies and tools:

HTML/CSS: For basic structure and custom styling.

JavaScript: Handles the core application logic, including task addition, deletion, status toggling, and filtering.

Bootstrap 4.5.2: Provides responsive design and prebuilt UI components.

SortableJS: A lightweight library for enabling drag-and-drop reordering of tasks.

LocalStorage API: Used to persist tasks and ensure they remain available even after page refreshes.

Regex: Applied to detect and format email addresses within task text as clickable mailto links.

Implementation Details

Task Addition

Tasks are added when the user clicks the ‘Add ToDo’ button or presses the ‘Enter’ key. The input field takes the task text, which can include email addresses.

Task Filtering

The application offers filtering options that categorize tasks into:

All: Shows all tasks.

Active: Displays only incomplete tasks.

Completed: Displays only completed tasks.

Email Detection

Email addresses within the task text are automatically detected using a regex pattern and converted into clickable mailto links, enhancing quick email interactions.

Reordering

Tasks can be reordered via drag-and-drop functionality implemented with SortableJS. This enables users to prioritize tasks visually.

LocalStorage

The application uses the LocalStorage API to save tasks, allowing users to retain their task list even after the browser is closed or the page is refreshed.

Sample Code Excerpt

// Initialize SortableJS for reordering
new Sortable(document.getElementById("todoList"), {
  animation: 150,
  onEnd: function (event) {
    // Update the task array to reflect the new order
    const [movedTask] = tasks.splice(event.oldIndex, 1);
    tasks.splice(event.newIndex, 0, movedTask);

    // Re-render tasks and save the updated order
    saveTasks();
    renderTasks();
  },
});

Individual Member Notes

Carter Bartz: I contributed to the full development of this application, including coding, testing, and refining features.

Conclusion

Building this ToDo List application provided valuable insights into integrating different web technologies to create a cohesive and functional user experience. I enhanced my knowledge of using third-party libraries like SortableJS and improved my ability to implement practical features, such as regex for email detection. One of the key challenges faced was ensuring accurate email hyperlinking, which was solved with more precise regex expressions. Future development could include implementing user authentication and adding task deadlines for more advanced task management.

References

SortableJS Documentation

Bootstrap 4.5 Documentation

MDN Web Docs - LocalStorage

Regex Tutorial

Stack Overflow for problem-solving assistance

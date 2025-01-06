Quiz Applications:

A web-based quiz application that allows users to register, log in, and participate in quizzes on various topics. Admin users can manage topics, questions, and answers.

The application is launches in the port 7777 by running the below command.
Commannd to run: docker compose up --build
Command to run test:npx playwright test e2e-playwright/tests
Description:
Login as a user- User can register and login to the quiz application , start playing the quiz by choosing a topic and answering the questions. User can also add a queston to the topic .
Login as a admin - Admin can only add a topic to the quiz application and can perform all the action in the application like adding,deleting..
Used a Tailwind for styling.
**User Features**:
  - Register and log in to access the quiz.
  - Browse available quiz topics.
  - Answer multiple-choice questions.
  - Receive instant feedback on correct/incorrect answers.
- **Admin Features**:
  - Add, edit, and delete topics.
  - 
URL:https://quiz-application-61u0.onrender.com

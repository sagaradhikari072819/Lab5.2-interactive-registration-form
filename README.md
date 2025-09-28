1. How did event.preventDefault() help in handling form submission?
   It is helping by checking if validaion is fail not submiting and alerting the user.
2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
   HTML5 provides declarative, built-in validation for basic checks, while JavaScript offers greater flexibility for complex or dynamic validation logic.because they are most effective when used together.
3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
  I used localStorage.setItem(): When a user logs in or provides their username, call this method with a key username and the corresponding value. While convenient for non-sensitive data like a username, it has security limitations which in not good for sensitive information.
4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
   while working with passport and conform Passport section i struggled to have a validaton. After doing some research I figureout the code that help me to achive the functionality I was looking for.
5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
   I used event listner, functiona and alert to notify user with error massage.

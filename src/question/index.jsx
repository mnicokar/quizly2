const qBank = [
    {
        "question": "What is the keyword used for defining a function in Python?",
        "answers": ["define", "function", "def", "define_function"],
        "correct": "def",
        "questionId": "000001"
    },
      
    {
        "question": "Which of the following is not a built-in data type in Python?",
        "answers": ["List", "Dictionary", "Set", "StringBuffer"],
        "correct": "StringBuffer",
        "questionId": "000002"
    },
    {
        "question": "What is the output of the following code? \n nums = [1, 2, 3, 4, 5] \n print(nums[1:3])",
        "answers": ["[1, 2, 3]", "[2, 3]", "[1, 2]", "[2, 3, 4]"],
        "correct": "[2, 3]",
        "questionId": "000003"
    },
    {
        "question": "What is the output of the following code? \n num = 10 \n print(f'The number is {num}')",
        "answers": ["The number is 10", "The number is {num}", "The number is '10'", "The number is [10]"],
        "correct": "The number is 10",
        "questionId": "000004"
    },
    {
        "question": "What is the purpose of __init__() function in Python?",
        "answers": ["To define a constructor for a class", "To define a destructor for a class", "To define a class method", "To define a static method"],
        "correct": "To define a constructor for a class",
        "questionId": "000005"
    }
      
    ];
    
    // n = 5 to export 5 question
    export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
    
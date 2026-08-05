/* ==========================================================================
   AbhyasLab - UNIT 5
   Object-Oriented Programming - Expanded Practice Edition.

   Built from the supplied 86-page Unit 5 PDF. The source organisation and
   terminology are preserved, then expanded with inline SVG diagrams, small
   animations, prediction games, matching interactions, staged coding tasks,
   revision checkpoints, practical-program missions, a final test and project.
   ========================================================================== */

const UNIT_5 = {
  "unit": "Unit 5",
  "unitTitle": "Object-Oriented Programming - Practice Edition",
  "topics": [
    {
      "id": "u5t01",
      "title": "OOP Paradigm Shift - From Procedures to Objects",
      "summary": "Compare procedural programming with object-oriented modelling and identify why large software benefits from objects.",
      "notebookLM": "",
      "notes": "\n<h4>Introduction to OOP Part 1 - The Paradigm Shift</h4>\n<p>Procedural programs focus on a sequence of instructions. Object-oriented programs organise state and behaviour into cooperating objects. The source uses an assembly line and a restaurant to show the difference.</p>\n<h4>The real-world analogy: Assembly Line versus Restaurant</h4>\n<p>An assembly line follows one long sequence. A restaurant divides responsibility among Customer, Waiter and Chef objects. Each object owns a clear job and communicates through defined actions.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Two ways to organise a program\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Two ways to organise a program</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Instructions</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Objects</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Maintainable system</text></svg>\n<h4>Core ideas</h4><ul><li>Procedural programming is useful for short, linear tasks.</li><li>OOP bundles related data and actions inside objects.</li><li>OOP improves organisation, reusability and safety in large programs.</li><li>A good OOP model starts by identifying real entities and their responsibilities.</li></ul><h4>Procedural style</h4><pre><code>name = &quot;Asha&quot;\nscore = 80\nprint(name, score)</code></pre><h4>Object-oriented idea</h4><pre><code>class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\nstudent = Student(&quot;Asha&quot;, 80)\nprint(student.name, student.score)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Cart:\n    def total(self):\n        return 250\n\nc = Cart()\nprint(c.total())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Cart</button><button data-o=\"1\">250</button><button data-o=\"2\">total</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The object calls its total method, which returns 250.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Student</button><button>:</button><button data-bad>\n    score = 80</button></div><p class=\"w__why\">A bare class variable is shared by the class; personal student data should normally be attached to self in __init__.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Object</code></button><button data-pair=\"p1\"><code>Class</code></button><button data-pair=\"p2\"><code>Responsibility</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">A job owned by an object</button><button data-pair=\"p1\">A blueprint</button><button data-pair=\"p0\">A usable instance in memory</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which description best matches OOP?",
          "options": [
            "A list of unrelated commands",
            "Data and behaviour grouped into objects",
            "Only loops and conditions",
            "Code without functions"
          ],
          "answer": 1,
          "why": "OOP organises related state and behaviour into objects."
        },
        {
          "q": "Why was OOP adopted for large programs?",
          "options": [
            "To remove variables",
            "To reduce screen brightness",
            "To improve organisation, reuse and safety",
            "To stop using functions"
          ],
          "answer": 2,
          "why": "Large systems are easier to manage when responsibilities are separated."
        },
        {
          "q": "Which is an OOP-style model for a school?",
          "options": [
            "One 10,000-line script",
            "Student, Teacher and Classroom objects",
            "Only a list of marks",
            "Only print statements"
          ],
          "answer": 1,
          "why": "The real entities become collaborating objects."
        },
        {
          "q": "Which statement is procedural thinking?",
          "options": [
            "A cart calculates its own total",
            "A Player object owns health",
            "Run these steps from top to bottom",
            "A BankAccount validates withdrawals"
          ],
          "answer": 2,
          "why": "Procedural programming emphasises a sequence of steps."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Model a Student Object",
          "brief": "Create a Student class with name and score, instantiate one student and print both values.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha\n91"
            },
            {
              "type": "sourceIncludes",
              "value": "class Student",
              "message": "Use class Student"
            },
            {
              "type": "sourceIncludes",
              "value": "__init__",
              "message": "Use __init__"
            },
            {
              "type": "sourceIncludes",
              "value": "self.name",
              "message": "Use self.name"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Asha"
          ],
          "id": "u5t01p01"
        },
        {
          "kind": "code",
          "title": "Model a Game Enemy",
          "brief": "Create an Enemy class with health and print the health of one object.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100"
            },
            {
              "type": "sourceIncludes",
              "value": "class Enemy",
              "message": "Use class Enemy"
            },
            {
              "type": "sourceIncludes",
              "value": "self.health",
              "message": "Use self.health"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 100"
          ],
          "id": "u5t01p02"
        },
        {
          "kind": "code",
          "title": "Give an Object Behaviour",
          "brief": "Create a Light class with an on() method that prints Light on.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Light on"
            },
            {
              "type": "sourceIncludes",
              "value": "class Light",
              "message": "Use class Light"
            },
            {
              "type": "sourceIncludes",
              "value": "def on",
              "message": "Use def on"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Light on"
          ],
          "id": "u5t01p03"
        },
        {
          "kind": "code",
          "title": "Reusable Objects",
          "brief": "Create two Robot objects from one class and print their names.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "R1\nR2"
            },
            {
              "type": "sourceIncludes",
              "value": "class Robot",
              "message": "Use class Robot"
            },
            {
              "type": "sourceIncludes",
              "value": "Robot(",
              "message": "Use Robot("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: R1"
          ],
          "id": "u5t01p04"
        }
      ]
    },
    {
      "id": "u5t02",
      "title": "Classes, Objects and Instantiation",
      "summary": "Understand a class as a blueprint, an object as an instance, and instantiation as the act of creating an object.",
      "notebookLM": "",
      "notes": "\n<h4>Introduction to OOP Part 2 - Classes and Objects</h4>\n<p>A class defines what a type of object can store and do. An object is a concrete instance created from that class. Instantiation is the creation step.</p>\n<h4>The real-world analogy: Blueprint and Houses</h4>\n<p>One architectural blueprint can be used to construct many houses. In the same way, one Dog class can create Fido, Rex and many other Dog objects.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Blueprint to instances\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Blueprint to instances</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Class blueprint</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Instantiation</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Object instances</text></svg>\n<h4>Core ideas</h4><ul><li>A class is a reusable template.</li><li>An object, also called an instance, occupies memory.</li><li>Calling ClassName() instantiates an object.</li><li>Many objects can be created independently from one class.</li></ul><h4>Empty class and instances</h4><pre><code>class Robot:\n    pass\n\nrobot_1 = Robot()\nrobot_2 = Robot()\nprint(type(robot_1).__name__)\nprint(robot_1 is robot_2)</code></pre><h4>Objects carry different data</h4><pre><code>class Dog:\n    def __init__(self, name):\n        self.name = name\n\nfido = Dog(&quot;Fido&quot;)\nrex = Dog(&quot;Rex&quot;)\nprint(fido.name, rex.name)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class House:\n    pass\n\nh1 = House()\nh2 = House()\nprint(h1 is h2)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">False</button><button data-o=\"2\">House</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Each call to House() creates a separate object.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>my_car</button><button>=</button><button data-bad>new</button><button>Car()</button></div><p class=\"w__why\">Python does not use the new keyword for ordinary instantiation; write my_car = Car().</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Instantiation</code></button><button data-pair=\"p1\"><code>Class</code></button><button data-pair=\"p2\"><code>Instance</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Physical object</button><button data-pair=\"p1\">Reusable blueprint</button><button data-pair=\"p0\">Creating an instance</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is a class?",
          "options": [
            "A physical instance",
            "A blueprint for objects",
            "A syntax error",
            "A loop"
          ],
          "answer": 1,
          "why": "A class describes the state and behaviour objects will have."
        },
        {
          "q": "What is an object?",
          "options": [
            "The class keyword",
            "A concrete instance created from a class",
            "Only a variable name",
            "A module"
          ],
          "answer": 1,
          "why": "An object is the usable instance in memory."
        },
        {
          "q": "What does instantiation mean?",
          "options": [
            "Deleting a class",
            "Creating an object from a class",
            "Importing a module",
            "Overriding a method"
          ],
          "answer": 1,
          "why": "Instantiation is the construction of an instance."
        },
        {
          "q": "How many classes and objects are needed for 50 identical spaceship types?",
          "options": [
            "50 classes, 1 object",
            "1 class, 50 objects",
            "50 classes, 50 objects",
            "1 class, 1 object"
          ],
          "answer": 1,
          "why": "One blueprint can create many instances."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "First Blueprint",
          "brief": "Create an empty Spaceship class, instantiate ship1 and print its type name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Spaceship"
            },
            {
              "type": "sourceIncludes",
              "value": "class Spaceship",
              "message": "Use class Spaceship"
            },
            {
              "type": "sourceIncludes",
              "value": "pass",
              "message": "Use pass"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Spaceship"
          ],
          "id": "u5t02p01"
        },
        {
          "kind": "code",
          "title": "Two Independent Objects",
          "brief": "Create two Box objects and prove they are different objects.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": "class Box",
              "message": "Use class Box"
            },
            {
              "type": "sourceIncludes",
              "value": "Box()",
              "message": "Use Box()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: False"
          ],
          "id": "u5t02p02"
        },
        {
          "kind": "code",
          "title": "Phone Instances",
          "brief": "Create a Phone class with model data and instantiate two models.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Alpha\nBeta"
            },
            {
              "type": "sourceIncludes",
              "value": "class Phone",
              "message": "Use class Phone"
            },
            {
              "type": "sourceIncludes",
              "value": "self.model",
              "message": "Use self.model"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Alpha"
          ],
          "id": "u5t02p03"
        },
        {
          "kind": "code",
          "title": "Class Name Convention",
          "brief": "Create a properly named DarkKnight class and print its class name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "DarkKnight"
            },
            {
              "type": "sourceIncludes",
              "value": "class DarkKnight",
              "message": "Use class DarkKnight"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: DarkKnight"
          ],
          "id": "u5t02p04"
        }
      ]
    },
    {
      "id": "u5t03",
      "title": "The Four Pillars - Encapsulation and Inheritance",
      "summary": "Recognise how encapsulation protects state and inheritance reuses shared behaviour.",
      "notebookLM": "",
      "notes": "\n<h4>Introduction to OOP Part 3 - Encapsulation and Inheritance</h4>\n<p>Encapsulation and inheritance are two central OOP design ideas. Encapsulation bundles and protects data; inheritance creates family relationships between reusable classes.</p>\n<h4>The real-world analogy: Capsules and Genetics</h4>\n<p>A capsule protects medicine inside its shell. Genetics passes shared traits from parent to child while leaving space for unique traits.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Two pillars working together\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Two pillars working together</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Protected state</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Reusable parent</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Specialised child</text></svg>\n<h4>Core ideas</h4><ul><li>Encapsulation combines data and methods and controls access.</li><li>Private-style attributes use double underscores in Python.</li><li>Inheritance lets a child class reuse a parent class.</li><li>Child classes can add behaviour without rewriting shared behaviour.</li></ul><h4>Encapsulation sketch</h4><pre><code>class Account:\n    def __init__(self):\n        self.__balance = 100\n\n    def balance(self):\n        return self.__balance</code></pre><h4>Inheritance sketch</h4><pre><code>class Animal:\n    def sleep(self):\n        return &quot;Sleeping&quot;\n\nclass Bird(Animal):\n    def fly(self):\n        return &quot;Flying&quot;</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Animal:\n    def sleep(self):\n        return &quot;Rest&quot;\n\nclass Lion(Animal):\n    pass\n\nprint(Lion().sleep())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Lion</button><button data-o=\"1\">Rest</button><button data-o=\"2\">sleep</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Lion inherits sleep from Animal.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Account</button><button>:</button><button data-bad>\n    balance = 1000</button></div><p class=\"w__why\">Sensitive per-account data should not be a public shared class variable.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Encapsulation</code></button><button data-pair=\"p1\"><code>Inheritance</code></button><button data-pair=\"p2\"><code>Child class</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Adds specialised behaviour</button><button data-pair=\"p1\">Reuse parent behaviour</button><button data-pair=\"p0\">Protect internal state</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does encapsulation mainly protect?",
          "options": [
            "File names",
            "Internal object data",
            "Only loops",
            "Internet access"
          ],
          "answer": 1,
          "why": "Encapsulation controls interaction with internal state."
        },
        {
          "q": "What does inheritance mainly provide?",
          "options": [
            "Code reuse through parent-child classes",
            "Automatic encryption",
            "Database storage",
            "Faster typing only"
          ],
          "answer": 0,
          "why": "Shared parent behaviour can be inherited."
        },
        {
          "q": "If Lion inherits from Animal, must Lion rewrite Animal.sleep()?",
          "options": [
            "Always",
            "No, it inherits it",
            "Only on Sundays",
            "Python forbids sleep"
          ],
          "answer": 1,
          "why": "Inherited methods are available unless overridden."
        },
        {
          "q": "Which attribute looks private by Python convention?",
          "options": [
            "self.health",
            "self._health",
            "self.__health",
            "health.self"
          ],
          "answer": 2,
          "why": "Double leading underscores trigger name mangling."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Protected Account",
          "brief": "Create an Account with a private balance and a public getter.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "500"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__balance",
              "message": "Use self.__balance"
            },
            {
              "type": "sourceIncludes",
              "value": "get_balance",
              "message": "Use get_balance"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 500"
          ],
          "id": "u5t03p01"
        },
        {
          "kind": "code",
          "title": "Animal and Bird",
          "brief": "Create Animal.sleep(), inherit it in Bird, add fly(), and print both results.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Sleeping\nFlying"
            },
            {
              "type": "sourceIncludes",
              "value": "class Bird(Animal)",
              "message": "Use class Bird(Animal)"
            },
            {
              "type": "sourceIncludes",
              "value": "def fly",
              "message": "Use def fly"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Sleeping"
          ],
          "id": "u5t03p02"
        },
        {
          "kind": "code",
          "title": "Vehicle Family",
          "brief": "Create Vehicle.start() and a Car child that uses it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Engine started"
            },
            {
              "type": "sourceIncludes",
              "value": "class Car(Vehicle)",
              "message": "Use class Car(Vehicle)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Engine started"
          ],
          "id": "u5t03p03"
        },
        {
          "kind": "code",
          "title": "Safe Health Update",
          "brief": "Create Player with private health and a damage method that never allows health below zero.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__health",
              "message": "Use self.__health"
            },
            {
              "type": "sourceIncludes",
              "value": "max(",
              "message": "Use max("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 0"
          ],
          "id": "u5t03p04"
        }
      ]
    },
    {
      "id": "u5t04",
      "title": "The Four Pillars - Polymorphism and Abstraction",
      "summary": "Use one command with many behaviours and hide complex implementation behind simple interfaces.",
      "notebookLM": "",
      "notes": "\n<h4>Introduction to OOP Part 4 - Polymorphism and Abstraction</h4>\n<p>Polymorphism lets different objects respond differently to the same method name. Abstraction hides internal complexity and exposes only essential operations.</p>\n<h4>The real-world analogy: Speak Command and Car Dashboard</h4>\n<p>A trainer says speak to a Dog, Cat and Cow, producing different sounds. A driver uses pedals and a wheel without learning the engine's internal mechanics.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"One command, many forms\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">One command, many forms</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Common interface</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Different object</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Specific behaviour</text></svg>\n<h4>Core ideas</h4><ul><li>Polymorphism means many forms of one operation.</li><li>Method overriding is a common way to implement polymorphism.</li><li>Abstraction hides implementation details.</li><li>A clean interface reduces cognitive load for users of a class.</li></ul><h4>Polymorphic speak</h4><pre><code>class Dog:\n    def speak(self): return &quot;Woof&quot;\nclass Cat:\n    def speak(self): return &quot;Meow&quot;\n\nfor animal in [Dog(), Cat()]:\n    print(animal.speak())</code></pre><h4>Abstracted interface</h4><pre><code>class CoffeeMachine:\n    def make_coffee(self):\n        return &quot;Coffee ready&quot;</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Dog:\n    def speak(self): return &quot;Woof&quot;\nclass Cat:\n    def speak(self): return &quot;Meow&quot;\nfor x in [Dog(), Cat()]:\n    print(x.speak())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Woof only</button><button data-o=\"1\">Meow only</button><button data-o=\"2\">Woof then Meow</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Each object provides its own form of speak().</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Car</button><button>:</button><button data-bad>\n    def drive():</button></div><p class=\"w__why\">An instance method needs self as its first parameter.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Polymorphism</code></button><button data-pair=\"p1\"><code>Abstraction</code></button><button data-pair=\"p2\"><code>Interface</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Simple operations exposed to users</button><button data-pair=\"p1\">Hide complex implementation</button><button data-pair=\"p0\">One command, different behaviour</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does polymorphism literally suggest?",
          "options": [
            "Hidden data",
            "Many forms",
            "One parent",
            "No methods"
          ],
          "answer": 1,
          "why": "Poly means many and morph means forms."
        },
        {
          "q": "Which best demonstrates polymorphism?",
          "options": [
            "Every class has different method names",
            "Dog.speak and Cat.speak return different sounds",
            "A private balance",
            "A class variable"
          ],
          "answer": 1,
          "why": "The same method call produces object-specific behaviour."
        },
        {
          "q": "What is abstraction designed to hide?",
          "options": [
            "Only names",
            "Complex implementation details",
            "All public methods",
            "User input"
          ],
          "answer": 1,
          "why": "The user sees a simple interface instead of internal machinery."
        },
        {
          "q": "Which analogy represents abstraction?",
          "options": [
            "A bank vault",
            "A family tree",
            "A steering wheel hiding engine mechanics",
            "A duplicate list"
          ],
          "answer": 2,
          "why": "The controls are simple while the complex engine is hidden."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Polymorphic Sounds",
          "brief": "Create Dog and Cat classes with speak() and call both in one loop.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Woof\nMeow"
            },
            {
              "type": "sourceIncludes",
              "value": "def speak",
              "message": "Use def speak"
            },
            {
              "type": "sourceIncludes",
              "value": "for pet in",
              "message": "Use for pet in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Woof"
          ],
          "id": "u5t04p01"
        },
        {
          "kind": "code",
          "title": "Polymorphic Attack",
          "brief": "Create Warrior and Mage with attack() methods and call both through a loop.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Sword strike\nFire spell"
            },
            {
              "type": "sourceIncludes",
              "value": "def attack",
              "message": "Use def attack"
            },
            {
              "type": "sourceIncludes",
              "value": "for hero in",
              "message": "Use for hero in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Sword strike"
          ],
          "id": "u5t04p02"
        },
        {
          "kind": "code",
          "title": "Simple Interface",
          "brief": "Create a WashingMachine with start() that hides three internal helper calls and prints the final steps.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Fill\nWash\nDrain"
            },
            {
              "type": "sourceIncludes",
              "value": "def start",
              "message": "Use def start"
            },
            {
              "type": "sourceIncludes",
              "value": "self._wash",
              "message": "Use self._wash"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Fill"
          ],
          "id": "u5t04p03"
        },
        {
          "kind": "code",
          "title": "Shape Area Forms",
          "brief": "Create Square and Rectangle classes that each implement area().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "16\n15"
            },
            {
              "type": "sourceIncludes",
              "value": "def area",
              "message": "Use def area"
            },
            {
              "type": "sourceIncludes",
              "value": "for shape in",
              "message": "Use for shape in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 16"
          ],
          "id": "u5t04p04"
        }
      ]
    },
    {
      "id": "u5t05",
      "title": "Revision Checkpoint 1 - OOP Foundations",
      "summary": "Review paradigms, blueprints, instances and the four pillars before writing full classes.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 1 - OOP Foundations</h4>\n<p>This checkpoint combines the introductory ideas. Students classify examples, build tiny blueprints and explain which pillar is active.</p>\n<h4>The real-world analogy: Architect&#x27;s Design Review</h4>\n<p>Before construction starts, an architect confirms the blueprint, the planned buildings and the safety rules. This checkpoint does the same for OOP foundations.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Foundation review loop\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Foundation review loop</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Identify entity</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Choose pillar</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Build and test</text></svg>\n<h4>Core ideas</h4><ul><li>Class equals blueprint; object equals usable instance.</li><li>Instantiation creates an object.</li><li>Encapsulation protects state.</li><li>Inheritance reuses code.</li><li>Polymorphism varies behaviour; abstraction hides complexity.</li></ul><h4>Mini model</h4><pre><code>class Door:\n    def open(self):\n        return &quot;Open&quot;\n\ndoor = Door()\nprint(door.open())</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n    pass\nx = A()\nprint(type(x).__name__)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">x</button><button data-o=\"1\">A</button><button data-o=\"2\">class</button><button data-o=\"3\">object</button></div><p class=\"w__why\">The instance x was created from class A.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Cat</button><button data-bad>inherits</button><button>Animal</button></div><p class=\"w__why\">Python inheritance syntax is class Cat(Animal):.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Blueprint</code></button><button data-pair=\"p1\"><code>Usable entity</code></button><button data-pair=\"p2\"><code>Creation process</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Instantiation</button><button data-pair=\"p1\">Object</button><button data-pair=\"p0\">Class</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which term means creating an object from a class?",
          "options": [
            "Encapsulation",
            "Instantiation",
            "Abstraction",
            "Iteration"
          ],
          "answer": 1,
          "why": "Instantiation creates the instance."
        },
        {
          "q": "Which pillar prevents direct unsafe balance changes?",
          "options": [
            "Polymorphism",
            "Inheritance",
            "Encapsulation",
            "Abstraction"
          ],
          "answer": 2,
          "why": "Encapsulation protects internal state."
        },
        {
          "q": "Which pillar lets different enemies respond to attack() differently?",
          "options": [
            "Polymorphism",
            "Encapsulation",
            "Composition",
            "Garbage collection"
          ],
          "answer": 0,
          "why": "The same command takes many forms."
        },
        {
          "q": "Which pillar hides engine details behind drive()?",
          "options": [
            "Inheritance",
            "Abstraction",
            "Encapsulation only",
            "Instantiation"
          ],
          "answer": 1,
          "why": "Abstraction exposes a simple interface."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Foundation Model",
          "brief": "Create a Book class, instantiate one book and print its title.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Python Basics"
            },
            {
              "type": "sourceIncludes",
              "value": "class Book",
              "message": "Use class Book"
            },
            {
              "type": "sourceIncludes",
              "value": "__init__",
              "message": "Use __init__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Python Basics"
          ],
          "id": "u5t05p01"
        },
        {
          "kind": "code",
          "title": "Pillar Classifier in Code",
          "brief": "Create a private score with a getter to demonstrate encapsulation.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__score",
              "message": "Use self.__score"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 10"
          ],
          "id": "u5t05p02"
        },
        {
          "kind": "code",
          "title": "Inheritance Review",
          "brief": "Create Device.turn_on() and inherit it in Laptop.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "On"
            },
            {
              "type": "sourceIncludes",
              "value": "class Laptop(Device)",
              "message": "Use class Laptop(Device)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: On"
          ],
          "id": "u5t05p03"
        },
        {
          "kind": "code",
          "title": "Polymorphism Review",
          "brief": "Create Email and SMS classes with send(), then call both in one loop.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Email sent\nSMS sent"
            },
            {
              "type": "sourceIncludes",
              "value": "def send",
              "message": "Use def send"
            },
            {
              "type": "sourceIncludes",
              "value": "for channel in",
              "message": "Use for channel in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Email sent"
          ],
          "id": "u5t05p04"
        }
      ]
    },
    {
      "id": "u5t06",
      "title": "Creating Classes and Understanding self",
      "summary": "Write class definitions, instantiate objects and use self to refer to the current instance.",
      "notebookLM": "",
      "notes": "\n<h4>Classes and Objects Part 1 - The Blueprint, Building and self</h4>\n<p>Python classes begin with the class keyword. Methods live inside the class. self represents the specific object currently running the method.</p>\n<h4>The real-world analogy: The word &#x27;my&#x27;</h4>\n<p>Saying 'wash my car' identifies the exact car. self serves the same purpose: it points to the current object.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"How self is supplied\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">How self is supplied</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">object.method()</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">self receives object</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">method uses object data</text></svg>\n<h4>Core ideas</h4><ul><li>Class names normally use CamelCase.</li><li>An empty class may use pass.</li><li>Instance methods receive self first.</li><li>Python passes the calling object into self automatically.</li></ul><h4>Basic class</h4><pre><code>class Robot:\n    pass\n\nr = Robot()\nprint(type(r).__name__)</code></pre><h4>self selects the caller</h4><pre><code>class Robot:\n    def identify(self):\n        return id(self)\n\nr1 = Robot()\nprint(r1.identify() == id(r1))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Greeter:\n    def hello(self):\n        return &quot;Hi&quot;\n\ng = Greeter()\nprint(g.hello())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">self</button><button data-o=\"1\">Hi</button><button data-o=\"2\">Greeter</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Python supplies g as self and the method returns Hi.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>def</button><button>bark</button><button>(</button><button data-bad>)</button><button>:</button></div><p class=\"w__why\">An instance method must include self: def bark(self):.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>self</code></button><button data-pair=\"p1\"><code>pass</code></button><button data-pair=\"p2\"><code>CamelCase</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Class naming convention</button><button data-pair=\"p1\">Placeholder for an empty block</button><button data-pair=\"p0\">Current object</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is self?",
          "options": [
            "A global variable",
            "The current instance",
            "The parent class",
            "A decorator"
          ],
          "answer": 1,
          "why": "self refers to the object invoking the method."
        },
        {
          "q": "Where must self appear in an instance method?",
          "options": [
            "As the first parameter",
            "As the last line",
            "Outside the class",
            "It is never written"
          ],
          "answer": 0,
          "why": "Python passes the instance into the first parameter."
        },
        {
          "q": "What keyword begins a class definition?",
          "options": [
            "def",
            "class",
            "object",
            "new"
          ],
          "answer": 1,
          "why": "Use class ClassName:."
        },
        {
          "q": "Which is conventional class naming?",
          "options": [
            "dark_knight",
            "DarkKnight",
            "DARKKNIGHT only",
            "darkKnight()"
          ],
          "answer": 1,
          "why": "Python class names conventionally use CapWords/CamelCase."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Self Introduction",
          "brief": "Create a Person class whose introduce(self) method prints I am a person.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "I am a person"
            },
            {
              "type": "sourceIncludes",
              "value": "class Person",
              "message": "Use class Person"
            },
            {
              "type": "sourceIncludes",
              "value": "def introduce(self)",
              "message": "Use def introduce(self)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: I am a person"
          ],
          "id": "u5t06p01"
        },
        {
          "kind": "code",
          "title": "Two Callers",
          "brief": "Create Robot objects with names and an identify() method that returns each name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Alpha\nBeta"
            },
            {
              "type": "sourceIncludes",
              "value": "self.name",
              "message": "Use self.name"
            },
            {
              "type": "sourceIncludes",
              "value": "def identify(self)",
              "message": "Use def identify(self)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Alpha"
          ],
          "id": "u5t06p02"
        },
        {
          "kind": "code",
          "title": "CamelCase Blueprint",
          "brief": "Create a DarkKnight class with a defend() instance method.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Shield up"
            },
            {
              "type": "sourceIncludes",
              "value": "class DarkKnight",
              "message": "Use class DarkKnight"
            },
            {
              "type": "sourceIncludes",
              "value": "self",
              "message": "Use self"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Shield up"
          ],
          "id": "u5t06p03"
        },
        {
          "kind": "code",
          "title": "Self Changes State",
          "brief": "Create Counter with value 0 and increment() that changes its own value.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": "self.value",
              "message": "Use self.value"
            },
            {
              "type": "sourceIncludes",
              "value": "self.value +=",
              "message": "Use self.value +="
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ],
          "id": "u5t06p04"
        }
      ]
    },
    {
      "id": "u5t07",
      "title": "Constructors, Attributes and Dot Notation",
      "summary": "Use __init__ to initialise objects and dot notation to read or modify attributes.",
      "notebookLM": "",
      "notes": "\n<h4>Classes and Objects Part 2 - The Setup Crew and Attributes</h4>\n<p>__init__ runs automatically when an object is created. It attaches starting attributes to self. Dot notation accesses those attributes later.</p>\n<h4>The real-world analogy: The Phone Setup Crew</h4>\n<p>A new phone is configured the moment it leaves the factory. The constructor similarly gives each new object its initial state.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Object setup flow\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Object setup flow</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Constructor arguments</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">__init__ setup</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Ready object</text></svg>\n<h4>Core ideas</h4><ul><li>__init__ is called automatically during instantiation.</li><li>Constructor parameters receive initial data.</li><li>self.attribute stores data on the object.</li><li>object.attribute reads or updates public attributes.</li></ul><h4>Constructor</h4><pre><code>class Robot:\n    def __init__(self, name):\n        self.name = name\n        self.battery = 100\n\nr = Robot(&quot;Wall-E&quot;)\nprint(r.name, r.battery)</code></pre><h4>Dot notation update</h4><pre><code>r.battery = 80\nprint(r.battery)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Robot:\n    def __init__(self):\n        self.battery = 100\nr = Robot()\nr.battery = 70\nprint(r.battery)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">100</button><button data-o=\"1\">70</button><button data-o=\"2\">battery</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Dot notation updates the instance attribute to 70.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Dog</button><button>:</button><button data-bad>\n    def __init__(name):</button></div><p class=\"w__why\">The constructor needs self as its first parameter.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>__init__</code></button><button data-pair=\"p1\"><code>Attribute</code></button><button data-pair=\"p2\"><code>Dot notation</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Read or change an attribute</button><button data-pair=\"p1\">Data owned by an object</button><button data-pair=\"p0\">Automatic setup method</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "When does __init__ run?",
          "options": [
            "At import only",
            "When an object is instantiated",
            "When print is called",
            "When the object is deleted"
          ],
          "answer": 1,
          "why": "The constructor runs during object creation."
        },
        {
          "q": "What is an attribute?",
          "options": [
            "A loop",
            "A variable belonging to an object",
            "A module",
            "A syntax error"
          ],
          "answer": 1,
          "why": "Attributes store object state."
        },
        {
          "q": "How do you read player1.health?",
          "options": [
            "health[player1]",
            "player1.health",
            "player1(health)",
            "health.player1"
          ],
          "answer": 1,
          "why": "Dot notation accesses attributes."
        },
        {
          "q": "Which statement attaches name to the current object?",
          "options": [
            "name = self",
            "self.name = name",
            "name.self = name",
            "object(name)"
          ],
          "answer": 1,
          "why": "self.name creates or updates an instance attribute."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Dog Setup",
          "brief": "Create Dog(name, breed), instantiate Buddy and print both attributes.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Buddy\nGolden Retriever"
            },
            {
              "type": "sourceIncludes",
              "value": "def __init__",
              "message": "Use def __init__"
            },
            {
              "type": "sourceIncludes",
              "value": "self.name",
              "message": "Use self.name"
            },
            {
              "type": "sourceIncludes",
              "value": "self.breed",
              "message": "Use self.breed"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Buddy"
          ],
          "id": "u5t07p01"
        },
        {
          "kind": "code",
          "title": "Battery Default",
          "brief": "Create Robot(name) with battery defaulting to 100.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "R2\n100"
            },
            {
              "type": "sourceIncludes",
              "value": "self.battery = 100",
              "message": "Use self.battery = 100"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: R2"
          ],
          "id": "u5t07p02"
        },
        {
          "kind": "code",
          "title": "Modify Attribute",
          "brief": "Create a Car with color Red, change it to Blue using dot notation and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Blue"
            },
            {
              "type": "sourceIncludes",
              "value": ".color",
              "message": "Use .color"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Blue"
          ],
          "id": "u5t07p03"
        },
        {
          "kind": "code",
          "title": "Built-in Class Name",
          "brief": "Create a Player class and print Player.__name__.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Player"
            },
            {
              "type": "sourceIncludes",
              "value": "Player.__name__",
              "message": "Use Player.__name__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Player"
          ],
          "id": "u5t07p04"
        }
      ]
    },
    {
      "id": "u5t08",
      "title": "Instance, Class and Local Variables",
      "summary": "Distinguish object-specific state, shared class data and temporary local variables.",
      "notebookLM": "",
      "notes": "\n<h4>Classes and Objects Part 3 - Where Data Lives</h4>\n<p>Where a variable is defined determines who owns it. Instance variables belong to one object, class variables are shared, and local variables exist only during a method call.</p>\n<h4>The real-world analogy: Eye Colour, Gravity and a Scratchpad</h4>\n<p>Each person has an eye colour, everyone shares gravity, and a temporary calculation may be written on a scratchpad and discarded.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Variable ownership\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Variable ownership</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Class shared data</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Instance personal data</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Local temporary data</text></svg>\n<h4>Core ideas</h4><ul><li>Instance variables are normally assigned through self.</li><li>Class variables are declared in the class body outside methods.</li><li>Local variables are not attached to self and disappear after the method.</li><li>__dict__ exposes an object's stored instance attributes.</li></ul><h4>Shared and personal data</h4><pre><code>class Student:\n    school = &quot;Lincoln High&quot;\n    def __init__(self, name):\n        self.name = name\n\ns1 = Student(&quot;Alice&quot;)\ns2 = Student(&quot;Bob&quot;)\nprint(s1.school, s2.school)</code></pre><h4>Inspect state</h4><pre><code>print(s1.__dict__)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Student:\n    school = &quot;LPU&quot;\n    def __init__(self, name): self.name = name\ns = Student(&quot;A&quot;)\nprint(s.school)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">Student</button><button data-o=\"2\">LPU</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">school is shared at class level and accessible through the instance.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Player</button><button>:</button><button>\n    def set_score(self):</button><button data-bad>\n        score = 100</button></div><p class=\"w__why\">score is only local here. Use self.score to keep it on the object.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Instance variable</code></button><button data-pair=\"p1\"><code>Class variable</code></button><button data-pair=\"p2\"><code>Local variable</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Exists during one method call</button><button data-pair=\"p1\">Shared by all instances</button><button data-pair=\"p0\">Owned by one object</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which variable is unique to each instance?",
          "options": [
            "Class variable",
            "Instance variable",
            "Module variable only",
            "Decorator"
          ],
          "answer": 1,
          "why": "self.name belongs to each object."
        },
        {
          "q": "Where is a class variable declared?",
          "options": [
            "Inside __init__ using self",
            "In the class body outside methods",
            "Inside a loop only",
            "After del"
          ],
          "answer": 1,
          "why": "Class-level placement makes it shared."
        },
        {
          "q": "What does object.__dict__ display?",
          "options": [
            "All Python keywords",
            "The object's instance attribute dictionary",
            "Only methods",
            "The source file"
          ],
          "answer": 1,
          "why": "Instance state is stored as key-value pairs."
        },
        {
          "q": "What happens to a local method variable after the method ends?",
          "options": [
            "It becomes a class variable",
            "It normally goes out of scope",
            "It is always saved in __dict__",
            "It becomes private"
          ],
          "answer": 1,
          "why": "Local variables live only during execution."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Shared School",
          "brief": "Create Student.school_name and two students; print the shared school for both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Lincoln High\nLincoln High"
            },
            {
              "type": "sourceIncludes",
              "value": "school_name =",
              "message": "Use school_name ="
            },
            {
              "type": "sourceIncludes",
              "value": "self.name",
              "message": "Use self.name"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Lincoln High"
          ],
          "id": "u5t08p01"
        },
        {
          "kind": "code",
          "title": "Independent Balances",
          "brief": "Create two Bank objects with different balances, change one and prove the other is unchanged.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0\n1000"
            },
            {
              "type": "sourceIncludes",
              "value": "self.balance",
              "message": "Use self.balance"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 0"
          ],
          "id": "u5t08p02"
        },
        {
          "kind": "code",
          "title": "Rebrand Class",
          "brief": "Change a class variable through the class and show two instances see the update.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Global Bank\nGlobal Bank"
            },
            {
              "type": "sourceIncludes",
              "value": "Bank.title",
              "message": "Use Bank.title"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Global Bank"
          ],
          "id": "u5t08p03"
        },
        {
          "kind": "code",
          "title": "Inspect Dictionary",
          "brief": "Create Player(name, score) and print its __dict__.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{'name': 'Zack', 'score': 100}"
            },
            {
              "type": "sourceIncludes",
              "value": "__dict__",
              "message": "Use __dict__"
            },
            {
              "type": "sourceIncludes",
              "value": "self.score",
              "message": "Use self.score"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: {'name': 'Zack', 'score': 100}"
          ],
          "id": "u5t08p04"
        }
      ]
    },
    {
      "id": "u5t09",
      "title": "Instance, Class and Static Methods",
      "summary": "Select the correct method type based on whether work belongs to an object, a class or an independent utility.",
      "notebookLM": "",
      "notes": "\n<h4>Classes and Objects Part 4 - Action Methods</h4>\n<p>Methods give objects behaviour. Instance methods use self, class methods use cls and @classmethod, while static methods are isolated utilities marked @staticmethod.</p>\n<h4>The real-world analogy: Personal Assistant, School Office and Desk Calculator</h4>\n<p>A personal assistant works with one person's data, a school office updates shared enrolment, and a desk calculator performs independent work.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Method binding choices\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Method binding choices</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">self: one object</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">cls: whole class</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">static: utility</text></svg>\n<h4>Core ideas</h4><ul><li>Instance methods use self and operate on instance state.</li><li>Class methods use cls and operate on class state.</li><li>Static methods use neither self nor cls.</li><li>Decorators tell Python how to bind class and static methods.</li></ul><h4>Three method types</h4><pre><code>class School:\n    students = 0\n    def __init__(self, name):\n        self.name = name\n\n    def label(self):\n        return self.name\n\n    @classmethod\n    def add_student(cls):\n        cls.students += 1\n\n    @staticmethod\n    def valid_score(score):\n        return 0 &lt;= score &lt;= 100</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Math:\n    @staticmethod\n    def add(a, b): return a + b\nprint(Math.add(2, 3))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">2</button><button data-o=\"1\">3</button><button data-o=\"2\">5</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The static method performs independent addition.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>@classmethod</button><button data-bad>\ndef count(self):</button></div><p class=\"w__why\">A class method conventionally receives cls, not self.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Instance method</code></button><button data-pair=\"p1\"><code>Class method</code></button><button data-pair=\"p2\"><code>Static method</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Independent utility</button><button data-pair=\"p1\">Uses shared class state</button><button data-pair=\"p0\">Uses one object&#x27;s state</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method type uses self?",
          "options": [
            "Static",
            "Instance",
            "Class",
            "Abstract only"
          ],
          "answer": 1,
          "why": "Instance methods receive the object."
        },
        {
          "q": "Which decorator creates a class method?",
          "options": [
            "@property",
            "@classmethod",
            "@abstractmethod",
            "@instance"
          ],
          "answer": 1,
          "why": "Class methods are marked @classmethod."
        },
        {
          "q": "What is the first parameter of a class method by convention?",
          "options": [
            "self",
            "cls",
            "obj",
            "class"
          ],
          "answer": 1,
          "why": "cls refers to the class."
        },
        {
          "q": "Which method needs neither self nor cls?",
          "options": [
            "Instance method",
            "Class method",
            "Static method",
            "Constructor"
          ],
          "answer": 2,
          "why": "A static method is an independent utility."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Instance Damage",
          "brief": "Create Player.take_damage() that updates one player's health.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "80"
            },
            {
              "type": "sourceIncludes",
              "value": "def take_damage(self",
              "message": "Use def take_damage(self"
            },
            {
              "type": "sourceIncludes",
              "value": "self.health",
              "message": "Use self.health"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 80"
          ],
          "id": "u5t09p01"
        },
        {
          "kind": "code",
          "title": "Class Enrolment",
          "brief": "Create School.add_student() as a class method and call it twice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": "@classmethod",
              "message": "Use @classmethod"
            },
            {
              "type": "sourceIncludes",
              "value": "cls.students",
              "message": "Use cls.students"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ],
          "id": "u5t09p02"
        },
        {
          "kind": "code",
          "title": "Static Conversion",
          "brief": "Create Converter.celsius_to_fahrenheit as a static method.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "32.0"
            },
            {
              "type": "sourceIncludes",
              "value": "@staticmethod",
              "message": "Use @staticmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 32.0"
          ],
          "id": "u5t09p03"
        },
        {
          "kind": "code",
          "title": "Combine Method Types",
          "brief": "Create a Product with an instance total() and static valid_price().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "150\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "def total(self)",
              "message": "Use def total(self)"
            },
            {
              "type": "sourceIncludes",
              "value": "@staticmethod",
              "message": "Use @staticmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 150"
          ],
          "id": "u5t09p04"
        }
      ]
    },
    {
      "id": "u5t10",
      "title": "Revision Checkpoint 2 - Building Complete Classes",
      "summary": "Consolidate constructors, attributes, variable ownership and method types.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 2 - Classes and Objects</h4>\n<p>This checkpoint asks students to build complete, small classes using correct ownership and method binding.</p>\n<h4>The real-world analogy: Factory Quality Check</h4>\n<p>Before a product leaves a factory, the setup, personal settings, shared model data and utility tools are tested together.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Class construction checklist\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Class construction checklist</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Initialise state</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Choose ownership</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Expose behaviour</text></svg>\n<h4>Core ideas</h4><ul><li>Use __init__ for initial instance state.</li><li>Attach persistent personal data to self.</li><li>Keep shared constants at class level.</li><li>Choose self, cls or static methods deliberately.</li></ul><h4>Complete class</h4><pre><code>class Course:\n    platform = &quot;AbhyasLab&quot;\n    def __init__(self, title):\n        self.title = title\n    def label(self):\n        return f&quot;{self.platform}: {self.title}&quot;</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Counter:\n    count = 0\n    @classmethod\n    def inc(cls): cls.count += 1\nCounter.inc(); Counter.inc()\nprint(Counter.count)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">0</button><button data-o=\"1\">1</button><button data-o=\"2\">2</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Both calls update the shared class variable.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>@staticmethod</button><button data-bad>\ndef convert(self, x):</button></div><p class=\"w__why\">A static method does not need self unless self is just an ordinary explicitly passed value, which is not intended here.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>__init__</code></button><button data-pair=\"p1\"><code>cls</code></button><button data-pair=\"p2\"><code>self</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Current instance</button><button data-pair=\"p1\">Current class</button><button data-pair=\"p0\">Initial object setup</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which belongs in __init__?",
          "options": [
            "Initial instance setup",
            "Only class deletion",
            "Only imports",
            "MRO calculation"
          ],
          "answer": 0,
          "why": "The constructor initialises new objects."
        },
        {
          "q": "Which syntax stores personal data?",
          "options": [
            "name = value",
            "self.name = value",
            "cls.name always",
            "static.name"
          ],
          "answer": 1,
          "why": "self attaches data to the current object."
        },
        {
          "q": "Which method changes a shared count?",
          "options": [
            "Static method",
            "Class method",
            "Only destructor",
            "Property getter"
          ],
          "answer": 1,
          "why": "A class method receives cls and can update class variables."
        },
        {
          "q": "What does @staticmethod indicate?",
          "options": [
            "Automatic instance binding",
            "Independent utility placed in a class",
            "Private data",
            "Inheritance"
          ],
          "answer": 1,
          "why": "It is not bound to an object or class."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Course Class",
          "brief": "Build Course with shared platform and personal title; print its label.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "AbhyasLab: Python"
            },
            {
              "type": "sourceIncludes",
              "value": "platform =",
              "message": "Use platform ="
            },
            {
              "type": "sourceIncludes",
              "value": "self.title",
              "message": "Use self.title"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: AbhyasLab: Python"
          ],
          "id": "u5t10p01"
        },
        {
          "kind": "code",
          "title": "Count Instances",
          "brief": "Use a class variable and classmethod to count two created records.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": "count = 0",
              "message": "Use count = 0"
            },
            {
              "type": "sourceIncludes",
              "value": "@classmethod",
              "message": "Use @classmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ],
          "id": "u5t10p02"
        },
        {
          "kind": "code",
          "title": "Validated Utility",
          "brief": "Create Exam.valid_mark as a static method and test 85 and 120.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "@staticmethod",
              "message": "Use @staticmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u5t10p03"
        },
        {
          "kind": "code",
          "title": "Personal and Shared Data",
          "brief": "Create two Employee objects sharing company but keeping separate salaries.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "TechCo 50000\nTechCo 60000"
            },
            {
              "type": "sourceIncludes",
              "value": "company =",
              "message": "Use company ="
            },
            {
              "type": "sourceIncludes",
              "value": "self.salary",
              "message": "Use self.salary"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: TechCo 50000"
          ],
          "id": "u5t10p04"
        }
      ]
    },
    {
      "id": "u5t11",
      "title": "Single Inheritance - Parent and Child Classes",
      "summary": "Create a child class that inherits attributes and methods from one parent class.",
      "notebookLM": "",
      "notes": "\n<h4>Inheritance Part 1 - The Family Tree and Single Inheritance</h4>\n<p>Inheritance moves common code into a parent class and lets child classes reuse it. Single inheritance means one child has exactly one direct parent.</p>\n<h4>The real-world analogy: Genetics and Evolution</h4>\n<p>A child inherits common traits from one parent blueprint while adding unique abilities of its own.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Single-inheritance path\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Single-inheritance path</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Animal parent</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Dog child</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Inherited plus unique methods</text></svg>\n<h4>Core ideas</h4><ul><li>A parent is also called a base class or superclass.</li><li>A child is also called a derived class or subclass.</li><li>Write class Dog(Animal): to inherit from Animal.</li><li>Inherited behaviour is available without copying its code.</li></ul><h4>Single inheritance</h4><pre><code>class Animal:\n    def __init__(self, name):\n        self.name = name\n    def eat(self):\n        return f&quot;{self.name} is eating&quot;\n\nclass Dog(Animal):\n    def bark(self):\n        return &quot;Woof&quot;</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n    def show(self): return &quot;A&quot;\nclass B(A):\n    pass\nprint(B().show())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">B</button><button data-o=\"2\">pass</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">B inherits show from A.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Dog</button><button data-bad>[Animal]</button><button>:</button></div><p class=\"w__why\">Inheritance uses parentheses, not square brackets: class Dog(Animal):.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Superclass</code></button><button data-pair=\"p1\"><code>Subclass</code></button><button data-pair=\"p2\"><code>Single inheritance</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">One direct parent</button><button data-pair=\"p1\">Child blueprint</button><button data-pair=\"p0\">Parent blueprint</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is the main benefit of inheritance?",
          "options": [
            "Code reuse",
            "Data deletion",
            "Automatic networking",
            "No constructors"
          ],
          "answer": 0,
          "why": "Common behaviour is written once in the parent."
        },
        {
          "q": "Which syntax makes Cat inherit Animal?",
          "options": [
            "class Cat inherits Animal:",
            "class Cat(Animal):",
            "class Animal(Cat):",
            "Cat = Animal"
          ],
          "answer": 1,
          "why": "The parent class is written in parentheses."
        },
        {
          "q": "How many direct parents are used in single inheritance?",
          "options": [
            "Zero",
            "One",
            "Two",
            "Unlimited"
          ],
          "answer": 1,
          "why": "Single inheritance has one direct parent."
        },
        {
          "q": "What can a child class add?",
          "options": [
            "Only errors",
            "Its own specialised attributes and methods",
            "Nothing new",
            "Only global variables"
          ],
          "answer": 1,
          "why": "Children reuse shared behaviour and add specialised behaviour."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Vehicle and Car",
          "brief": "Create Vehicle.start() and a Car child with honk(). Call both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Engine starting\nBeep beep"
            },
            {
              "type": "sourceIncludes",
              "value": "class Car(Vehicle)",
              "message": "Use class Car(Vehicle)"
            },
            {
              "type": "sourceIncludes",
              "value": "def honk",
              "message": "Use def honk"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Engine starting"
          ],
          "id": "u5t11p01"
        },
        {
          "kind": "code",
          "title": "Employee and Manager",
          "brief": "Create Employee.work() and Manager child with approve().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Working\nApproved"
            },
            {
              "type": "sourceIncludes",
              "value": "class Manager(Employee)",
              "message": "Use class Manager(Employee)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Working"
          ],
          "id": "u5t11p02"
        },
        {
          "kind": "code",
          "title": "Animal Constructor Inheritance",
          "brief": "Let Dog inherit Animal.__init__ without defining a constructor.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Buddy: Woof"
            },
            {
              "type": "sourceIncludes",
              "value": "class Dog(Animal)",
              "message": "Use class Dog(Animal)"
            },
            {
              "type": "sourceIncludes",
              "value": "self.name",
              "message": "Use self.name"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Buddy: Woof"
          ],
          "id": "u5t11p03"
        },
        {
          "kind": "code",
          "title": "Course Family",
          "brief": "Create Course.title() and PythonCourse child with language().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Programming\nPython"
            },
            {
              "type": "sourceIncludes",
              "value": "class PythonCourse(Course)",
              "message": "Use class PythonCourse(Course)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Programming"
          ],
          "id": "u5t11p04"
        }
      ]
    },
    {
      "id": "u5t12",
      "title": "Complex Inheritance - Multilevel, Multiple, Hierarchical and Hybrid",
      "summary": "Model longer family chains, multiple parents and shared parent hierarchies.",
      "notebookLM": "",
      "notes": "\n<h4>Inheritance Part 2 - Complex Lineages</h4>\n<p>Python supports several inheritance structures. Multilevel forms a chain, multiple combines separate parents, hierarchical gives one parent many children, and hybrid mixes patterns.</p>\n<h4>The real-world analogy: Grandparents, Two Parents and Siblings</h4>\n<p>A family can pass traits through generations, combine traits from two parents, or give several siblings the same parent.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Inheritance structures\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Inheritance structures</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">One parent</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Several paths</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Specialised descendants</text></svg>\n<h4>Core ideas</h4><ul><li>Multilevel inheritance forms A to B to C.</li><li>Multiple inheritance lists two or more parents.</li><li>Hierarchical inheritance has several children of one parent.</li><li>Hybrid inheritance combines multiple patterns.</li></ul><h4>Multilevel</h4><pre><code>class Device:\n    def power(self): return &quot;Power&quot;\nclass Computer(Device):\n    def compute(self): return &quot;Compute&quot;\nclass Laptop(Computer):\n    def fold(self): return &quot;Fold&quot;</code></pre><h4>Multiple</h4><pre><code>class Camera:\n    def photo(self): return &quot;Photo&quot;\nclass Phone:\n    def call(self): return &quot;Call&quot;\nclass SmartPhone(Camera, Phone):\n    pass</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n    def a(self): return &quot;A&quot;\nclass B(A):\n    pass\nclass C(B):\n    pass\nprint(C().a())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">B</button><button data-o=\"2\">C</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">C inherits through B all the way from A.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Eagle</button><button>(</button><button>Bird</button><button data-bad>and</button><button>Flyer</button><button>)</button></div><p class=\"w__why\">Multiple inheritance separates parents with a comma, not and.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Multilevel</code></button><button data-pair=\"p1\"><code>Multiple</code></button><button data-pair=\"p2\"><code>Hierarchical</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Several children, one parent</button><button data-pair=\"p1\">Several direct parents</button><button data-pair=\"p0\">Inheritance chain</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Vehicle -> Car -> ElectricCar is what type?",
          "options": [
            "Multiple",
            "Multilevel",
            "Hierarchical",
            "No inheritance"
          ],
          "answer": 1,
          "why": "The classes form a chain across generations."
        },
        {
          "q": "How is multiple inheritance written?",
          "options": [
            "class C(A, B):",
            "class C(A and B):",
            "class A(C, B):",
            "class C[A+B]:"
          ],
          "answer": 0,
          "why": "Parent classes are comma-separated."
        },
        {
          "q": "One Shape parent with Circle and Square children is what type?",
          "options": [
            "Hierarchical",
            "Multiple",
            "Single only",
            "Abstract"
          ],
          "answer": 0,
          "why": "Several children share one parent."
        },
        {
          "q": "What is hybrid inheritance?",
          "options": [
            "No parent",
            "A mixture of inheritance forms",
            "Only one child",
            "A private class"
          ],
          "answer": 1,
          "why": "Hybrid designs combine inheritance structures."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Multilevel Device",
          "brief": "Create Device, Computer and Laptop chain; call all three methods.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "On\nComputing\nFolded"
            },
            {
              "type": "sourceIncludes",
              "value": "class Computer(Device)",
              "message": "Use class Computer(Device)"
            },
            {
              "type": "sourceIncludes",
              "value": "class Laptop(Computer)",
              "message": "Use class Laptop(Computer)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: On"
          ],
          "id": "u5t12p01"
        },
        {
          "kind": "code",
          "title": "Multiple SmartPhone",
          "brief": "Create Camera and Phone parents, then SmartPhone inheriting both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Photo taken\nCalling"
            },
            {
              "type": "sourceIncludes",
              "value": "class SmartPhone(Camera, Phone)",
              "message": "Use class SmartPhone(Camera, Phone)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Photo taken"
          ],
          "id": "u5t12p02"
        },
        {
          "kind": "code",
          "title": "Hierarchical Shapes",
          "brief": "Create Shape.describe(), then Circle and Square children.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Shape\nShape"
            },
            {
              "type": "sourceIncludes",
              "value": "class Circle(Shape)",
              "message": "Use class Circle(Shape)"
            },
            {
              "type": "sourceIncludes",
              "value": "class Square(Shape)",
              "message": "Use class Square(Shape)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Shape"
          ],
          "id": "u5t12p03"
        },
        {
          "kind": "code",
          "title": "Hybrid Skill Character",
          "brief": "Combine multilevel and multiple inheritance in a Hero.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Alive\nFight\nCast"
            },
            {
              "type": "sourceIncludes",
              "value": "class Hero(Warrior, Magic)",
              "message": "Use class Hero(Warrior, Magic)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Alive"
          ],
          "id": "u5t12p04"
        }
      ]
    },
    {
      "id": "u5t13",
      "title": "Method Overriding and super()",
      "summary": "Replace parent behaviour in a child class and reuse parent setup with super().",
      "notebookLM": "",
      "notes": "\n<h4>Inheritance Part 3 - The Power of super and Overriding</h4>\n<p>A child can define a method with the same name as its parent to override it. super() deliberately calls parent behaviour, especially the parent's constructor.</p>\n<h4>The real-world analogy: Family Recipe</h4>\n<p>A child may change a family recipe, but still begin with the original sauce before adding new ingredients.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Override with parent support\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Override with parent support</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Parent method</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Child override</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Optional super call</text></svg>\n<h4>Core ideas</h4><ul><li>An overriding method has the same name as the inherited method.</li><li>The child's version is selected for child objects.</li><li>super() accesses the next parent implementation.</li><li>super().__init__ is used to preserve parent setup.</li></ul><h4>Override</h4><pre><code>class Employee:\n    def salary(self): return 50000\nclass Manager(Employee):\n    def salary(self): return 100000</code></pre><h4>Parent setup</h4><pre><code>class Animal:\n    def __init__(self, name): self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n    def show(self): return &quot;A&quot;\nclass B(A):\n    def show(self): return &quot;B&quot;\nprint(B().show())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">B</button><button data-o=\"2\">AB</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">B overrides show.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>super</button><button data-bad>.</button><button>__init__</button><button>(</button><button>name</button><button>)</button></div><p class=\"w__why\">super must be called first: super().__init__(name).</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Override</code></button><button data-pair=\"p1\"><code>super()</code></button><button data-pair=\"p2\"><code>Child constructor</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Parent setup plus unique setup</button><button data-pair=\"p1\">Delegate to parent</button><button data-pair=\"p0\">Replace inherited behaviour</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What happens when a child defines the same method name?",
          "options": [
            "Both vanish",
            "The child overrides the inherited version",
            "The parent always wins",
            "Python forbids it"
          ],
          "answer": 1,
          "why": "Child-specific behaviour replaces the inherited behaviour."
        },
        {
          "q": "What does super() refer to?",
          "options": [
            "The current list",
            "The next parent in the inheritance order",
            "A global variable",
            "The garbage collector"
          ],
          "answer": 1,
          "why": "super() delegates to parent behaviour."
        },
        {
          "q": "Why call super().__init__ in a child constructor?",
          "options": [
            "To run parent setup",
            "To delete the parent",
            "To create a static method",
            "To print MRO only"
          ],
          "answer": 0,
          "why": "Parent attributes are initialised before child-specific ones."
        },
        {
          "q": "Which call is correct inside Dog.__init__?",
          "options": [
            "super.__init__(name)",
            "super().__init__(name)",
            "parent(name)",
            "Animal.super(name)"
          ],
          "answer": 1,
          "why": "Call super() and then the parent method."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Override Speak",
          "brief": "Create Bird.speak() and Duck override returning Quack.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Quack"
            },
            {
              "type": "sourceIncludes",
              "value": "class Duck(Bird)",
              "message": "Use class Duck(Bird)"
            },
            {
              "type": "sourceIncludes",
              "value": "def speak",
              "message": "Use def speak"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Quack"
          ],
          "id": "u5t13p01"
        },
        {
          "kind": "code",
          "title": "Student Parent Setup",
          "brief": "Create Person(name), then Student(name, grade) using super().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Zack\nA"
            },
            {
              "type": "sourceIncludes",
              "value": "super().__init__(name)",
              "message": "Use super().__init__(name)"
            },
            {
              "type": "sourceIncludes",
              "value": "self.grade",
              "message": "Use self.grade"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Zack"
          ],
          "id": "u5t13p02"
        },
        {
          "kind": "code",
          "title": "Extend Parent Method",
          "brief": "Override Report.show() but include the parent's text using super().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Base report with details"
            },
            {
              "type": "sourceIncludes",
              "value": "super().show()",
              "message": "Use super().show()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Base report with details"
          ],
          "id": "u5t13p03"
        },
        {
          "kind": "code",
          "title": "Vehicle Setup",
          "brief": "Use super to initialise make/model, then add doors in Car.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Ford Mustang 2"
            },
            {
              "type": "sourceIncludes",
              "value": "super().__init__",
              "message": "Use super().__init__"
            },
            {
              "type": "sourceIncludes",
              "value": "self.doors",
              "message": "Use self.doors"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Ford Mustang 2"
          ],
          "id": "u5t13p04"
        }
      ]
    },
    {
      "id": "u5t14",
      "title": "Method Resolution Order and Type Checking",
      "summary": "Predict which parent method Python selects and inspect object or class relationships.",
      "notebookLM": "",
      "notes": "\n<h4>Inheritance Part 4 - MRO and Type Checking</h4>\n<p>Multiple inheritance requires a deterministic search path. Python's MRO determines method lookup. isinstance and issubclass test family relationships.</p>\n<h4>The real-world analogy: Search Route through a Family Tree</h4>\n<p>When several relatives offer the same method, Python follows an ordered path instead of guessing.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 260\" role=\"img\" aria-label=\"Method lookup path\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Method lookup path</text>\n<rect class=\"box\" x=\"260\" y=\"45\" width=\"200\" height=\"55\" rx=\"14\"/><text x=\"360\" y=\"79\" text-anchor=\"middle\" class=\"mono\">Current class</text>\n<path class=\"arrow\" d=\"M360 101 V135 M360 135 H180 M360 135 H540 M180 135 V165 M540 135 V165\"><animate attributeName=\"stroke-dashoffset\" values=\"0;30\" dur=\"2s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"80\" y=\"165\" width=\"200\" height=\"55\" rx=\"14\"/><text x=\"180\" y=\"199\" text-anchor=\"middle\" class=\"mono\">First matching parent</text>\n<rect class=\"box\" x=\"440\" y=\"165\" width=\"200\" height=\"55\" rx=\"14\"/><text x=\"540\" y=\"199\" text-anchor=\"middle\" class=\"mono\">object base</text></svg>\n<h4>Core ideas</h4><ul><li>MRO means Method Resolution Order.</li><li>Python uses the C3 linearisation; simple examples often appear left-to-right.</li><li>ClassName.mro() reveals the lookup path.</li><li>isinstance checks objects; issubclass checks class relationships.</li></ul><h4>MRO choice</h4><pre><code>class A:\n    def process(self): return &quot;A&quot;\nclass B:\n    def process(self): return &quot;B&quot;\nclass C(A, B):\n    pass\nprint(C().process())</code></pre><h4>Type checks</h4><pre><code>print(isinstance(C(), A))\nprint(issubclass(C, B))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n    def f(self): return &quot;A&quot;\nclass B:\n    def f(self): return &quot;B&quot;\nclass C(B, A): pass\nprint(C().f())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">B</button><button data-o=\"2\">AB</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">B appears before A in C&#x27;s MRO.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>isinstance</button><button>(</button><button data-bad>Dog</button><button>,</button><button data-bad>pet</button><button>)</button></div><p class=\"w__why\">The object comes first: isinstance(pet, Dog).</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>MRO</code></button><button data-pair=\"p1\"><code>isinstance</code></button><button data-pair=\"p2\"><code>issubclass</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Class lineage test</button><button data-pair=\"p1\">Object membership test</button><button data-pair=\"p0\">Method search path</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does MRO determine?",
          "options": [
            "File order",
            "Method lookup path",
            "Variable type only",
            "Memory size"
          ],
          "answer": 1,
          "why": "MRO defines the order Python searches for methods."
        },
        {
          "q": "For class Hero(Fighter, Wizard), which parent is searched first in a simple conflict?",
          "options": [
            "Wizard",
            "Fighter",
            "Neither",
            "Random"
          ],
          "answer": 1,
          "why": "Fighter appears first in the declared order."
        },
        {
          "q": "Which checks whether player is a Warrior object?",
          "options": [
            "issubclass(player, Warrior)",
            "isinstance(player, Warrior)",
            "mro(player)",
            "typecheck()"
          ],
          "answer": 1,
          "why": "isinstance accepts an object and a class."
        },
        {
          "q": "Which checks whether Dog inherits Animal?",
          "options": [
            "isinstance(Dog, Animal)",
            "issubclass(Dog, Animal)",
            "Dog.isparent()",
            "Animal.mro(Dog)"
          ],
          "answer": 1,
          "why": "issubclass compares classes."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "MRO Selection",
          "brief": "Create X and Y with test(), make Z(Y, X), and print Z().test().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Y"
            },
            {
              "type": "sourceIncludes",
              "value": "class Z(Y, X)",
              "message": "Use class Z(Y, X)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Y"
          ],
          "id": "u5t14p01"
        },
        {
          "kind": "code",
          "title": "Print MRO Names",
          "brief": "Print the class names in Z.mro().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Z', 'Y', 'X', 'object']"
            },
            {
              "type": "sourceIncludes",
              "value": "Z.mro()",
              "message": "Use Z.mro()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Z', 'Y', 'X', 'object']"
          ],
          "id": "u5t14p02"
        },
        {
          "kind": "code",
          "title": "Instance Checks",
          "brief": "Check a Dog object against Dog and Animal.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "isinstance(",
              "message": "Use isinstance("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u5t14p03"
        },
        {
          "kind": "code",
          "title": "Subclass Checks",
          "brief": "Check Dog is a subclass of Animal and Animal is not a subclass of Dog.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "issubclass(",
              "message": "Use issubclass("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u5t14p04"
        }
      ]
    },
    {
      "id": "u5t15",
      "title": "Revision Checkpoint 3 - Inheritance Families",
      "summary": "Review inheritance structures, overriding, super, MRO and type checks.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 3 - Inheritance</h4>\n<p>This checkpoint integrates family-tree design with runtime method selection.</p>\n<h4>The real-world analogy: Family Reunion Map</h4>\n<p>A reunion map records parents, children and the order in which relatives are contacted. Inheritance design needs the same clarity.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Inheritance review\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Inheritance review</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Design hierarchy</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Resolve behaviour</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Verify lineage</text></svg>\n<h4>Core ideas</h4><ul><li>Identify parent and child responsibilities.</li><li>Use super for cooperative setup.</li><li>Use overriding for specialised behaviour.</li><li>Check MRO when multiple parents overlap.</li></ul><h4>Review family</h4><pre><code>class Vehicle:\n    def move(self): return &quot;Moving&quot;\nclass Car(Vehicle):\n    def move(self): return &quot;Driving&quot;</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class P:\n    def x(self): return 1\nclass C(P):\n    def x(self): return super().x()+1\nprint(C().x())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">P</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The child calls the parent result 1 and adds 1.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>C</button><button>(</button><button>A</button><button data-bad>+</button><button>B</button><button>)</button></div><p class=\"w__why\">Multiple parents are separated with a comma.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Parent setup</code></button><button data-pair=\"p1\"><code>Behaviour replacement</code></button><button data-pair=\"p2\"><code>Lookup inspection</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">mro()</button><button data-pair=\"p1\">Overriding</button><button data-pair=\"p0\">super().__init__</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which structure is A -> B -> C?",
          "options": [
            "Multiple",
            "Multilevel",
            "Hierarchical",
            "Static"
          ],
          "answer": 1,
          "why": "It is a chain of generations."
        },
        {
          "q": "What does an override do?",
          "options": [
            "Adds a class variable only",
            "Provides child-specific behaviour under the same method name",
            "Deletes inheritance",
            "Calls garbage collection"
          ],
          "answer": 1,
          "why": "The child replaces the inherited implementation."
        },
        {
          "q": "What protects parent constructor work?",
          "options": [
            "pass",
            "super().__init__",
            "__del__",
            "staticmethod"
          ],
          "answer": 1,
          "why": "super delegates to the parent setup."
        },
        {
          "q": "What reveals method lookup order?",
          "options": [
            "__dict__",
            "mro()",
            "len()",
            "repr()"
          ],
          "answer": 1,
          "why": "mro() displays the path."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Inheritance Mission",
          "brief": "Create Vehicle, Car and ElectricCar and call an inherited start method.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Started"
            },
            {
              "type": "sourceIncludes",
              "value": "class ElectricCar(Car)",
              "message": "Use class ElectricCar(Car)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Started"
          ],
          "id": "u5t15p01"
        },
        {
          "kind": "code",
          "title": "Multiple Mission",
          "brief": "Create Scanner and Printer parents and a MultiFunction child.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Scanned\nPrinted"
            },
            {
              "type": "sourceIncludes",
              "value": "class MultiFunction(Scanner, Printer)",
              "message": "Use class MultiFunction(Scanner, Printer)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Scanned"
          ],
          "id": "u5t15p02"
        },
        {
          "kind": "code",
          "title": "Super Mission",
          "brief": "Extend a parent greeting with a child suffix.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello student"
            },
            {
              "type": "sourceIncludes",
              "value": "super().greet()",
              "message": "Use super().greet()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hello student"
          ],
          "id": "u5t15p03"
        },
        {
          "kind": "code",
          "title": "Lineage Mission",
          "brief": "Use both isinstance and issubclass for a Cat family.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "isinstance(",
              "message": "Use isinstance("
            },
            {
              "type": "sourceIncludes",
              "value": "issubclass(",
              "message": "Use issubclass("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u5t15p04"
        }
      ]
    },
    {
      "id": "u5t16",
      "title": "Public, Protected and Private Members",
      "summary": "Use Python naming conventions to communicate and enforce levels of data access.",
      "notebookLM": "",
      "notes": "\n<h4>Encapsulation Part 1 - The Armor of OOP</h4>\n<p>Python uses normal names for public members, a single underscore for protected-by-convention members, and double underscores for private name-mangled members.</p>\n<h4>The real-world analogy: Bank Vault Access Levels</h4>\n<p>The public lobby is open, an employee-only door carries a warning, and the vault is hidden behind controlled access.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Encapsulation layers\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Encapsulation layers</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Public interface</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Protected internals</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Private state</text></svg>\n<h4>Core ideas</h4><ul><li>Public members have no leading underscore.</li><li>Protected members use one underscore and are a convention, not a hard lock.</li><li>Private members use two leading underscores and trigger name mangling.</li><li>Methods should control access to sensitive state.</li></ul><h4>Access levels</h4><pre><code>class Player:\n    def __init__(self):\n        self.name = &quot;Zack&quot;\n        self._score = 100\n        self.__health = 100</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n    def __init__(self): self.__x = 5\n    def read(self): return self.__x\nprint(A().read())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">__x</button><button data-o=\"1\">5</button><button data-o=\"2\">A</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The class&#x27;s own method can access its private member.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>obj</button><button>.</button><button data-bad>__secret</button></div><p class=\"w__why\">Direct outside access to a double-underscore member does not use the original name.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Public</code></button><button data-pair=\"p1\"><code>Protected</code></button><button data-pair=\"p2\"><code>Private</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Double underscore name mangling</button><button data-pair=\"p1\">Single underscore convention</button><button data-pair=\"p0\">Normal name</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which syntax indicates protected-by-convention?",
          "options": [
            "self.value",
            "self._value",
            "self.__value",
            "protected value"
          ],
          "answer": 1,
          "why": "One leading underscore is the protected convention."
        },
        {
          "q": "Which syntax triggers name mangling?",
          "options": [
            "self.value",
            "self._value",
            "self.__value",
            "value__"
          ],
          "answer": 2,
          "why": "Two leading underscores create a mangled name."
        },
        {
          "q": "Are protected members impossible to access outside?",
          "options": [
            "Yes",
            "No, it is a convention",
            "Only on Linux",
            "Only in subclasses"
          ],
          "answer": 1,
          "why": "Python's single underscore is a warning, not a strict lock."
        },
        {
          "q": "What is encapsulation's safety goal?",
          "options": [
            "Protect internal state from improper changes",
            "Make loops faster",
            "Remove objects",
            "Rename files"
          ],
          "answer": 0,
          "why": "Controlled methods preserve valid state."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Public Colour",
          "brief": "Create Car with public color, change it directly and print the result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Blue"
            },
            {
              "type": "sourceIncludes",
              "value": "self.color",
              "message": "Use self.color"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Blue"
          ],
          "id": "u5t16p01"
        },
        {
          "kind": "code",
          "title": "Protected Account Number",
          "brief": "Create BankAccount with _account_number and read it inside a method.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "45"
            },
            {
              "type": "sourceIncludes",
              "value": "self._account_number",
              "message": "Use self._account_number"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 45"
          ],
          "id": "u5t16p02"
        },
        {
          "kind": "code",
          "title": "Private Balance",
          "brief": "Create BankAccount with __balance and public get_balance().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1000"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__balance",
              "message": "Use self.__balance"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 1000"
          ],
          "id": "u5t16p03"
        },
        {
          "kind": "code",
          "title": "Private Health Control",
          "brief": "Create Player whose heal() validates positive values before changing private health.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__health",
              "message": "Use self.__health"
            },
            {
              "type": "sourceIncludes",
              "value": "min(",
              "message": "Use min("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 100"
          ],
          "id": "u5t16p04"
        }
      ]
    },
    {
      "id": "u5t17",
      "title": "Name Mangling, Getters and Setters",
      "summary": "Understand private-name transformation and build safe methods that read or update hidden data.",
      "notebookLM": "",
      "notes": "\n<h4>Encapsulation Part 2 - The Secret Vault</h4>\n<p>Double-underscore names are transformed to include the class name. Getters expose approved reads, while setters validate updates before changing private state.</p>\n<h4>The real-world analogy: Witness Protection and ATM Buttons</h4>\n<p>Name mangling changes the visible identity of private data. An ATM provides safe buttons instead of opening the vault.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Safe data path\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Safe data path</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Outside request</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Validation method</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Private variable</text></svg>\n<h4>Core ideas</h4><ul><li>A private __health in Player becomes _Player__health internally.</li><li>Name mangling discourages accidental access; it is not cryptographic security.</li><li>A getter reads private state.</li><li>A setter validates and updates private state.</li></ul><h4>Safe account</h4><pre><code>class BankAccount:\n    def __init__(self): self.__balance = 0\n    def get_balance(self): return self.__balance\n    def deposit(self, amount):\n        if amount &gt; 0:\n            self.__balance += amount</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Box:\n    def __init__(self): self.__value = 9\nb = Box()\nprint(b._Box__value)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">__value</button><button data-o=\"1\">9</button><button data-o=\"2\">Box</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The mangled backdoor name resolves to the stored value.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>def</button><button>set_age</button><button>(</button><button>self</button><button>,</button><button>age</button><button>)</button><button>:</button><button data-bad>\n    self.__age = age</button></div><p class=\"w__why\">A setter should validate age before updating private state.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Getter</code></button><button data-pair=\"p1\"><code>Setter</code></button><button data-pair=\"p2\"><code>Name mangling</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Internal private-name transformation</button><button data-pair=\"p1\">Validated update</button><button data-pair=\"p0\">Controlled read</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is name mangling?",
          "options": [
            "Encryption",
            "Python changes a private name internally",
            "Deletion",
            "Inheritance"
          ],
          "answer": 1,
          "why": "Private names include the class name internally."
        },
        {
          "q": "What does a getter do?",
          "options": [
            "Validates and writes only",
            "Reads private state safely",
            "Deletes the object",
            "Creates a class"
          ],
          "answer": 1,
          "why": "A getter returns controlled data."
        },
        {
          "q": "Why use a setter?",
          "options": [
            "To permit any value",
            "To validate before updating state",
            "To hide methods",
            "To create MRO"
          ],
          "answer": 1,
          "why": "Setters can reject invalid values."
        },
        {
          "q": "What is the mangled form of __code in Secret?",
          "options": [
            "_Secret__code",
            "__Secret_code",
            "Secret.code",
            "_codeSecret"
          ],
          "answer": 0,
          "why": "The form is _ClassName__attribute."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Name Mangling Demonstration",
          "brief": "Create Secret.__code and print it using its mangled name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "007"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__code",
              "message": "Use self.__code"
            },
            {
              "type": "sourceIncludes",
              "value": "_Secret__code",
              "message": "Use _Secret__code"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 007"
          ],
          "id": "u5t17p01"
        },
        {
          "kind": "code",
          "title": "Password Getter",
          "brief": "Create User with private password and a getter.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "default123"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__password",
              "message": "Use self.__password"
            },
            {
              "type": "sourceIncludes",
              "value": "get_password",
              "message": "Use get_password"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: default123"
          ],
          "id": "u5t17p02"
        },
        {
          "kind": "code",
          "title": "Validated Password Setter",
          "brief": "Accept passwords of at least 8 characters and reject shorter values.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Error: Password too short\nPassword updated\nsupersecret99"
            },
            {
              "type": "sourceIncludes",
              "value": "len(value) >= 8",
              "message": "Use len(value) >= 8"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__password",
              "message": "Use self.__password"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Error: Password too short"
          ],
          "id": "u5t17p03"
        },
        {
          "kind": "code",
          "title": "Deposit Safety",
          "brief": "Create an account that accepts a positive deposit and rejects a negative one.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Rejected\nAccepted\n200"
            },
            {
              "type": "sourceIncludes",
              "value": "amount <= 0",
              "message": "Use amount <= 0"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__balance",
              "message": "Use self.__balance"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Rejected"
          ],
          "id": "u5t17p04"
        }
      ]
    },
    {
      "id": "u5t18",
      "title": "Property Decorators - Pythonic Encapsulation",
      "summary": "Expose validated private data through clean attribute syntax using @property and @name.setter.",
      "notebookLM": "",
      "notes": "\n<h4>Encapsulation Part 3 - Property Decorators</h4>\n<p>Properties make getter and setter methods look like ordinary attributes. Users write obj.temperature while validation remains hidden inside the class.</p>\n<h4>The real-world analogy: Magic Mirror</h4>\n<p>The user sees a simple surface, while hidden machinery intercepts reads and writes behind it.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Property interception\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Property interception</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">obj.value read/write</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Getter or setter</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Private storage</text></svg>\n<h4>Core ideas</h4><ul><li>@property decorates the getter.</li><li>@property_name.setter decorates the setter.</li><li>The public property and private storage should use different names.</li><li>Properties combine a clean API with validation.</li></ul><h4>Temperature property</h4><pre><code>class Thermostat:\n    def __init__(self): self.__temp = 70\n    @property\n    def temperature(self): return self.__temp\n    @temperature.setter\n    def temperature(self, value):\n        self.__temp = min(100, value)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n    def __init__(self): self.__x=1\n    @property\n    def x(self): return self.__x\nprint(A().x)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">x</button><button data-o=\"2\">property</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">A property getter is used without parentheses.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>@property</button><button>\ndef score(self):</button><button data-bad>\n    return self.score</button></div><p class=\"w__why\">Returning self.score recursively calls the property. Return a separate private storage field such as self.__score.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>@property</code></button><button data-pair=\"p1\"><code>@name.setter</code></button><button data-pair=\"p2\"><code>Private storage</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Actual protected data</button><button data-pair=\"p1\">Setter disguise</button><button data-pair=\"p0\">Getter disguise</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does @property create?",
          "options": [
            "A class variable",
            "A method accessed like an attribute",
            "A destructor",
            "An abstract class"
          ],
          "answer": 1,
          "why": "The decorated getter is accessed without parentheses."
        },
        {
          "q": "What setter decorator matches a score property?",
          "options": [
            "@setter",
            "@property.setter",
            "@score.setter",
            "@set_score"
          ],
          "answer": 2,
          "why": "The setter decorator uses the property name."
        },
        {
          "q": "What happens on obj.temperature = 500?",
          "options": [
            "Direct private overwrite",
            "The property setter receives 500",
            "The getter runs",
            "The class is deleted"
          ],
          "answer": 1,
          "why": "Assignment is intercepted by the setter."
        },
        {
          "q": "Why are properties Pythonic?",
          "options": [
            "They remove validation",
            "They provide clean syntax with controlled behaviour",
            "They require global variables",
            "They replace classes"
          ],
          "answer": 1,
          "why": "Properties preserve a simple public interface."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Score Property",
          "brief": "Create Game.score property rejecting negative values.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100"
            },
            {
              "type": "sourceIncludes",
              "value": "@property",
              "message": "Use @property"
            },
            {
              "type": "sourceIncludes",
              "value": "@score.setter",
              "message": "Use @score.setter"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__score",
              "message": "Use self.__score"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 100"
          ],
          "id": "u5t18p01"
        },
        {
          "kind": "code",
          "title": "Temperature Clamp",
          "brief": "Create a temperature property capped at 100.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100"
            },
            {
              "type": "sourceIncludes",
              "value": "@temperature.setter",
              "message": "Use @temperature.setter"
            },
            {
              "type": "sourceIncludes",
              "value": "min(",
              "message": "Use min("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 100"
          ],
          "id": "u5t18p02"
        },
        {
          "kind": "code",
          "title": "Validated Age Property",
          "brief": "Accept ages from 0 to 120 and ignore invalid assignments.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "25"
            },
            {
              "type": "sourceIncludes",
              "value": "@age.setter",
              "message": "Use @age.setter"
            },
            {
              "type": "sourceIncludes",
              "value": "0 <= value <= 120",
              "message": "Use 0 <= value <= 120"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 25"
          ],
          "id": "u5t18p03"
        },
        {
          "kind": "code",
          "title": "Read-only Identifier",
          "brief": "Create a read-only id property with no setter.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "R101"
            },
            {
              "type": "sourceIncludes",
              "value": "@property",
              "message": "Use @property"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__id",
              "message": "Use self.__id"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: R101"
          ],
          "id": "u5t18p04"
        }
      ]
    },
    {
      "id": "u5t19",
      "title": "Revision Checkpoint 4 - Encapsulation and Data Safety",
      "summary": "Review access levels, mangling, getters, setters and property validation.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 4 - Encapsulation</h4>\n<p>This checkpoint focuses on maintaining valid state while exposing a friendly public API.</p>\n<h4>The real-world analogy: Security Audit</h4>\n<p>A security audit checks what is public, what is internal, and which requests must pass validation before reaching sensitive data.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Encapsulation audit\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Encapsulation audit</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Public request</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Validation boundary</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Valid private state</text></svg>\n<h4>Core ideas</h4><ul><li>Use public members for intentional interfaces.</li><li>Use a leading underscore for internal conventions.</li><li>Use double underscores to reduce accidental access.</li><li>Validate every update that could corrupt state.</li></ul><h4>Safe percentage</h4><pre><code>class Progress:\n    def __init__(self): self.__value = 0\n    @property\n    def value(self): return self.__value\n    @value.setter\n    def value(self, n): self.__value = max(0, min(100, n))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class P:\n    def __init__(self): self.__v=0\n    @property\n    def v(self): return self.__v\n    @v.setter\n    def v(self,x): self.__v=max(0,x)\np=P(); p.v=-5\nprint(p.v)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">-5</button><button data-o=\"1\">0</button><button data-o=\"2\">None</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The setter clamps negative values to zero.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>@balance.setter</button><button>\ndef balance(self, value):</button><button data-bad>\n    self.balance = value</button></div><p class=\"w__why\">Writing to self.balance inside its own setter recurses. Update the private storage field instead.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Validation</code></button><button data-pair=\"p1\"><code>Property</code></button><button data-pair=\"p2\"><code>Private field</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Hidden implementation state</button><button data-pair=\"p1\">Clean controlled interface</button><button data-pair=\"p0\">Protect invariants</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which member is a convention for subclass/internal use?",
          "options": [
            "public",
            "_protected",
            "__private",
            "staticmethod"
          ],
          "answer": 1,
          "why": "One underscore communicates protected intent."
        },
        {
          "q": "Which mechanism powers double-underscore privacy?",
          "options": [
            "MRO",
            "Name mangling",
            "Garbage collection",
            "Overloading"
          ],
          "answer": 1,
          "why": "Python transforms the name."
        },
        {
          "q": "Which method is a controlled read?",
          "options": [
            "Setter",
            "Getter",
            "Destructor",
            "Constructor"
          ],
          "answer": 1,
          "why": "A getter reveals approved data."
        },
        {
          "q": "Which decorator supports clean validated assignment?",
          "options": [
            "@classmethod",
            "@property with @name.setter",
            "@staticmethod",
            "@abstractmethod only"
          ],
          "answer": 1,
          "why": "Property access routes through methods."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Safe Percentage",
          "brief": "Build a property clamped between 0 and 100.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100"
            },
            {
              "type": "sourceIncludes",
              "value": "@property",
              "message": "Use @property"
            },
            {
              "type": "sourceIncludes",
              "value": "@value.setter",
              "message": "Use @value.setter"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 100"
          ],
          "id": "u5t19p01"
        },
        {
          "kind": "code",
          "title": "Safe Withdrawal",
          "brief": "Reject withdrawals larger than a private balance.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False\nTrue\n60"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__balance",
              "message": "Use self.__balance"
            },
            {
              "type": "sourceIncludes",
              "value": "@property",
              "message": "Use @property"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: False"
          ],
          "id": "u5t19p02"
        },
        {
          "kind": "code",
          "title": "Protected Convention",
          "brief": "Use a protected log list internally and expose a safe count.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": "self._logs",
              "message": "Use self._logs"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ],
          "id": "u5t19p03"
        },
        {
          "kind": "code",
          "title": "Mangled Storage",
          "brief": "Show the private field is stored under its mangled key in __dict__.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['_Vault__code']"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__code",
              "message": "Use self.__code"
            },
            {
              "type": "sourceIncludes",
              "value": "__dict__",
              "message": "Use __dict__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['_Vault__code']"
          ],
          "id": "u5t19p04"
        }
      ]
    },
    {
      "id": "u5t20",
      "title": "Polymorphism through Method Overriding",
      "summary": "Call one method name across different objects and receive class-specific behaviour.",
      "notebookLM": "",
      "notes": "\n<h4>Polymorphism Part 1 - Many Forms, One Command</h4>\n<p>Polymorphism lets client code issue a standard command without testing every concrete class. Overriding provides each class's behaviour.</p>\n<h4>The real-world analogy: Universal Play Button</h4>\n<p>The same Play button launches a song, movie or game depending on the selected object.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Polymorphic dispatch\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Polymorphic dispatch</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Same call</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Runtime object type</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Specific method result</text></svg>\n<h4>Core ideas</h4><ul><li>Polymorphic code depends on behaviour, not repeated type checks.</li><li>Child classes often override a common parent method.</li><li>A loop can call the same method on mixed objects.</li><li>New classes can be added without changing the loop.</li></ul><h4>Animal loop</h4><pre><code>class Animal:\n    def speak(self): return &quot;Sound&quot;\nclass Dog(Animal):\n    def speak(self): return &quot;Woof&quot;\nclass Cat(Animal):\n    def speak(self): return &quot;Meow&quot;\nfor pet in [Dog(), Cat(), Animal()]:\n    print(pet.speak())</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class D:\n    def speak(self): return &quot;Woof&quot;\nclass C:\n    def speak(self): return &quot;Meow&quot;\nprint([x.speak() for x in [D(),C()]])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[&#x27;Woof&#x27;, &#x27;Meow&#x27;]</button><button data-o=\"1\">Woof</button><button data-o=\"2\">Meow</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The comprehension dispatches speak to each object&#x27;s implementation.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>for pet in pets:</button><button data-bad>\n    if type(pet) == Dog:</button><button data-bad>\n        print(pet.dog_sound())</button></div><p class=\"w__why\">A polymorphic design gives every pet the same speak() method, avoiding repeated type checks.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Common method</code></button><button data-pair=\"p1\"><code>Override</code></button><button data-pair=\"p2\"><code>Runtime dispatch</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Object chooses method</button><button data-pair=\"p1\">Specific implementation</button><button data-pair=\"p0\">Shared command</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does polymorphism mean?",
          "options": [
            "One form",
            "Many forms",
            "Private data",
            "Memory cleanup"
          ],
          "answer": 1,
          "why": "One operation can have several implementations."
        },
        {
          "q": "What commonly creates polymorphism in inheritance?",
          "options": [
            "Method overriding",
            "Name mangling",
            "Class deletion",
            "Local variables"
          ],
          "answer": 0,
          "why": "Children implement the same method differently."
        },
        {
          "q": "Why is a loop of shape.area() powerful?",
          "options": [
            "It needs many if statements",
            "It works with different shape types through one command",
            "It removes methods",
            "It forces one formula"
          ],
          "answer": 1,
          "why": "Each object selects its own implementation."
        },
        {
          "q": "What design benefit does polymorphism provide?",
          "options": [
            "Flexible extension",
            "No objects",
            "Only one class allowed",
            "Public private fields"
          ],
          "answer": 0,
          "why": "New implementations can join the same interface."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Animal Sounds",
          "brief": "Create Animal, Dog and Cat speak methods and loop through all.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Woof\nMeow\nSound"
            },
            {
              "type": "sourceIncludes",
              "value": "def speak",
              "message": "Use def speak"
            },
            {
              "type": "sourceIncludes",
              "value": "for x in",
              "message": "Use for x in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Woof"
          ],
          "id": "u5t20p01"
        },
        {
          "kind": "code",
          "title": "Shape Areas",
          "brief": "Create Square and Circle area methods and print their areas.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "16\n78.5"
            },
            {
              "type": "sourceIncludes",
              "value": "class Square(Shape)",
              "message": "Use class Square(Shape)"
            },
            {
              "type": "sourceIncludes",
              "value": "class Circle(Shape)",
              "message": "Use class Circle(Shape)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 16"
          ],
          "id": "u5t20p02"
        },
        {
          "kind": "code",
          "title": "Notification Channels",
          "brief": "Create Email, SMS and Push with notify(message).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Email: Ready\nSMS: Ready\nPush: Ready"
            },
            {
              "type": "sourceIncludes",
              "value": "def notify",
              "message": "Use def notify"
            },
            {
              "type": "sourceIncludes",
              "value": "for n in",
              "message": "Use for n in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Email: Ready"
          ],
          "id": "u5t20p03"
        },
        {
          "kind": "code",
          "title": "Enemy Attacks",
          "brief": "Create Ninja and Dragon attack methods and call them uniformly.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Throwing star\nBreathing fire"
            },
            {
              "type": "sourceIncludes",
              "value": "def attack",
              "message": "Use def attack"
            },
            {
              "type": "sourceIncludes",
              "value": "for enemy in",
              "message": "Use for enemy in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Throwing star"
          ],
          "id": "u5t20p04"
        }
      ]
    },
    {
      "id": "u5t21",
      "title": "Operator Overloading and Duck Typing",
      "summary": "Teach custom objects to respond to operators and use unrelated objects through shared behaviour.",
      "notebookLM": "",
      "notes": "\n<h4>Polymorphism Part 2 - Operator Overloading and Duck Typing</h4>\n<p>Magic methods such as __add__ define operator behaviour for custom classes. Duck typing accepts an object when it provides the required behaviour, regardless of lineage.</p>\n<h4>The real-world analogy: Custom Arithmetic and the Duck Test</h4>\n<p>Python lets a Point decide what + means. It also follows the rule: if an object can perform the needed action, its family name is less important.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Behaviour over lineage\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Behaviour over lineage</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Operator or method call</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Compatible object</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Polymorphic result</text></svg>\n<h4>Core ideas</h4><ul><li>__add__ overloads the + operator.</li><li>__sub__, __mul__ and __eq__ support other operators.</li><li>Duck typing focuses on available methods, not official inheritance.</li><li>Operator methods should normally return a meaningful new result rather than unexpectedly mutating operands.</li></ul><h4>Point addition</h4><pre><code>class Point:\n    def __init__(self,x,y): self.x=x; self.y=y\n    def __add__(self,other):\n        return Point(self.x+other.x,self.y+other.y)\n    def __str__(self): return f&quot;({self.x}, {self.y})&quot;</code></pre><h4>Duck typing</h4><pre><code>class Guitar:\n    def play(self): return &quot;Strumming&quot;\nclass Piano:\n    def play(self): return &quot;Keys&quot;\ndef start_music(instrument): return instrument.play()</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class N:\n    def __init__(self,v): self.v=v\n    def __add__(self,o): return N(self.v+o.v)\nprint((N(2)+N(5)).v)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">2</button><button data-o=\"1\">5</button><button data-o=\"2\">7</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The overloaded addition creates N(7).</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>def</button><button>__add__</button><button>(</button><button>self</button><button data-bad>)</button><button>:</button></div><p class=\"w__why\">Binary operator methods need the other operand: def __add__(self, other):.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>__add__</code></button><button data-pair=\"p1\"><code>Duck typing</code></button><button data-pair=\"p2\"><code>__eq__</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">== behaviour</button><button data-pair=\"p1\">Behaviour-based compatibility</button><button data-pair=\"p0\">+ behaviour</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which magic method overloads +?",
          "options": [
            "__plus__",
            "__add__",
            "add",
            "__sum__"
          ],
          "answer": 1,
          "why": "Python routes + to __add__."
        },
        {
          "q": "What does duck typing check?",
          "options": [
            "Official family tree only",
            "Whether the needed behaviour exists",
            "Only variable type annotations",
            "The file name"
          ],
          "answer": 1,
          "why": "Python commonly relies on behaviour at runtime."
        },
        {
          "q": "What should Wallet.__add__ usually return?",
          "options": [
            "Nothing",
            "A new Wallet containing the combined money",
            "A string only",
            "The other wallet unchanged without a result"
          ],
          "answer": 1,
          "why": "Returning a new object preserves the operands."
        },
        {
          "q": "Can unrelated Guitar and Piano objects work with start_music(x) calling x.play()?",
          "options": [
            "No",
            "Yes, if both implement play",
            "Only with ABC",
            "Only after casting"
          ],
          "answer": 1,
          "why": "Their shared behaviour is sufficient."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Point Addition",
          "brief": "Overload + for two Point objects and print the result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "(4, 6)"
            },
            {
              "type": "sourceIncludes",
              "value": "def __add__",
              "message": "Use def __add__"
            },
            {
              "type": "sourceIncludes",
              "value": "return Point",
              "message": "Use return Point"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: (4, 6)"
          ],
          "id": "u5t21p01"
        },
        {
          "kind": "code",
          "title": "Wallet Addition",
          "brief": "Return a new Wallet when two wallets are added.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "75\n50"
            },
            {
              "type": "sourceIncludes",
              "value": "def __add__",
              "message": "Use def __add__"
            },
            {
              "type": "sourceIncludes",
              "value": "Wallet(",
              "message": "Use Wallet("
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 75"
          ],
          "id": "u5t21p02"
        },
        {
          "kind": "code",
          "title": "Duck-Typed Music",
          "brief": "Pass unrelated Guitar and Piano objects to one start_music function.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Strumming chords\nPressing keys"
            },
            {
              "type": "sourceIncludes",
              "value": "def play",
              "message": "Use def play"
            },
            {
              "type": "sourceIncludes",
              "value": "instrument.play()",
              "message": "Use instrument.play()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Strumming chords"
          ],
          "id": "u5t21p03"
        },
        {
          "kind": "code",
          "title": "Equality Overload",
          "brief": "Overload == for Product objects using their code attribute.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "def __eq__",
              "message": "Use def __eq__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u5t21p04"
        }
      ]
    },
    {
      "id": "u5t22",
      "title": "Pythonic Alternatives to Function Overloading",
      "summary": "Explain why duplicate method definitions overwrite each other and use defaults or *args for flexible calls.",
      "notebookLM": "",
      "notes": "\n<h4>Polymorphism Part 3 - Function Overloading and Default Arguments</h4>\n<p>Python does not select among several methods with the same name by parameter count. The latest definition replaces earlier ones. Default arguments and *args provide flexible alternatives.</p>\n<h4>The real-world analogy: One Adjustable Tool</h4>\n<p>Instead of storing several nearly identical tools under one label, Python uses one adjustable tool that accepts optional or variable input.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Flexible method input\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Flexible method input</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Call with inputs</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Defaults or *args</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">One implementation</text></svg>\n<h4>Core ideas</h4><ul><li>A second method definition with the same name replaces the first.</li><li>Default values make selected parameters optional.</li><li>*args packs extra positional values into a tuple.</li><li>One clear method is easier to maintain than hidden duplicate definitions.</li></ul><h4>Default alternative</h4><pre><code>class Calculator:\n    def add(self,a,b,c=0): return a+b+c</code></pre><h4>Variable length</h4><pre><code>class Calculator:\n    def add(self,*args): return sum(args)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class C:\n    def add(self,a,b,c=0): return a+b+c\nprint(C().add(2,3))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">2</button><button data-o=\"1\">3</button><button data-o=\"2\">5</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">c uses its default value 0.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class C:</button><button data-bad>\n    def add(self,a,b):</button><button>\n        return a+b</button><button data-bad>\n    def add(self,a,b,c):</button></div><p class=\"w__why\">The second add replaces the first. Use one method with a default or *args.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Default argument</code></button><button data-pair=\"p1\"><code>*args</code></button><button data-pair=\"p2\"><code>Duplicate definition</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Earlier method is replaced</button><button data-pair=\"p1\">Variable positional inputs</button><button data-pair=\"p0\">Optional known parameter</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Does Python support traditional signature-based method overloading?",
          "options": [
            "Yes automatically",
            "No, later definitions replace earlier ones",
            "Only for classes",
            "Only for integers"
          ],
          "answer": 1,
          "why": "Python keeps the last method bound to a name."
        },
        {
          "q": "What is a common alternative?",
          "options": [
            "Duplicate names",
            "Default arguments",
            "Delete parameters",
            "Global variables"
          ],
          "answer": 1,
          "why": "Defaults make one method handle optional input."
        },
        {
          "q": "What does *args collect?",
          "options": [
            "Keyword arguments in a dictionary",
            "Positional arguments in a tuple",
            "Only strings",
            "Class variables"
          ],
          "answer": 1,
          "why": "Variable positional arguments become a tuple."
        },
        {
          "q": "What happens if greet(self) is followed by greet(self,name)?",
          "options": [
            "Both are selected automatically",
            "The second replaces the first",
            "The class becomes abstract",
            "Python merges them"
          ],
          "answer": 1,
          "why": "The name greet refers to the later function."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Default Add",
          "brief": "Build add(a,b,c=0) and call it with two and three values.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10\n20"
            },
            {
              "type": "sourceIncludes",
              "value": "c=0",
              "message": "Use c=0"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 10"
          ],
          "id": "u5t22p01"
        },
        {
          "kind": "code",
          "title": "Greeting Default",
          "brief": "Create greet(name='Stranger') and test both forms.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello Stranger\nHello Zack"
            },
            {
              "type": "sourceIncludes",
              "value": "name=\"Stranger\"",
              "message": "Use name=\"Stranger\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hello Stranger"
          ],
          "id": "u5t22p02"
        },
        {
          "kind": "code",
          "title": "Unlimited Add",
          "brief": "Use *args to sum any count of numbers.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n10"
            },
            {
              "type": "sourceIncludes",
              "value": "*args",
              "message": "Use *args"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(args)",
              "message": "Use sum(args)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ],
          "id": "u5t22p03"
        },
        {
          "kind": "code",
          "title": "Multi-Greeter",
          "brief": "Use *names to return one greeting per name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Hello Alice']\n['Hello Alice', 'Hello Bob', 'Hello Charlie']"
            },
            {
              "type": "sourceIncludes",
              "value": "*names",
              "message": "Use *names"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Hello Alice']"
          ],
          "id": "u5t22p04"
        }
      ]
    },
    {
      "id": "u5t23",
      "title": "Abstraction and Abstract Classes",
      "summary": "Distinguish a usable concrete class from a non-instantiable design contract.",
      "notebookLM": "",
      "notes": "\n<h4>Abstraction Part 1 - The Dashboard and the Engine</h4>\n<p>Abstraction hides implementation details and exposes essential operations. An abstract class defines a contract for concrete child classes and cannot be instantiated directly when abstract methods remain.</p>\n<h4>The real-world analogy: Vehicle Blueprint</h4>\n<p>A paper Vehicle blueprint defines required controls, but users need a concrete Car or Truck before they can drive.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Abstract design path\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Abstract design path</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Abstract contract</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Concrete implementation</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Usable object</text></svg>\n<h4>Core ideas</h4><ul><li>Abstraction reduces cognitive complexity.</li><li>An abstract class acts as a design contract.</li><li>An abstract method declares required behaviour without a concrete implementation.</li><li>Concrete subclasses must fulfil every abstract method before instantiation.</li></ul><h4>Conceptual contract</h4><pre><code>class Shape:\n    def calculate_area(self):\n        raise NotImplementedError</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class Shape:\n    def area(self): raise NotImplementedError\nclass S(Shape):\n    def area(self): return 9\nprint(S().area())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Shape</button><button data-o=\"1\">9</button><button data-o=\"2\">NotImplementedError</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The concrete child overrides the contract.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Shape</button><button>:</button><button data-bad>\n    pass</button></div><p class=\"w__why\">A plain empty class is not a formally enforced abstract contract. Use ABC and @abstractmethod.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Abstraction</code></button><button data-pair=\"p1\"><code>Abstract class</code></button><button data-pair=\"p2\"><code>Concrete class</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Completed usable implementation</button><button data-pair=\"p1\">Contract blueprint</button><button data-pair=\"p0\">Hide complexity</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does abstraction hide?",
          "options": [
            "All method names",
            "Complex implementation details",
            "Only private variables",
            "Files"
          ],
          "answer": 1,
          "why": "Users interact with essential features."
        },
        {
          "q": "Can a class with unimplemented abstract methods be instantiated?",
          "options": [
            "Yes",
            "No",
            "Only twice",
            "Only through print"
          ],
          "answer": 1,
          "why": "The contract must be fulfilled first."
        },
        {
          "q": "What does an abstract method provide?",
          "options": [
            "A required operation name",
            "A complete database",
            "A class variable only",
            "Garbage collection"
          ],
          "answer": 0,
          "why": "It declares behaviour children must implement."
        },
        {
          "q": "Which is a concrete class?",
          "options": [
            "A complete child implementing every abstract method",
            "A class with missing contracts",
            "ABC itself always",
            "A comment"
          ],
          "answer": 0,
          "why": "Concrete classes can be instantiated."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Manual Contract",
          "brief": "Create Shape.area() raising NotImplementedError and implement it in Square.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "16"
            },
            {
              "type": "sourceIncludes",
              "value": "raise NotImplementedError",
              "message": "Use raise NotImplementedError"
            },
            {
              "type": "sourceIncludes",
              "value": "class Square(Shape)",
              "message": "Use class Square(Shape)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 16"
          ],
          "id": "u5t23p01"
        },
        {
          "kind": "code",
          "title": "Payment Interface Idea",
          "brief": "Create Payment with process(), then Card child implementing process().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Card 50"
            },
            {
              "type": "sourceIncludes",
              "value": "def process",
              "message": "Use def process"
            },
            {
              "type": "sourceIncludes",
              "value": "class Card(Payment)",
              "message": "Use class Card(Payment)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Card 50"
          ],
          "id": "u5t23p02"
        },
        {
          "kind": "code",
          "title": "Abstract Device Concept",
          "brief": "Build Device.start() contract and Phone implementation.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Phone started"
            },
            {
              "type": "sourceIncludes",
              "value": "raise NotImplementedError",
              "message": "Use raise NotImplementedError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Phone started"
          ],
          "id": "u5t23p03"
        },
        {
          "kind": "code",
          "title": "Common Interface Loop",
          "brief": "Create two complete processor classes with process(data).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "PYTHON\n6"
            },
            {
              "type": "sourceIncludes",
              "value": "def process",
              "message": "Use def process"
            },
            {
              "type": "sourceIncludes",
              "value": "for p in",
              "message": "Use for p in"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: PYTHON"
          ],
          "id": "u5t23p04"
        }
      ]
    },
    {
      "id": "u5t24",
      "title": "The abc Module and @abstractmethod",
      "summary": "Implement enforced abstract contracts with ABC and abstractmethod.",
      "notebookLM": "",
      "notes": "\n<h4>Abstraction Part 2 - The abc Module</h4>\n<p>Python's abc module provides Abstract Base Classes. A class inherits ABC and marks required methods with @abstractmethod.</p>\n<h4>The real-world analogy: Contract Inspector</h4>\n<p>An inspector refuses to approve a product until every required control has been implemented.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"ABC enforcement\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">ABC enforcement</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Declare contract</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Subclass implements</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Instantiation allowed</text></svg>\n<h4>Core ideas</h4><ul><li>Import ABC and abstractmethod from abc.</li><li>The abstract parent inherits ABC.</li><li>Required methods carry @abstractmethod.</li><li>A child remains abstract until it implements every required method.</li></ul><h4>Enforced contract</h4><pre><code>from abc import ABC, abstractmethod\nclass Computer(ABC):\n    @abstractmethod\n    def process(self):\n        pass\nclass Laptop(Computer):\n    def process(self): return &quot;Processing&quot;</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>from abc import ABC,abstractmethod\nclass A(ABC):\n @abstractmethod\n def f(self): pass\nclass B(A):\n def f(self): return 3\nprint(B().f())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">B</button><button data-o=\"2\">3</button><button data-o=\"3\">TypeError</button></div><p class=\"w__why\">B fulfils the abstract method and is concrete.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class</button><button>Laptop</button><button>(</button><button>Computer</button><button>)</button><button>:</button><button data-bad>\n    pass</button></div><p class=\"w__why\">If Computer has abstract methods, Laptop must implement them before it can be instantiated.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>ABC</code></button><button data-pair=\"p1\"><code>@abstractmethod</code></button><button data-pair=\"p2\"><code>Concrete subclass</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Fulfils every contract</button><button data-pair=\"p1\">Required operation</button><button data-pair=\"p0\">Abstract base class</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which module provides Abstract Base Classes?",
          "options": [
            "math",
            "abc",
            "random",
            "oop"
          ],
          "answer": 1,
          "why": "abc contains ABC and abstractmethod."
        },
        {
          "q": "Which decorator marks a required method?",
          "options": [
            "@staticmethod",
            "@abstractmethod",
            "@property",
            "@classmethod"
          ],
          "answer": 1,
          "why": "It enforces implementation in concrete children."
        },
        {
          "q": "What must the parent inherit?",
          "options": [
            "object only manually",
            "ABC",
            "list",
            "dict"
          ],
          "answer": 1,
          "why": "Inheriting ABC creates an abstract base class."
        },
        {
          "q": "What error occurs when instantiating an incomplete abstract child?",
          "options": [
            "TypeError",
            "KeyError",
            "IndexError",
            "ZeroDivisionError"
          ],
          "answer": 0,
          "why": "Python blocks instantiation of incomplete abstract classes."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Appliance Contract",
          "brief": "Create Appliance(ABC) with abstract turn_on and implement Microwave.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Microwave is heating up"
            },
            {
              "type": "sourceIncludes",
              "value": "from abc import ABC, abstractmethod",
              "message": "Use from abc import ABC, abstractmethod"
            },
            {
              "type": "sourceIncludes",
              "value": "@abstractmethod",
              "message": "Use @abstractmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Microwave is heating up"
          ],
          "id": "u5t24p01"
        },
        {
          "kind": "code",
          "title": "Payment Contract",
          "brief": "Implement CreditCard and PayPal processors under one abstract base.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Card: 50\nPayPal: 50"
            },
            {
              "type": "sourceIncludes",
              "value": "class Payment(ABC)",
              "message": "Use class Payment(ABC)"
            },
            {
              "type": "sourceIncludes",
              "value": "@abstractmethod",
              "message": "Use @abstractmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Card: 50"
          ],
          "id": "u5t24p02"
        },
        {
          "kind": "code",
          "title": "Two-Method Contract",
          "brief": "Require both start and stop and fulfil them.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Started\nStopped"
            },
            {
              "type": "sourceIncludes",
              "value": "@abstractmethod",
              "message": "Use @abstractmethod"
            },
            {
              "type": "sourceIncludes",
              "value": "class WebService(Service)",
              "message": "Use class WebService(Service)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Started"
          ],
          "id": "u5t24p03"
        },
        {
          "kind": "code",
          "title": "ABC Polymorphism",
          "brief": "Loop over two Report subclasses implementing render().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "PDF\nHTML"
            },
            {
              "type": "sourceIncludes",
              "value": "class Report(ABC)",
              "message": "Use class Report(ABC)"
            },
            {
              "type": "sourceIncludes",
              "value": "def render",
              "message": "Use def render"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: PDF"
          ],
          "id": "u5t24p04"
        }
      ]
    },
    {
      "id": "u5t25",
      "title": "Interfaces, Duck Typing and Abstraction versus Encapsulation",
      "summary": "Model interface-like contracts and clearly separate hiding complexity from protecting data.",
      "notebookLM": "",
      "notes": "\n<h4>Abstraction Part 3 - Interfaces and Comparisons</h4>\n<p>Python has no interface keyword. A pure abstract class can model a formal interface, while duck typing can provide informal interface-like behaviour. Abstraction hides complexity; encapsulation protects state.</p>\n<h4>The real-world analogy: Steering Wheel versus Locked Hood</h4>\n<p>The steering wheel hides engine complexity. A locked hood prevents unauthorised tampering. These are related but distinct goals.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Two kinds of hiding\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Two kinds of hiding</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Abstraction: complexity</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Public interface</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Encapsulation: state</text></svg>\n<h4>Core ideas</h4><ul><li>A Python interface can be represented by an ABC with abstract methods only.</li><li>Duck typing offers informal behavioural compatibility.</li><li>Abstraction is design-level hiding of complexity.</li><li>Encapsulation is implementation-level control over data access.</li></ul><h4>Interface-like ABC</h4><pre><code>from abc import ABC,abstractmethod\nclass Remote(ABC):\n    @abstractmethod\n    def power_on(self): pass\n    @abstractmethod\n    def change_channel(self,n): pass</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n def run(self): return &quot;A&quot;\nclass B:\n def run(self): return &quot;B&quot;\ndef go(x): return x.run()\nprint(go(B()))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">A</button><button data-o=\"1\">B</button><button data-o=\"2\">run</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Duck typing accepts B because it implements run.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>self.__balance</button><button>=</button><button>100</button><button data-bad># abstraction</button></div><p class=\"w__why\">Protecting a private balance is encapsulation, not abstraction.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Abstraction</code></button><button data-pair=\"p1\"><code>Encapsulation</code></button><button data-pair=\"p2\"><code>Interface</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Required public behaviour</button><button data-pair=\"p1\">Protect state</button><button data-pair=\"p0\">Hide complexity</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Does Python have a built-in interface keyword?",
          "options": [
            "Yes",
            "No",
            "Only in Python 2",
            "Only with dataclasses"
          ],
          "answer": 1,
          "why": "Interfaces are commonly modelled with ABCs or protocols/duck typing."
        },
        {
          "q": "Which pillar protects __balance?",
          "options": [
            "Abstraction",
            "Encapsulation",
            "Inheritance",
            "Polymorphism"
          ],
          "answer": 1,
          "why": "Private state and controlled access are encapsulation."
        },
        {
          "q": "Which pillar hides payment processing complexity behind pay()?",
          "options": [
            "Abstraction",
            "Encapsulation only",
            "Inheritance only",
            "Garbage collection"
          ],
          "answer": 0,
          "why": "A simple interface hides the implementation."
        },
        {
          "q": "Does duck typing require a shared parent?",
          "options": [
            "Always",
            "No, required behaviour is enough",
            "Only for strings",
            "Only with ABC"
          ],
          "answer": 1,
          "why": "Runtime compatibility can be behavioural."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Remote Interface",
          "brief": "Create an ABC Remote with two methods and a TVRemote implementation.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "TV on\nChannel 5"
            },
            {
              "type": "sourceIncludes",
              "value": "class Remote(ABC)",
              "message": "Use class Remote(ABC)"
            },
            {
              "type": "sourceIncludes",
              "value": "@abstractmethod",
              "message": "Use @abstractmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: TV on"
          ],
          "id": "u5t25p01"
        },
        {
          "kind": "code",
          "title": "Informal Interface",
          "brief": "Use two unrelated save() implementations with one backup function.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Saved locally\nSaved to cloud"
            },
            {
              "type": "sourceIncludes",
              "value": "item.save()",
              "message": "Use item.save()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Saved locally"
          ],
          "id": "u5t25p02"
        },
        {
          "kind": "code",
          "title": "Encapsulation Example",
          "brief": "Protect an API token behind a masked property.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "****EFGH"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__token",
              "message": "Use self.__token"
            },
            {
              "type": "sourceIncludes",
              "value": "@property",
              "message": "Use @property"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ****EFGH"
          ],
          "id": "u5t25p03"
        },
        {
          "kind": "code",
          "title": "Abstraction Example",
          "brief": "Hide three internal startup steps behind one boot method.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Load', 'Check', 'Start']"
            },
            {
              "type": "sourceIncludes",
              "value": "def boot",
              "message": "Use def boot"
            },
            {
              "type": "sourceIncludes",
              "value": "self._load()",
              "message": "Use self._load()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Load', 'Check', 'Start']"
          ],
          "id": "u5t25p04"
        }
      ]
    },
    {
      "id": "u5t26",
      "title": "Object Lifecycle, References and Garbage Collection",
      "summary": "Track object creation, aliases, reference counts and cleanup behaviour.",
      "notebookLM": "",
      "notes": "\n<h4>Object Lifecycle Part 1 - Birth, Memory and Garbage Collection</h4>\n<p>Variables hold references to objects. Several names may reference one object. Python reclaims unreachable objects through memory management and garbage collection; __del__ may run during finalisation but should not be relied on for critical cleanup.</p>\n<h4>The real-world analogy: Balloon and Strings</h4>\n<p>The object is a balloon in memory. Variable names are strings tied to it. Removing one string does not destroy the balloon while other strings remain.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 250\" role=\"img\" aria-label=\"Reference lifecycle\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Reference lifecycle</text>\n<circle class=\"box\" cx=\"150\" cy=\"135\" r=\"60\"/><text x=\"150\" y=\"140\" text-anchor=\"middle\" class=\"mono\">Create object</text>\n<circle class=\"box\" cx=\"360\" cy=\"135\" r=\"60\"/><text x=\"360\" y=\"140\" text-anchor=\"middle\" class=\"mono\">References exist</text>\n<circle class=\"box\" cx=\"570\" cy=\"135\" r=\"60\"/><text x=\"570\" y=\"140\" text-anchor=\"middle\" class=\"mono\">Unreachable and reclaimed</text>\n<path class=\"arrow\" d=\"M212 135 H295 M422 135 H505 M570 73 C450 15 270 15 150 73\"><animate attributeName=\"stroke-dashoffset\" values=\"0;30\" dur=\"2s\" repeatCount=\"indefinite\"/></path></svg>\n<h4>Core ideas</h4><ul><li>Assignment between object variables usually copies a reference, not the object.</li><li>Aliases observe the same mutable state.</li><li>del removes a reference/name, not necessarily the object.</li><li>Context managers are generally safer than __del__ for deterministic resource cleanup.</li></ul><h4>Aliasing</h4><pre><code>class Player:\n    def __init__(self,name): self.name=name\np1=Player(&quot;Alice&quot;)\np2=p1\np2.name=&quot;Bob&quot;\nprint(p1.name)</code></pre><h4>Destructor demonstration</h4><pre><code>class Robot:\n    def __init__(self): print(&quot;Robot Activated&quot;)\n    def __del__(self): print(&quot;Robot Deactivated&quot;)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class X: pass\na=X(); b=a\nprint(a is b)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">False</button><button data-o=\"2\">X</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Both names refer to the same instance.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>del</button><button>a</button><button data-bad># object is always destroyed now</button></div><p class=\"w__why\">Other references may still point to the object, so deleting one name does not guarantee destruction.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Reference</code></button><button data-pair=\"p1\"><code>Alias</code></button><button data-pair=\"p2\"><code>Garbage collection</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Reclaims unreachable objects</button><button data-pair=\"p1\">Another reference to the same object</button><button data-pair=\"p0\">Name pointing to an object</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does p2 = p1 normally do?",
          "options": [
            "Deep copy",
            "Creates another reference to the same object",
            "Deletes p1",
            "Creates a subclass"
          ],
          "answer": 1,
          "why": "Both names point to one object."
        },
        {
          "q": "When does del p1 necessarily destroy the object?",
          "options": [
            "Always",
            "Only when no relevant references remain and implementation cleanup occurs",
            "Never",
            "Before assignment"
          ],
          "answer": 1,
          "why": "Other references can keep it alive."
        },
        {
          "q": "What is __del__?",
          "options": [
            "Constructor",
            "Finaliser/destructor hook",
            "Class method",
            "Property"
          ],
          "answer": 1,
          "why": "It may be invoked during object finalisation."
        },
        {
          "q": "What is safer for file/database cleanup?",
          "options": [
            "Only __del__",
            "A context manager such as with",
            "A class variable",
            "MRO"
          ],
          "answer": 1,
          "why": "Context managers provide deterministic cleanup."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Alias State",
          "brief": "Create one Player with two references, modify through one and print through the other.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Bob\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "p2=p1",
              "message": "Use p2=p1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Bob"
          ],
          "id": "u5t26p01"
        },
        {
          "kind": "code",
          "title": "Independent Copy Concept",
          "brief": "Create two independently instantiated Box objects and prove they are not identical.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "Box(1)",
              "message": "Use Box(1)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: False"
          ],
          "id": "u5t26p02"
        },
        {
          "kind": "code",
          "title": "Lifecycle Messages",
          "brief": "Create Robot with constructor and explicit close method for predictable cleanup.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Robot Activated\nRobot Deactivated"
            },
            {
              "type": "sourceIncludes",
              "value": "def close",
              "message": "Use def close"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Robot Activated"
          ],
          "id": "u5t26p03"
        },
        {
          "kind": "code",
          "title": "Reference List",
          "brief": "Store one object in two containers and show both reference the same object.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "9\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "is b[\"item\"]",
              "message": "Use is b[\"item\"]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 9"
          ],
          "id": "u5t26p04"
        }
      ]
    },
    {
      "id": "u5t27",
      "title": "Magic Methods - __str__, __repr__, __len__ and More",
      "summary": "Customise how objects interact with print, debugging, len and standard operators.",
      "notebookLM": "",
      "notes": "\n<h4>Object Lifecycle Part 2 - Magic Methods</h4>\n<p>Dunder methods are automatically called by Python for standard operations. __str__ gives a user-friendly display, __repr__ gives a developer representation, and __len__ defines length.</p>\n<h4>The real-world analogy: Language Translation Layer</h4>\n<p>Magic methods translate familiar Python operations into behaviour chosen by the class designer.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Python operation dispatch\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Python operation dispatch</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">print/len/operator</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Dunder method</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Custom result</text></svg>\n<h4>Core ideas</h4><ul><li>__str__ should return readable text for users.</li><li>__repr__ should return unambiguous developer-focused text.</li><li>__len__ must return a non-negative integer.</li><li>Magic methods integrate custom classes with standard syntax.</li></ul><h4>Book display</h4><pre><code>class Book:\n    def __init__(self,title,author): self.title=title; self.author=author\n    def __str__(self): return f&quot;{self.title} by {self.author}&quot;\n    def __repr__(self): return f&quot;Book({self.title!r}, {self.author!r})&quot;</code></pre><h4>Playlist length</h4><pre><code>class Playlist:\n    def __init__(self): self.songs=[]\n    def __len__(self): return len(self.songs)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class T:\n def __len__(self): return 4\nprint(len(T()))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">T</button><button data-o=\"1\">4</button><button data-o=\"2\">len</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">len calls T.__len__.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>def</button><button>__str__</button><button>(</button><button>self</button><button>)</button><button>:</button><button data-bad>\n    print(&#x27;Car&#x27;)</button></div><p class=\"w__why\">__str__ must return a string rather than only print it.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>__str__</code></button><button data-pair=\"p1\"><code>__repr__</code></button><button data-pair=\"p2\"><code>__len__</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Custom length</button><button data-pair=\"p1\">Developer representation</button><button data-pair=\"p0\">User-facing text</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does __str__ control?",
          "options": [
            "Inheritance",
            "Human-friendly string conversion",
            "Private names",
            "Deletion"
          ],
          "answer": 1,
          "why": "print and str use it for readable output."
        },
        {
          "q": "What is __repr__ intended for?",
          "options": [
            "Only users",
            "Developer/debug representation",
            "Database deletion",
            "Class methods"
          ],
          "answer": 1,
          "why": "It should be precise and useful for debugging."
        },
        {
          "q": "Which method supports len(obj)?",
          "options": [
            "__size__",
            "__len__",
            "length",
            "__count__"
          ],
          "answer": 1,
          "why": "len routes to __len__."
        },
        {
          "q": "What must __len__ return?",
          "options": [
            "Any string",
            "A non-negative integer",
            "A class",
            "A list only"
          ],
          "answer": 1,
          "why": "Python requires an integer length."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Pretty Car",
          "brief": "Create Car.__str__ returning A beautiful Ford.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A beautiful Ford"
            },
            {
              "type": "sourceIncludes",
              "value": "def __str__",
              "message": "Use def __str__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: A beautiful Ford"
          ],
          "id": "u5t27p01"
        },
        {
          "kind": "code",
          "title": "Developer Car",
          "brief": "Add __repr__ and print repr(car).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Car('Ford')"
            },
            {
              "type": "sourceIncludes",
              "value": "def __repr__",
              "message": "Use def __repr__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Car('Ford')"
          ],
          "id": "u5t27p02"
        },
        {
          "kind": "code",
          "title": "Team Length",
          "brief": "Define __len__ using a players list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": "def __len__",
              "message": "Use def __len__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ],
          "id": "u5t27p03"
        },
        {
          "kind": "code",
          "title": "Cart Representation and Length",
          "brief": "Create Cart with __str__ and __len__.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Cart with 2 items\n2"
            },
            {
              "type": "sourceIncludes",
              "value": "def __str__",
              "message": "Use def __str__"
            },
            {
              "type": "sourceIncludes",
              "value": "def __len__",
              "message": "Use def __len__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Cart with 2 items"
          ],
          "id": "u5t27p04"
        }
      ]
    },
    {
      "id": "u5t28",
      "title": "Practical OOP Programs I - Student, Payroll, Banking, Library and Vehicles",
      "summary": "Apply classes, composition, encapsulation, magic methods and inheritance to source-based mini systems.",
      "notebookLM": "",
      "notes": "\n<h4>Unit 5 Practical Programs - Part 1</h4>\n<p>The source demonstrates realistic OOP designs: a Student record, Employee payroll, secure BankAccount, Library containing Book objects and a Vehicle family.</p>\n<h4>The real-world analogy: A Small Software Company</h4>\n<p>Each mini system separates state and behaviour into focused classes, then lets objects collaborate instead of placing everything in one script.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Practical object collaboration\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">Practical object collaboration</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Focused classes</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Objects collaborate</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">System behaviour</text></svg>\n<h4>Core ideas</h4><ul><li>Student combines grades with average calculation.</li><li>Employee uses default arguments and __str__.</li><li>BankAccount validates private balance changes.</li><li>Library demonstrates composition by managing Book objects.</li><li>Vehicle children reuse parent setup with super().</li></ul><h4>Student core</h4><pre><code>class Student:\n    def __init__(self,name,age): self.name=name; self.age=age; self.grades=[]\n    def add_grade(self,g): self.grades.append(g)\n    def average(self): return round(sum(self.grades)/len(self.grades),2) if self.grades else 0</code></pre><h4>Composition core</h4><pre><code>class Library:\n    def __init__(self): self.books=[]\n    def add_book(self,book): self.books.append(book)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class S:\n def __init__(self): self.g=[]\n def avg(self): return 0 if not self.g else sum(self.g)/len(self.g)\nprint(S().avg())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">None</button><button data-o=\"1\">0</button><button data-o=\"2\">Error</button><button data-o=\"3\">[]</button></div><p class=\"w__why\">The method safely handles an empty grade list.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class Library:</button><button data-bad>\n    books = []</button></div><p class=\"w__why\">A mutable collection shared as a class variable would mix libraries. Create self.books in __init__.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>Composition</code></button><button data-pair=\"p1\"><code>Encapsulation</code></button><button data-pair=\"p2\"><code>super()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Reuse parent initialisation</button><button data-pair=\"p1\">Validated private state</button><button data-pair=\"p0\">Object contains other objects</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which program best demonstrates composition?",
          "options": [
            "A number loop",
            "Library containing Book objects",
            "One static method",
            "A private string alone"
          ],
          "answer": 1,
          "why": "One object manages other objects."
        },
        {
          "q": "Why is BankAccount.__balance private?",
          "options": [
            "To prevent uncontrolled updates",
            "To sort it",
            "To inherit it automatically",
            "To make it global"
          ],
          "answer": 0,
          "why": "Methods validate deposits and withdrawals."
        },
        {
          "q": "Why use bonus=0 in Employee.__init__?",
          "options": [
            "To make bonus optional",
            "To delete bonus",
            "To create a class method",
            "To trigger MRO"
          ],
          "answer": 0,
          "why": "A default supports employees without an initial bonus."
        },
        {
          "q": "Why does Car call super().__init__?",
          "options": [
            "To initialise shared make/model",
            "To delete Vehicle",
            "To create books",
            "To overload +"
          ],
          "answer": 0,
          "why": "The parent handles shared attributes."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Student Average",
          "brief": "Build Student with add_grade and average methods.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "85.0"
            },
            {
              "type": "sourceIncludes",
              "value": "class Student",
              "message": "Use class Student"
            },
            {
              "type": "sourceIncludes",
              "value": "self.grades",
              "message": "Use self.grades"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 85.0"
          ],
          "id": "u5t28p01"
        },
        {
          "kind": "code",
          "title": "Employee Payroll",
          "brief": "Build Employee with optional bonus and readable string.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Sarah: 65000"
            },
            {
              "type": "sourceIncludes",
              "value": "bonus=0",
              "message": "Use bonus=0"
            },
            {
              "type": "sourceIncludes",
              "value": "def __str__",
              "message": "Use def __str__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Sarah: 65000"
          ],
          "id": "u5t28p02"
        },
        {
          "kind": "code",
          "title": "Secure Bank Account",
          "brief": "Build validated deposit and withdrawal methods.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "130"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__balance",
              "message": "Use self.__balance"
            },
            {
              "type": "sourceIncludes",
              "value": "@property",
              "message": "Use @property"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 130"
          ],
          "id": "u5t28p03"
        },
        {
          "kind": "code",
          "title": "Library Composition",
          "brief": "Create Book and Library, borrow one book and print status.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "self.books",
              "message": "Use self.books"
            },
            {
              "type": "sourceIncludes",
              "value": "b.available=False",
              "message": "Use b.available=False"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u5t28p04"
        }
      ]
    },
    {
      "id": "u5t29",
      "title": "Practical OOP Programs II - Shapes, ATM, Shopping, Payments and Overriding",
      "summary": "Complete larger mini systems using polymorphism, abstraction, composition and interactive logic.",
      "notebookLM": "",
      "notes": "\n<h4>Unit 5 Practical Programs - Part 2</h4>\n<p>The source continues with a polymorphic shape calculator, ATM class, ShoppingCart, abstract payment system and a focused overriding demonstration.</p>\n<h4>The real-world analogy: Service Platform</h4>\n<p>A platform can process different shapes, payments and items through common interfaces while each object owns its specialised behaviour.</p>\n<svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"System design with interfaces\">\n<text x=\"360\" y=\"27\" text-anchor=\"middle\" class=\"lbl\">System design with interfaces</text>\n<rect class=\"box\" x=\"35\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"130\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Common contract</text>\n<path class=\"arrow\" d=\"M235 116 H300\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"310\" y=\"85\" width=\"190\" height=\"62\" rx=\"14\"/><text x=\"405\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Concrete services</text>\n<path class=\"arrow\" d=\"M510 116 H575\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path>\n<rect class=\"box\" x=\"585\" y=\"85\" width=\"100\" height=\"62\" rx=\"14\"/><text x=\"635\" y=\"122\" text-anchor=\"middle\" class=\"mono\">Unified client code</text></svg>\n<h4>Core ideas</h4><ul><li>Shape subclasses override calculate_area.</li><li>ATM encapsulates PIN, balance and its menu logic.</li><li>ShoppingCart aggregates Item prices.</li><li>PaymentProcessor uses ABC to enforce process_payment.</li><li>Animal children demonstrate default versus overridden behaviour.</li></ul><h4>Abstract payments</h4><pre><code>from abc import ABC,abstractmethod\nclass PaymentProcessor(ABC):\n    @abstractmethod\n    def process_payment(self,amount): pass</code></pre><h4>Shopping composition</h4><pre><code>class Cart:\n    def __init__(self): self.items=[]\n    def total(self): return sum(i.price for i in self.items)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the behaviour, run the code, then explain which object owns the data and which method executed.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>class A:\n def speak(self): return &quot;generic&quot;\nclass D(A):\n def speak(self): return &quot;woof&quot;\nclass W(A): pass\nprint(D().speak(),W().speak())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">generic generic</button><button data-o=\"1\">woof woof</button><button data-o=\"2\">woof generic</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Dog overrides while Worm inherits the default.</p></div>\n<div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button>class Payment:</button><button>\n    def process(self, amount):</button><button data-bad>\n        pass</button></div><p class=\"w__why\">A pass-only method is not enforced unless the class uses ABC and the method uses @abstractmethod.</p></div>\n<div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each OOP idea to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>ATM</code></button><button data-pair=\"p1\"><code>ShoppingCart</code></button><button data-pair=\"p2\"><code>PaymentProcessor</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Abstract contract</button><button data-pair=\"p1\">Composition and aggregation</button><button data-pair=\"p0\">Encapsulated interactive service</button></div></div><p class=\"w__why\">Matching vocabulary to behaviour builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What makes Shape.area polymorphic?",
          "options": [
            "Every class uses a different method name",
            "Children override the same method",
            "It is private",
            "It uses del"
          ],
          "answer": 1,
          "why": "One call selects each concrete formula."
        },
        {
          "q": "What does ATM encapsulate?",
          "options": [
            "Only print statements",
            "PIN, balance and operations",
            "Only a loop",
            "Class MRO"
          ],
          "answer": 1,
          "why": "Sensitive state and related behaviour remain together."
        },
        {
          "q": "What enforces payment method implementation?",
          "options": [
            "@abstractmethod in an ABC",
            "__str__",
            "Class variable",
            "Name mangling only"
          ],
          "answer": 0,
          "why": "The abstract contract blocks incomplete processors."
        },
        {
          "q": "How does a cart calculate its total?",
          "options": [
            "By summing price attributes of contained Item objects",
            "By MRO",
            "By deleting items",
            "By using only static data"
          ],
          "answer": 0,
          "why": "Composition allows aggregation across objects."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Polymorphic Shapes",
          "brief": "Create Square and Circle and print type name with area.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Square 16\nCircle 78.54"
            },
            {
              "type": "sourceIncludes",
              "value": "class Square(Shape)",
              "message": "Use class Square(Shape)"
            },
            {
              "type": "sourceIncludes",
              "value": "class Circle(Shape)",
              "message": "Use class Circle(Shape)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Square 16"
          ],
          "id": "u5t29p01"
        },
        {
          "kind": "code",
          "title": "ATM Core",
          "brief": "Build an ATM with private PIN/balance, login and withdrawal.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nTrue\n380"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__pin",
              "message": "Use self.__pin"
            },
            {
              "type": "sourceIncludes",
              "value": "self.__balance",
              "message": "Use self.__balance"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u5t29p02"
        },
        {
          "kind": "code",
          "title": "Shopping Cart",
          "brief": "Create Item and ShoppingCart with total and receipt lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1225.5"
            },
            {
              "type": "sourceIncludes",
              "value": "class Item",
              "message": "Use class Item"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(i.price",
              "message": "Use sum(i.price"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 1225.5"
          ],
          "id": "u5t29p03"
        },
        {
          "kind": "code",
          "title": "Abstract Payments",
          "brief": "Implement card and PayPal processors and run both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Card 50\nPayPal 50"
            },
            {
              "type": "sourceIncludes",
              "value": "class PaymentProcessor(ABC)",
              "message": "Use class PaymentProcessor(ABC)"
            },
            {
              "type": "sourceIncludes",
              "value": "@abstractmethod",
              "message": "Use @abstractmethod"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Card 50"
          ],
          "id": "u5t29p04"
        }
      ]
    }
  ],
  "test": {
    "title": "Unit 5 Final Test - Object-Oriented Programming",
    "marksPerQuestion": 1,
    "durationMinutes": 60,
    "questions": [
      {
        "q": "Which description best matches OOP?",
        "options": [
          "A list of unrelated commands",
          "Data and behaviour grouped into objects",
          "Only loops and conditions",
          "Code without functions"
        ],
        "answer": 1,
        "why": "OOP organises related state and behaviour into objects."
      },
      {
        "q": "Why was OOP adopted for large programs?",
        "options": [
          "To remove variables",
          "To reduce screen brightness",
          "To improve organisation, reuse and safety",
          "To stop using functions"
        ],
        "answer": 2,
        "why": "Large systems are easier to manage when responsibilities are separated."
      },
      {
        "q": "What is a class?",
        "options": [
          "A physical instance",
          "A blueprint for objects",
          "A syntax error",
          "A loop"
        ],
        "answer": 1,
        "why": "A class describes the state and behaviour objects will have."
      },
      {
        "q": "What is an object?",
        "options": [
          "The class keyword",
          "A concrete instance created from a class",
          "Only a variable name",
          "A module"
        ],
        "answer": 1,
        "why": "An object is the usable instance in memory."
      },
      {
        "q": "What does encapsulation mainly protect?",
        "options": [
          "File names",
          "Internal object data",
          "Only loops",
          "Internet access"
        ],
        "answer": 1,
        "why": "Encapsulation controls interaction with internal state."
      },
      {
        "q": "What does inheritance mainly provide?",
        "options": [
          "Code reuse through parent-child classes",
          "Automatic encryption",
          "Database storage",
          "Faster typing only"
        ],
        "answer": 0,
        "why": "Shared parent behaviour can be inherited."
      },
      {
        "q": "What does polymorphism literally suggest?",
        "options": [
          "Hidden data",
          "Many forms",
          "One parent",
          "No methods"
        ],
        "answer": 1,
        "why": "Poly means many and morph means forms."
      },
      {
        "q": "Which best demonstrates polymorphism?",
        "options": [
          "Every class has different method names",
          "Dog.speak and Cat.speak return different sounds",
          "A private balance",
          "A class variable"
        ],
        "answer": 1,
        "why": "The same method call produces object-specific behaviour."
      },
      {
        "q": "Which term means creating an object from a class?",
        "options": [
          "Encapsulation",
          "Instantiation",
          "Abstraction",
          "Iteration"
        ],
        "answer": 1,
        "why": "Instantiation creates the instance."
      },
      {
        "q": "Which pillar prevents direct unsafe balance changes?",
        "options": [
          "Polymorphism",
          "Inheritance",
          "Encapsulation",
          "Abstraction"
        ],
        "answer": 2,
        "why": "Encapsulation protects internal state."
      },
      {
        "q": "What is self?",
        "options": [
          "A global variable",
          "The current instance",
          "The parent class",
          "A decorator"
        ],
        "answer": 1,
        "why": "self refers to the object invoking the method."
      },
      {
        "q": "Where must self appear in an instance method?",
        "options": [
          "As the first parameter",
          "As the last line",
          "Outside the class",
          "It is never written"
        ],
        "answer": 0,
        "why": "Python passes the instance into the first parameter."
      },
      {
        "q": "When does __init__ run?",
        "options": [
          "At import only",
          "When an object is instantiated",
          "When print is called",
          "When the object is deleted"
        ],
        "answer": 1,
        "why": "The constructor runs during object creation."
      },
      {
        "q": "What is an attribute?",
        "options": [
          "A loop",
          "A variable belonging to an object",
          "A module",
          "A syntax error"
        ],
        "answer": 1,
        "why": "Attributes store object state."
      },
      {
        "q": "Which variable is unique to each instance?",
        "options": [
          "Class variable",
          "Instance variable",
          "Module variable only",
          "Decorator"
        ],
        "answer": 1,
        "why": "self.name belongs to each object."
      },
      {
        "q": "Where is a class variable declared?",
        "options": [
          "Inside __init__ using self",
          "In the class body outside methods",
          "Inside a loop only",
          "After del"
        ],
        "answer": 1,
        "why": "Class-level placement makes it shared."
      },
      {
        "q": "Which method type uses self?",
        "options": [
          "Static",
          "Instance",
          "Class",
          "Abstract only"
        ],
        "answer": 1,
        "why": "Instance methods receive the object."
      },
      {
        "q": "Which decorator creates a class method?",
        "options": [
          "@property",
          "@classmethod",
          "@abstractmethod",
          "@instance"
        ],
        "answer": 1,
        "why": "Class methods are marked @classmethod."
      },
      {
        "q": "Which belongs in __init__?",
        "options": [
          "Initial instance setup",
          "Only class deletion",
          "Only imports",
          "MRO calculation"
        ],
        "answer": 0,
        "why": "The constructor initialises new objects."
      },
      {
        "q": "Which syntax stores personal data?",
        "options": [
          "name = value",
          "self.name = value",
          "cls.name always",
          "static.name"
        ],
        "answer": 1,
        "why": "self attaches data to the current object."
      },
      {
        "q": "What is the main benefit of inheritance?",
        "options": [
          "Code reuse",
          "Data deletion",
          "Automatic networking",
          "No constructors"
        ],
        "answer": 0,
        "why": "Common behaviour is written once in the parent."
      },
      {
        "q": "Which syntax makes Cat inherit Animal?",
        "options": [
          "class Cat inherits Animal:",
          "class Cat(Animal):",
          "class Animal(Cat):",
          "Cat = Animal"
        ],
        "answer": 1,
        "why": "The parent class is written in parentheses."
      },
      {
        "q": "Vehicle -> Car -> ElectricCar is what type?",
        "options": [
          "Multiple",
          "Multilevel",
          "Hierarchical",
          "No inheritance"
        ],
        "answer": 1,
        "why": "The classes form a chain across generations."
      },
      {
        "q": "How is multiple inheritance written?",
        "options": [
          "class C(A, B):",
          "class C(A and B):",
          "class A(C, B):",
          "class C[A+B]:"
        ],
        "answer": 0,
        "why": "Parent classes are comma-separated."
      },
      {
        "q": "What happens when a child defines the same method name?",
        "options": [
          "Both vanish",
          "The child overrides the inherited version",
          "The parent always wins",
          "Python forbids it"
        ],
        "answer": 1,
        "why": "Child-specific behaviour replaces the inherited behaviour."
      },
      {
        "q": "What does super() refer to?",
        "options": [
          "The current list",
          "The next parent in the inheritance order",
          "A global variable",
          "The garbage collector"
        ],
        "answer": 1,
        "why": "super() delegates to parent behaviour."
      },
      {
        "q": "What does MRO determine?",
        "options": [
          "File order",
          "Method lookup path",
          "Variable type only",
          "Memory size"
        ],
        "answer": 1,
        "why": "MRO defines the order Python searches for methods."
      },
      {
        "q": "For class Hero(Fighter, Wizard), which parent is searched first in a simple conflict?",
        "options": [
          "Wizard",
          "Fighter",
          "Neither",
          "Random"
        ],
        "answer": 1,
        "why": "Fighter appears first in the declared order."
      },
      {
        "q": "Which structure is A -> B -> C?",
        "options": [
          "Multiple",
          "Multilevel",
          "Hierarchical",
          "Static"
        ],
        "answer": 1,
        "why": "It is a chain of generations."
      },
      {
        "q": "What does an override do?",
        "options": [
          "Adds a class variable only",
          "Provides child-specific behaviour under the same method name",
          "Deletes inheritance",
          "Calls garbage collection"
        ],
        "answer": 1,
        "why": "The child replaces the inherited implementation."
      },
      {
        "q": "Which syntax indicates protected-by-convention?",
        "options": [
          "self.value",
          "self._value",
          "self.__value",
          "protected value"
        ],
        "answer": 1,
        "why": "One leading underscore is the protected convention."
      },
      {
        "q": "Which syntax triggers name mangling?",
        "options": [
          "self.value",
          "self._value",
          "self.__value",
          "value__"
        ],
        "answer": 2,
        "why": "Two leading underscores create a mangled name."
      },
      {
        "q": "What is name mangling?",
        "options": [
          "Encryption",
          "Python changes a private name internally",
          "Deletion",
          "Inheritance"
        ],
        "answer": 1,
        "why": "Private names include the class name internally."
      },
      {
        "q": "What does a getter do?",
        "options": [
          "Validates and writes only",
          "Reads private state safely",
          "Deletes the object",
          "Creates a class"
        ],
        "answer": 1,
        "why": "A getter returns controlled data."
      },
      {
        "q": "What does @property create?",
        "options": [
          "A class variable",
          "A method accessed like an attribute",
          "A destructor",
          "An abstract class"
        ],
        "answer": 1,
        "why": "The decorated getter is accessed without parentheses."
      },
      {
        "q": "What setter decorator matches a score property?",
        "options": [
          "@setter",
          "@property.setter",
          "@score.setter",
          "@set_score"
        ],
        "answer": 2,
        "why": "The setter decorator uses the property name."
      },
      {
        "q": "Which member is a convention for subclass/internal use?",
        "options": [
          "public",
          "_protected",
          "__private",
          "staticmethod"
        ],
        "answer": 1,
        "why": "One underscore communicates protected intent."
      },
      {
        "q": "Which mechanism powers double-underscore privacy?",
        "options": [
          "MRO",
          "Name mangling",
          "Garbage collection",
          "Overloading"
        ],
        "answer": 1,
        "why": "Python transforms the name."
      },
      {
        "q": "What does polymorphism mean?",
        "options": [
          "One form",
          "Many forms",
          "Private data",
          "Memory cleanup"
        ],
        "answer": 1,
        "why": "One operation can have several implementations."
      },
      {
        "q": "What commonly creates polymorphism in inheritance?",
        "options": [
          "Method overriding",
          "Name mangling",
          "Class deletion",
          "Local variables"
        ],
        "answer": 0,
        "why": "Children implement the same method differently."
      },
      {
        "q": "Which magic method overloads +?",
        "options": [
          "__plus__",
          "__add__",
          "add",
          "__sum__"
        ],
        "answer": 1,
        "why": "Python routes + to __add__."
      },
      {
        "q": "What does duck typing check?",
        "options": [
          "Official family tree only",
          "Whether the needed behaviour exists",
          "Only variable type annotations",
          "The file name"
        ],
        "answer": 1,
        "why": "Python commonly relies on behaviour at runtime."
      },
      {
        "q": "Does Python support traditional signature-based method overloading?",
        "options": [
          "Yes automatically",
          "No, later definitions replace earlier ones",
          "Only for classes",
          "Only for integers"
        ],
        "answer": 1,
        "why": "Python keeps the last method bound to a name."
      },
      {
        "q": "What is a common alternative?",
        "options": [
          "Duplicate names",
          "Default arguments",
          "Delete parameters",
          "Global variables"
        ],
        "answer": 1,
        "why": "Defaults make one method handle optional input."
      },
      {
        "q": "What does abstraction hide?",
        "options": [
          "All method names",
          "Complex implementation details",
          "Only private variables",
          "Files"
        ],
        "answer": 1,
        "why": "Users interact with essential features."
      },
      {
        "q": "Can a class with unimplemented abstract methods be instantiated?",
        "options": [
          "Yes",
          "No",
          "Only twice",
          "Only through print"
        ],
        "answer": 1,
        "why": "The contract must be fulfilled first."
      },
      {
        "q": "Which module provides Abstract Base Classes?",
        "options": [
          "math",
          "abc",
          "random",
          "oop"
        ],
        "answer": 1,
        "why": "abc contains ABC and abstractmethod."
      },
      {
        "q": "Which decorator marks a required method?",
        "options": [
          "@staticmethod",
          "@abstractmethod",
          "@property",
          "@classmethod"
        ],
        "answer": 1,
        "why": "It enforces implementation in concrete children."
      },
      {
        "q": "Does Python have a built-in interface keyword?",
        "options": [
          "Yes",
          "No",
          "Only in Python 2",
          "Only with dataclasses"
        ],
        "answer": 1,
        "why": "Interfaces are commonly modelled with ABCs or protocols/duck typing."
      },
      {
        "q": "Which pillar protects __balance?",
        "options": [
          "Abstraction",
          "Encapsulation",
          "Inheritance",
          "Polymorphism"
        ],
        "answer": 1,
        "why": "Private state and controlled access are encapsulation."
      },
      {
        "q": "What does p2 = p1 normally do?",
        "options": [
          "Deep copy",
          "Creates another reference to the same object",
          "Deletes p1",
          "Creates a subclass"
        ],
        "answer": 1,
        "why": "Both names point to one object."
      },
      {
        "q": "When does del p1 necessarily destroy the object?",
        "options": [
          "Always",
          "Only when no relevant references remain and implementation cleanup occurs",
          "Never",
          "Before assignment"
        ],
        "answer": 1,
        "why": "Other references can keep it alive."
      },
      {
        "q": "What does __str__ control?",
        "options": [
          "Inheritance",
          "Human-friendly string conversion",
          "Private names",
          "Deletion"
        ],
        "answer": 1,
        "why": "print and str use it for readable output."
      },
      {
        "q": "What is __repr__ intended for?",
        "options": [
          "Only users",
          "Developer/debug representation",
          "Database deletion",
          "Class methods"
        ],
        "answer": 1,
        "why": "It should be precise and useful for debugging."
      },
      {
        "q": "Which program best demonstrates composition?",
        "options": [
          "A number loop",
          "Library containing Book objects",
          "One static method",
          "A private string alone"
        ],
        "answer": 1,
        "why": "One object manages other objects."
      },
      {
        "q": "Why is BankAccount.__balance private?",
        "options": [
          "To prevent uncontrolled updates",
          "To sort it",
          "To inherit it automatically",
          "To make it global"
        ],
        "answer": 0,
        "why": "Methods validate deposits and withdrawals."
      },
      {
        "q": "What makes Shape.area polymorphic?",
        "options": [
          "Every class uses a different method name",
          "Children override the same method",
          "It is private",
          "It uses del"
        ],
        "answer": 1,
        "why": "One call selects each concrete formula."
      },
      {
        "q": "What does ATM encapsulate?",
        "options": [
          "Only print statements",
          "PIN, balance and operations",
          "Only a loop",
          "Class MRO"
        ],
        "answer": 1,
        "why": "Sensitive state and related behaviour remain together."
      },
      {
        "q": "Which is an OOP-style model for a school?",
        "options": [
          "One 10,000-line script",
          "Student, Teacher and Classroom objects",
          "Only a list of marks",
          "Only print statements"
        ],
        "answer": 1,
        "why": "The real entities become collaborating objects."
      },
      {
        "q": "What enforces payment method implementation?",
        "options": [
          "@abstractmethod in an ABC",
          "__str__",
          "Class variable",
          "Name mangling only"
        ],
        "answer": 0,
        "why": "The abstract contract blocks incomplete processors."
      }
    ]
  },
  "project": {
    "title": "Unit 5 Project - AbhyasLab Smart Campus Services Suite",
    "summary": "Build a complete campus services application using classes, inheritance, encapsulation, polymorphism, abstraction, composition and magic methods.",
    "brief": "\n<h4>Your mission</h4>\n<p>Build a terminal application named <strong>AbhyasLab Smart Campus Services Suite</strong>. The program must model users and campus services using complete object-oriented design.</p>\n\n<h4>Required architecture</h4>\n<ol>\n  <li>Create an abstract base class <code>CampusService</code> with abstract methods <code>execute()</code> and <code>summary()</code>.</li>\n  <li>Create a <code>User</code> parent class and at least three child classes: <code>Student</code>, <code>Faculty</code>, and <code>Administrator</code>.</li>\n  <li>Use <code>super().__init__()</code> to initialise shared account ID and name data.</li>\n  <li>Protect sensitive information such as PIN, wallet balance, or account status with private attributes and validated properties.</li>\n  <li>Create at least four concrete service classes, such as LibraryService, FeeService, CourseService and SupportService.</li>\n  <li>Use polymorphism by storing mixed services in one collection and calling <code>service.execute(user)</code> without type-specific if chains.</li>\n  <li>Create a <code>CampusPortal</code> class that composes users, services and activity records.</li>\n  <li>Implement <code>__str__</code>, <code>__repr__</code> and <code>__len__</code> meaningfully.</li>\n  <li>Overload one operator, such as <code>+</code> for combining credit wallets or service bundles.</li>\n  <li>Include one <code>@classmethod</code> for a shared count or factory constructor and one <code>@staticmethod</code> for independent validation.</li>\n  <li>Demonstrate <code>isinstance()</code>, <code>issubclass()</code> and print the MRO of one inheritance hierarchy.</li>\n  <li>Keep the menu running until the user chooses Quit and handle invalid choices without crashing.</li>\n</ol>\n\n<h4>Suggested menu</h4>\n<pre><code>========================================\nABHYASLAB SMART CAMPUS SERVICES\n1. Register user\n2. List users and roles\n3. Open a campus service\n4. Add or deduct wallet credits\n5. Show activity history\n6. Show OOP diagnostics\n7. Run demonstration scenario\n8. Quit\n========================================</code></pre>\n\n<h4>Suggested class map</h4>\n<pre><code>CampusService (ABC)\n├── LibraryService\n├── FeeService\n├── CourseService\n└── SupportService\n\nUser\n├── Student\n├── Faculty\n└── Administrator\n\nCampusPortal\n├── users: list[User]\n├── services: list[CampusService]\n└── activity_log: list[str]\n</code></pre>\n\n<h4>Submission package</h4>\n<ul>\n  <li><code>smart_campus.py</code></li>\n  <li><code>README.md</code> explaining the class hierarchy and all four OOP pillars</li>\n  <li>A class diagram in PNG, SVG or Mermaid format</li>\n  <li>At least ten sample runs, including invalid PIN, invalid balance update and unavailable service cases</li>\n  <li>A public GitHub repository or public Google Drive link</li>\n</ul>\n\n<h4>Quality checklist</h4>\n<ul>\n  <li>No sensitive attribute is changed directly from outside its class.</li>\n  <li>Abstract contracts are fully implemented by concrete services.</li>\n  <li>Polymorphic code avoids long chains of <code>type()</code> comparisons.</li>\n  <li>Parent setup is reused through <code>super()</code>.</li>\n  <li>Composition is used where the portal owns users or services.</li>\n  <li>Magic methods return valid values and do not only print.</li>\n  <li>Every menu option handles invalid input safely.</li>\n</ul>\n"
  }
};

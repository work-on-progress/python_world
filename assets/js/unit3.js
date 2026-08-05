/* ==========================================================================
   AbhyasLab - UNIT 3
   Strings, Arrays and Core Data Structures - Expanded Practice Edition.

   Built from the supplied 75-page Unit 3 PDF. The source organisation and
   terminology are preserved, then expanded with inline SVG diagrams, small
   animations, prediction games, matching interactions, staged coding tasks,
   revision checkpoints, a guided mini-project, final test and final project.
   ========================================================================== */

const UNIT_3 = {
  "unit": "Unit 3",
  "unitTitle": "Strings, Arrays and Core Data Structures - Practice Edition",
  "topics": [
    {
      "id": "u3t01",
      "title": "Strings - Creating Text, Quotes and Escapes",
      "summary": "Create reliable text with quote styles, escape sequences and raw strings.",
      "notebookLM": "",
      "notes": "\n<h4>Strings Part 1 - Creating Text</h4>\n<p>The source introduces strings as compound data, the three quote styles, escape sequences, and raw strings.</p>\n<h4>The real-world analogy: A beaded necklace</h4>\n<p>A number can be one solid value, but a string is a compound sequence made from smaller character beads. The order of those beads matters.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 175\" role=\"img\" aria-label=\"The string APPLE shown as five connected character beads\"><circle class=\"box\" cx=\"150\" cy=\"82\" r=\"34\"/><text x=\"150\" y=\"89\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:20px;font-weight:800\">A</text><path class=\"arrow\" d=\"M185 82 H214\"/><circle class=\"box\" cx=\"250\" cy=\"82\" r=\"34\"/><text x=\"250\" y=\"89\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:20px;font-weight:800\">P</text><path class=\"arrow\" d=\"M285 82 H314\"/><circle class=\"box\" cx=\"350\" cy=\"82\" r=\"34\"/><text x=\"350\" y=\"89\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:20px;font-weight:800\">P</text><path class=\"arrow\" d=\"M385 82 H414\"/><circle class=\"box\" cx=\"450\" cy=\"82\" r=\"34\"/><text x=\"450\" y=\"89\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:20px;font-weight:800\">L</text><path class=\"arrow\" d=\"M485 82 H514\"/><circle class=\"box\" cx=\"550\" cy=\"82\" r=\"34\"/><text x=\"550\" y=\"89\" text-anchor=\"middle\" class=\"mono\" style=\"font-size:20px;font-weight:800\">E</text><path class=\"accent\" d=\"M115 125 C250 155 450 155 585 125\" fill=\"none\"><animate attributeName=\"stroke-dashoffset\" values=\"0;40\" dur=\"2s\" repeatCount=\"indefinite\"/></path><text x=\"350\" y=\"160\" text-anchor=\"middle\" class=\"lbl\">One string, five ordered character beads</text></svg>\n<h4>Single, double and triple quotes</h4><p>Use single or double quotes for one-line text. Double quotes are convenient when the text contains an apostrophe. Triple quotes preserve several lines in one string.</p><table><tr><th>Form</th><th>Best use</th><th>Example</th></tr><tr><td><code>'...'</code></td><td>short text</td><td><code>'John'</code></td></tr><tr><td><code>\"...\"</code></td><td>text with apostrophes</td><td><code>\"I can't wait!\"</code></td></tr><tr><td><code>&#39;&#39;&#39;...&#39;&#39;&#39;</code></td><td>multiline text</td><td>paragraphs</td></tr></table><h4>Escape sequences</h4><p>An escape sequence starts with a backslash. <code>&#92;n</code> moves to a new line, <code>&#92;t</code> inserts a tab, and <code>&#92;&quot;</code> prints a quote inside quoted text.</p><h4>Raw strings</h4><p>Prefix a string with <code>r</code> when backslashes must be treated as ordinary characters, such as Windows file paths.</p>\n<h4>Create and print text</h4><pre><code>name = \"John\"\nsentence = \"I can't wait!\"\nprint(name)\nprint(sentence)</code></pre><h4>Raw path</h4><pre><code>path = r\"C:\\desktop\\notes\"\nprint(path)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>print(\"Hello\\nWorld\")</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Hello World on one line</button><button data-o=\"1\">Hello then World on the next line</button><button data-o=\"2\">An error</button></div><p class=\"w__why\">The newline escape works like pressing Enter inside the string.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >print(</button><button >\"He said, </button><button data-bad>\"Wow!\"</button><button >\")</button></div><p class=\"w__why\">The inside quote must be escaped, or the outer string ends too early.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>\\n</code></button><button data-pair=\"p1\"><code>\\t</code></button><button data-pair=\"p2\"><code>r\"...\"</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">raw string</button><button data-pair=\"p1\">tab space</button><button data-pair=\"p0\">new line</button></div></div><p class=\"w__why\">These three tools control how Python interprets characters inside text.</p></div>\n",
      "mcqs": [
        {
          "q": "Why is a string a compound data type?",
          "options": [
            "It performs complex maths",
            "It contains ordered characters",
            "It is heavier than an integer",
            "It must contain spaces"
          ],
          "answer": 1,
          "why": "A string is made of individual characters in order."
        },
        {
          "q": "Which quotes support multiline text?",
          "options": [
            "Single",
            "Double only",
            "Triple",
            "No quotes"
          ],
          "answer": 2,
          "why": "Triple quotes preserve several lines."
        },
        {
          "q": "What does \\n do?",
          "options": [
            "Deletes n",
            "Creates a variable",
            "Starts a new line",
            "Prints new"
          ],
          "answer": 2,
          "why": "\\n is the newline escape."
        },
        {
          "q": "What does a raw-string prefix do?",
          "options": [
            "Reverses text",
            "Ignores escape processing for backslashes",
            "Makes text uppercase",
            "Removes spaces"
          ],
          "answer": 1,
          "why": "Raw strings preserve backslashes literally."
        }
      ],
      "tasks": [
        {
          "id": "u3t01p01",
          "kind": "code",
          "title": "The apostrophe problem",
          "brief": "Print <code>My dog's name is Rex.</code> using quotes that do not break.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "My dog's name is Rex."
            },
            {
              "type": "sourceIncludes",
              "value": "\"My dog's name is Rex.\"",
              "message": "Use double quotes around the apostrophe text"
            }
          ],
          "level": "Level 1 - Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use double quotes around the apostrophe text",
            "Expected output begins with: My dog's name is Rex."
          ]
        },
        {
          "id": "u3t01p02",
          "kind": "code",
          "title": "The two-story print",
          "brief": "Use one print call and <code>\\n</code> to print Top and Bottom on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Top\nBottom"
            },
            {
              "type": "sourceIncludes",
              "value": "\\n",
              "message": "Use the newline escape"
            }
          ],
          "level": "Level 1 - Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the newline escape",
            "Expected output begins with: Top"
          ]
        },
        {
          "id": "u3t01p03",
          "kind": "code",
          "title": "Tabbed heading",
          "brief": "Print Name, a tab, and Age.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Name\tAge"
            },
            {
              "type": "sourceIncludes",
              "value": "\\t",
              "message": "Use the tab escape"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the tab escape",
            "Expected output begins with: Name\tAge"
          ]
        },
        {
          "id": "u3t01p04",
          "kind": "code",
          "title": "Quote inception",
          "brief": "Print the teacher sentence including the quotation marks.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "The teacher said \"Quiet down!\" to the class."
            },
            {
              "type": "sourceIncludes",
              "value": "\\\"",
              "message": "Escape the quote marks"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Escape the quote marks",
            "Expected output begins with: The teacher said \"Quiet down!\" to the class."
          ]
        },
        {
          "id": "u3t01p05",
          "kind": "code",
          "title": "Raw file path",
          "brief": "Store and print <code>C:\\desktop\\notes</code> as a raw string.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "C:\\desktop\\notes"
            },
            {
              "type": "sourceRegex",
              "pattern": "r[\"']C:\\\\desktop",
              "message": "Use a raw-string prefix"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a raw-string prefix",
            "Expected output begins with: C:\\desktop\\notes"
          ]
        },
        {
          "id": "u3t01p06",
          "kind": "code",
          "title": "Mini build - formatted card",
          "brief": "Print exactly three lines: STUDENT, Name: Mira, Course: Python.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "STUDENT\nName: Mira\nCourse: Python"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print three lines"
            },
            {
              "type": "sourceIncludes",
              "value": "\\n",
              "message": "Use newline escapes or a multiline string"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Print three lines",
            "Expected output begins with: STUDENT"
          ]
        }
      ]
    },
    {
      "id": "u3t02",
      "title": "Strings - Length and Character Indexing",
      "summary": "Measure strings and navigate individual characters from either end.",
      "notebookLM": "",
      "notes": "\n<h4>Strings Part 2 - Navigating Text</h4>\n<p>The source covers len(), positive indexing, negative indexing, and the zero-based indexing rule.</p>\n<h4>The real-world analogy: Train cars with numbered seats</h4>\n<p>Every character occupies a position. Python labels the first position 0, while negative indexes count backward from the last character.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 205\" role=\"img\" aria-label=\"Positive and negative indexes on the word PYTHON\"><rect class=\"box\" x=\"70\" y=\"70\" width=\"78\" height=\"58\" rx=\"8\"/><text x=\"109\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:19px;font-weight:800\">P</text><text x=\"109\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">0</text><text x=\"109\" y=\"154\" text-anchor=\"middle\" class=\"lbl\">-6</text><rect class=\"box box--dark\" x=\"162\" y=\"70\" width=\"78\" height=\"58\" rx=\"8\"/><text x=\"201\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:19px;font-weight:800\">Y</text><text x=\"201\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">1</text><text x=\"201\" y=\"154\" text-anchor=\"middle\" class=\"lbl\">-5</text><rect class=\"box\" x=\"254\" y=\"70\" width=\"78\" height=\"58\" rx=\"8\"/><text x=\"293\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:19px;font-weight:800\">T</text><text x=\"293\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">2</text><text x=\"293\" y=\"154\" text-anchor=\"middle\" class=\"lbl\">-4</text><rect class=\"box box--dark\" x=\"346\" y=\"70\" width=\"78\" height=\"58\" rx=\"8\"/><text x=\"385\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:19px;font-weight:800\">H</text><text x=\"385\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">3</text><text x=\"385\" y=\"154\" text-anchor=\"middle\" class=\"lbl\">-3</text><rect class=\"box\" x=\"438\" y=\"70\" width=\"78\" height=\"58\" rx=\"8\"/><text x=\"477\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:19px;font-weight:800\">O</text><text x=\"477\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">4</text><text x=\"477\" y=\"154\" text-anchor=\"middle\" class=\"lbl\">-2</text><rect class=\"box box--dark\" x=\"530\" y=\"70\" width=\"78\" height=\"58\" rx=\"8\"/><text x=\"569\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:19px;font-weight:800\">N</text><text x=\"569\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">5</text><text x=\"569\" y=\"154\" text-anchor=\"middle\" class=\"lbl\">-1</text><text x=\"350\" y=\"188\" text-anchor=\"middle\" class=\"lbl\">Positive indexes start at 0; negative indexes count backward from -1</text></svg>\n<h4>Length with len()</h4><p><code>len()</code> counts every character, including spaces and punctuation.</p><h4>Positive indexing</h4><p>Use square brackets to access one character. In <code>PYTHON</code>, P is at index 0 and H is at index 3.</p><h4>Negative indexing</h4><p><code>-1</code> always means the final character, <code>-2</code> means the second-last character, and so on.</p><div class=\"callout\"><strong>Index safety.</strong> Asking for an index outside the available positions raises <code>IndexError</code>.</div>\n<h4>Count and inspect</h4><pre><code>word = \"Apple pie\"\nprint(len(word))\nprint(word[0])\nprint(word[-1])</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>word = \"Python\"\nprint(word[2 + 2])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">h</button><button data-o=\"1\">o</button><button data-o=\"2\">n</button><button data-o=\"3\">An error</button></div><p class=\"w__why\">2 + 2 is 4, and index 4 contains the letter o.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >word</button><button >[</button><button data-bad>6</button><button >]</button></div><p class=\"w__why\">PYTHON has valid positive indexes 0 through 5. Index 6 is outside the string.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>[0]</code></button><button data-pair=\"p1\"><code>[-1]</code></button><button data-pair=\"p2\"><code>len(text)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">number of characters</button><button data-pair=\"p1\">last character</button><button data-pair=\"p0\">first character</button></div></div><p class=\"w__why\">Indexing selects a position; len reports the total size.</p></div>\n",
      "mcqs": [
        {
          "q": "Which function counts string characters?",
          "options": [
            "size()",
            "length()",
            "len()",
            "count()"
          ],
          "answer": 2,
          "why": "len() returns the sequence length."
        },
        {
          "q": "What index belongs to the first character?",
          "options": [
            "1",
            "0",
            "-1",
            "first"
          ],
          "answer": 1,
          "why": "Python starts at 0."
        },
        {
          "q": "Which index safely selects the final character?",
          "options": [
            "[100]",
            "[0]",
            "[-1]",
            "[last]"
          ],
          "answer": 2,
          "why": "-1 counts from the end."
        },
        {
          "q": "What else does len() count?",
          "options": [
            "Only letters",
            "Spaces and punctuation too",
            "Only words",
            "Only vowels"
          ],
          "answer": 1,
          "why": "Every character contributes to the length."
        }
      ],
      "tasks": [
        {
          "id": "u3t02p01",
          "kind": "code",
          "title": "Length tester",
          "brief": "Print the length of <code>I love programming in Python!</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "29"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len()"
            }
          ],
          "level": "Level 1 - Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use len()",
            "Expected output begins with: 29"
          ]
        },
        {
          "id": "u3t02p02",
          "kind": "code",
          "title": "First initial",
          "brief": "Use positive indexing to print B from Batman.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "B"
            },
            {
              "type": "sourceIncludes",
              "value": "[0]",
              "message": "Use index 0"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index 0",
            "Expected output begins with: B"
          ]
        },
        {
          "id": "u3t02p03",
          "kind": "code",
          "title": "Secret letter",
          "brief": "Use indexing to print m from Batman.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "m"
            },
            {
              "type": "sourceIncludes",
              "value": "[3]",
              "message": "Use index 3"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index 3",
            "Expected output begins with: m"
          ]
        },
        {
          "id": "u3t02p04",
          "kind": "code",
          "title": "The caboose",
          "brief": "Use negative indexing to print the last letter of Supercalifragilisticexpialidocious.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "s"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1]",
              "message": "Use index -1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index -1",
            "Expected output begins with: s"
          ]
        },
        {
          "id": "u3t02p05",
          "kind": "code",
          "title": "Second-last seat",
          "brief": "Print the second-last character of PYTHON.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "O"
            },
            {
              "type": "sourceIncludes",
              "value": "[-2]",
              "message": "Use index -2"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index -2",
            "Expected output begins with: O"
          ]
        },
        {
          "id": "u3t02p06",
          "kind": "code",
          "title": "Mini build - index report",
          "brief": "For word PYTHON, print exactly: Length: 6, First: P, Last: N.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Length: 6\nFirst: P\nLast: N"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len()"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1]",
              "message": "Use negative indexing"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use len()",
            "Expected output begins with: Length: 6"
          ]
        }
      ]
    },
    {
      "id": "u3t03",
      "title": "Strings - Slicing and Immutability",
      "summary": "Extract subsequences and rebuild text without illegal item assignment.",
      "notebookLM": "",
      "notes": "\n<h4>Strings Part 3 - Slicing and Immutability</h4>\n<p>The source explains start-stop-step slicing, blank-boundary shortcuts, and string immutability.</p>\n<h4>The real-world analogy: Slicing a loaf of bread</h4>\n<p>An index selects one crumb. A slice takes a continuous piece. The original string remains unchanged because strings are immutable.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 205\" role=\"img\" aria-label=\"A string slice selects items from the start index up to but not including the stop index\"><rect class=\"box box--dark\" x=\"38\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"70\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">S</text><text x=\"70\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">0</text><rect class=\"box box--dark\" x=\"116\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"148\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">U</text><text x=\"148\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">1</text><rect class=\"box box--dark\" x=\"194\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"226\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">P</text><text x=\"226\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">2</text><rect class=\"box box--dark\" x=\"272\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"304\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">E</text><text x=\"304\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">3</text><rect class=\"box box--dark\" x=\"350\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"382\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">R</text><text x=\"382\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">4</text><rect class=\"box\" x=\"428\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"460\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:18px\">M</text><text x=\"460\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">5</text><rect class=\"box\" x=\"506\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"538\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:18px\">A</text><text x=\"538\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">6</text><rect class=\"box\" x=\"584\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"616\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:18px\">N</text><text x=\"616\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">7</text><path class=\"accent\" d=\"M38 145 H414\" stroke-width=\"7\"><animate attributeName=\"stroke-width\" values=\"4;9;4\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><text x=\"350\" y=\"184\" text-anchor=\"middle\" class=\"lbl\">The slice includes index 0 and stops before index 5</text></svg>\n<h4>The slicing formula</h4><p><code>[start:stop:step]</code> begins at start, stops just before stop, and moves by step. Leaving start blank begins at 0. Leaving stop blank continues to the end.</p><h4>Immutability</h4><p>You cannot assign a new character to <code>name[0]</code>. To transform text, build a new string by joining literals and slices.</p><pre><code>name = \"Cat\"\nnew_name = \"B\" + name[1:]\nprint(new_name)   # Bat</code></pre>\n<h4>Take a slice</h4><pre><code>word = \"SUPERMAN\"\nprint(word[0:5])\nprint(word[5:])</code></pre><h4>Use a step</h4><pre><code>alphabet = \"ABCDEFGH\"\nprint(alphabet[0:8:2])</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>word = \"PYTHON\"\nprint(word[2:5])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">YTH</button><button data-o=\"1\">THO</button><button data-o=\"2\">THON</button><button data-o=\"3\">PYT</button></div><p class=\"w__why\">The slice starts at T (index 2) and stops before index 5.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >name</button><button >[0]</button><button data-bad>=</button><button >\"B\"</button></div><p class=\"w__why\">Strings do not support item assignment. Build a new string instead.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>[:4]</code></button><button data-pair=\"p1\"><code>[4:]</code></button><button data-pair=\"p2\"><code>[::2]</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">every second character</button><button data-pair=\"p1\">index 4 through the end</button><button data-pair=\"p0\">start through index 3</button></div></div><p class=\"w__why\">Blank slice boundaries are shortcuts; the step controls skipping.</p></div>\n",
      "mcqs": [
        {
          "q": "In word[2:6], is index 6 included?",
          "options": [
            "Yes",
            "No, Python stops before it",
            "Only for strings",
            "It crashes"
          ],
          "answer": 1,
          "why": "The stop boundary is exclusive."
        },
        {
          "q": "What does word[:4] do?",
          "options": [
            "Starts at the end",
            "Starts at index 0",
            "Skips four characters",
            "Raises an error"
          ],
          "answer": 1,
          "why": "A blank start defaults to 0."
        },
        {
          "q": "What does string immutability mean?",
          "options": [
            "Strings contain no numbers",
            "Characters cannot be replaced in place",
            "Strings cannot be printed",
            "Strings are invisible"
          ],
          "answer": 1,
          "why": "Create a new string for changes."
        },
        {
          "q": "What does a step of 2 do?",
          "options": [
            "Repeats text",
            "Selects every second character",
            "Stops at 2",
            "Deletes two characters"
          ],
          "answer": 1,
          "why": "The step controls how far the slice moves each time."
        }
      ],
      "tasks": [
        {
          "id": "u3t03p01",
          "kind": "code",
          "title": "Basic slice",
          "brief": "Extract THO from PYTHON.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "THO"
            },
            {
              "type": "sourceIncludes",
              "value": "[2:5]",
              "message": "Use the slice [2:5]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the slice [2:5]",
            "Expected output begins with: THO"
          ]
        },
        {
          "id": "u3t03p02",
          "kind": "code",
          "title": "Start shortcut",
          "brief": "Extract I love from I love programming.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "I love"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[:6\\]",
              "message": "Use a blank-start slice"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a blank-start slice",
            "Expected output begins with: I love"
          ]
        },
        {
          "id": "u3t03p03",
          "kind": "code",
          "title": "End shortcut",
          "brief": "Extract Man from Spider-Man.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Man"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[7:\\]",
              "message": "Use a blank-end slice"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a blank-end slice",
            "Expected output begins with: Man"
          ]
        },
        {
          "id": "u3t03p04",
          "kind": "code",
          "title": "Skip trick",
          "brief": "Print every other letter of ABCDEFGH.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ACEG"
            },
            {
              "type": "sourceIncludes",
              "value": "::2",
              "message": "Use a step of 2"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a step of 2",
            "Expected output begins with: ACEG"
          ]
        },
        {
          "id": "u3t03p05",
          "kind": "code",
          "title": "Immutability repair",
          "brief": "Create Jello, build Hello without assigning to an index, and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello"
            },
            {
              "type": "sourceIncludes",
              "value": "word[1:]",
              "message": "Reuse the slice from index 1"
            },
            {
              "type": "sourceRegex",
              "pattern": "[\"']H[\"']\\s*\\+",
              "message": "Join H to the slice"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Reuse the slice from index 1",
            "Expected output begins with: Hello"
          ]
        },
        {
          "id": "u3t03p06",
          "kind": "code",
          "title": "Mini build - code decoder",
          "brief": "Use slicing on Hxexlxlxox to print Hello.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello"
            },
            {
              "type": "sourceIncludes",
              "value": "::2",
              "message": "Use a slicing step"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a slicing step",
            "Expected output begins with: Hello"
          ]
        }
      ]
    },
    {
      "id": "u3t04",
      "title": "Strings - Comparing, Searching and Traversal",
      "summary": "Compare text, test membership, loop through characters and count matches.",
      "notebookLM": "",
      "notes": "\n<h4>Strings Part 4 - Comparing, Membership and Traversal</h4>\n<p>The source introduces lexicographical comparison, in/not in, string traversal, and accumulator-based counting.</p>\n<h4>The real-world analogy: A dictionary and a search party</h4>\n<p>Lexicographical comparison follows character order. Membership asks whether smaller text occurs inside larger text. Traversal visits each character one at a time.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Strings support comparison, searching and traversal\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"91.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">compare</text><text x=\"91.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">characters</text><path class=\"arrow\" d=\"M164 85 H185\"/><circle cx=\"169\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"168;181;168\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"190\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"263.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">True / False</text><path class=\"arrow\" d=\"M336 85 H357\"/><circle cx=\"341\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"340;353;340\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"362\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"435.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">loop</text><text x=\"435.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">one character</text><path class=\"arrow\" d=\"M508 85 H529\"/><circle cx=\"513\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"512;525;512\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"534\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"607.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">update</text><text x=\"607.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">counter</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Strings support comparison, searching and traversal</text></svg>\n<h4>Lexicographical order</h4><p>Python compares the first different character. If the first characters match, it checks the next ones. Case also matters because Python ultimately compares character codes.</p><h4>Membership operators</h4><p><code>in</code> and <code>not in</code> return Boolean answers.</p><h4>Traversal and counting</h4><p>A <code>for</code> loop pulls one character at a time. Combine it with an accumulator to count letters or vowels.</p>\n<h4>Membership</h4><pre><code>sentence = \"The quick brown fox\"\nprint(\"fox\" in sentence)\nprint(\"cat\" not in sentence)</code></pre><h4>Vowel counter</h4><pre><code>word = \"education\"\ncount = 0\nfor letter in word:\n    if letter in \"aeiou\":\n        count += 1\nprint(count)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>print(\"Monkey\" &gt; \"Elephant\")</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">False</button><button data-o=\"2\">An error</button></div><p class=\"w__why\">M comes after E, so Monkey is lexicographically greater.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >for</button><button >letter</button><button data-bad>of</button><button >word:</button></div><p class=\"w__why\">Python uses the keyword in, not of, to traverse a string.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>in</code></button><button data-pair=\"p1\"><code>not in</code></button><button data-pair=\"p2\"><code>for letter in word</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">visit every character</button><button data-pair=\"p1\">substring is absent</button><button data-pair=\"p0\">substring exists</button></div></div><p class=\"w__why\">Membership answers a question; traversal repeats an action.</p></div>\n",
      "mcqs": [
        {
          "q": "How does Python compare strings?",
          "options": [
            "By word length only",
            "Lexicographically",
            "Randomly",
            "By vowel count"
          ],
          "answer": 1,
          "why": "It checks character order."
        },
        {
          "q": "Which operator searches for z inside pizza?",
          "options": [
            "has",
            "==",
            "inside",
            "in"
          ],
          "answer": 3,
          "why": "in checks membership."
        },
        {
          "q": "What does a for loop over a string produce?",
          "options": [
            "Words only",
            "One character per iteration",
            "Ten iterations always",
            "A TypeError"
          ],
          "answer": 1,
          "why": "Strings are iterable character sequences."
        },
        {
          "q": "What is the accumulator pattern?",
          "options": [
            "A counter updated during traversal",
            "A quote style",
            "A sorting method",
            "A file path"
          ],
          "answer": 0,
          "why": "Counters begin with an initial value and update in a loop."
        }
      ],
      "tasks": [
        {
          "id": "u3t04p01",
          "kind": "code",
          "title": "Alphabet race",
          "brief": "Print whether Monkey is greater than Elephant.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": ">",
              "message": "Use a comparison operator"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a comparison operator",
            "Expected output begins with: True"
          ]
        },
        {
          "id": "u3t04p02",
          "kind": "code",
          "title": "Search party",
          "brief": "If amazing occurs in the supplied sentence, print Yes it is!.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Yes it is!"
            },
            {
              "type": "sourceIncludes",
              "value": " in ",
              "message": "Use the in operator"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Use an if statement"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the in operator",
            "Expected output begins with: Yes it is!"
          ]
        },
        {
          "id": "u3t04p03",
          "kind": "code",
          "title": "Basic traversal",
          "brief": "Loop through CODING and print each letter followed by a dash.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "C-\nO-\nD-\nI-\nN-\nG-"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+\\w+\\s+in",
              "message": "Traverse with a for loop"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Traverse with a for loop",
            "Expected output begins with: C-"
          ]
        },
        {
          "id": "u3t04p04",
          "kind": "code",
          "title": "Count the e",
          "brief": "Count the letter e in education.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1"
            },
            {
              "type": "sourceRegex",
              "pattern": "count\\s*=\\s*0",
              "message": "Start an accumulator at 0"
            },
            {
              "type": "sourceRegex",
              "pattern": "count\\s*\\+=\\s*1",
              "message": "Increase the counter"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start an accumulator at 0",
            "Expected output begins with: 1"
          ]
        },
        {
          "id": "u3t04p05",
          "kind": "code",
          "title": "All vowel counter",
          "brief": "Count all vowels in education.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5"
            },
            {
              "type": "sourceIncludes",
              "value": "aeiou",
              "message": "Use the vowel group"
            },
            {
              "type": "sourceIncludes",
              "value": " in ",
              "message": "Use membership"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the vowel group",
            "Expected output begins with: 5"
          ]
        },
        {
          "id": "u3t04p06",
          "kind": "code",
          "title": "Mini build - letter report",
          "brief": "For banana, print Length: 6, Contains ana: True, a count: 3.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Length: 6\nContains ana: True\na count: 3"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len()"
            },
            {
              "type": "sourceIncludes",
              "value": " in ",
              "message": "Use membership"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use len()",
            "Expected output begins with: Length: 6"
          ]
        }
      ]
    },
    {
      "id": "u3cp01",
      "title": "Revision Checkpoint 1 - String Foundations",
      "summary": "Consolidate quotes, indexing, slicing, membership and traversal.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 1 - String Foundations</h4>\n<p>This practice checkpoint consolidates the first four source sections before the method chapters.</p>\n<h4>The real-world analogy: A text inspection desk</h4>\n<p>This checkpoint combines quote handling, indexes, slices, membership and traversal into one connected workflow.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"A reliable string workflow\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"63.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">create</text><path class=\"arrow\" d=\"M108 85 H129\"/><circle cx=\"113\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"112;125;112\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"134\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"179.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">measure</text><path class=\"arrow\" d=\"M224 85 H245\"/><circle cx=\"229\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"228;241;228\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"250\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"295.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">index</text><path class=\"arrow\" d=\"M340 85 H361\"/><circle cx=\"345\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"344;357;344\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"366\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"411.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">slice</text><path class=\"arrow\" d=\"M456 85 H477\"/><circle cx=\"461\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"460;473;460\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"482\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"527.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">search</text><path class=\"arrow\" d=\"M572 85 H593\"/><circle cx=\"577\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"576;589;576\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"598\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"643.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">traverse</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">A reliable string workflow</text></svg>\n<h4>Checkpoint strategy</h4><ol><li>Create the string correctly.</li><li>Inspect its length and positions.</li><li>Slice the required section.</li><li>Search for a character or word.</li><li>Traverse only when every character must be examined.</li></ol><div class=\"callout\"><strong>Dry-run habit.</strong> Write the index numbers above the text before slicing. It prevents most off-by-one mistakes.</div>\n<h4>One connected example</h4><pre><code>text = \"Python Programming\"\nprint(len(text))\nprint(text[0])\nprint(text[-1])\nprint(text[:6])\nprint(\"gram\" in text)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>text = \"BANANA\"\nprint(text[1:5:2])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">AN</button><button data-o=\"1\">AA</button><button data-o=\"2\">BN</button><button data-o=\"3\">N</button></div><p class=\"w__why\">Indexes 1 and 3 are both A.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >text</button><button >[</button><button >1:4</button><button >]</button><button data-bad>=</button><button >\"abc\"</button></div><p class=\"w__why\">A slice may be read, but string positions cannot be assigned to.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\">zero-based index</button><button data-pair=\"p1\">exclusive stop</button><button data-pair=\"p2\">immutable</button></div><div class=\"w-match__col\"><button data-pair=\"p2\">build a new string</button><button data-pair=\"p1\">stop position is not included</button><button data-pair=\"p0\">first position is 0</button></div></div><p class=\"w__why\">These three rules explain most string behaviour.</p></div>\n",
      "mcqs": [
        {
          "q": "Which index selects the final character?",
          "options": [
            "0",
            "1",
            "-1",
            "len"
          ],
          "answer": 2,
          "why": "-1 counts backward."
        },
        {
          "q": "What does [1:4] include?",
          "options": [
            "Indexes 1,2,3",
            "Indexes 1,2,3,4",
            "Only 4",
            "Everything"
          ],
          "answer": 0,
          "why": "The stop is excluded."
        },
        {
          "q": "Which test returns True when text contains py?",
          "options": [
            "text.has(\"py\")",
            "\"py\" in text",
            "text == \"py\"",
            "find only"
          ],
          "answer": 1,
          "why": "in is the membership operator."
        },
        {
          "q": "Why build a new string when changing one character?",
          "options": [
            "Strings are immutable",
            "Strings are too long",
            "Indexes start at 1",
            "Loops cannot read strings"
          ],
          "answer": 0,
          "why": "Item assignment is not supported."
        }
      ],
      "tasks": [
        {
          "id": "u3cp01p01",
          "kind": "code",
          "title": "Checkpoint - profile line",
          "brief": "Print <code>Name:\tMira</code> using a tab.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Name:\tMira"
            },
            {
              "type": "sourceIncludes",
              "value": "\\t",
              "message": "Use a tab escape"
            }
          ],
          "level": "Revision Checkpoint - Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a tab escape",
            "Expected output begins with: Name:\tMira"
          ]
        },
        {
          "id": "u3cp01p02",
          "kind": "code",
          "title": "Checkpoint - edge characters",
          "brief": "For DATA, print D and A on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "D\nA"
            },
            {
              "type": "sourceIncludes",
              "value": "[0]",
              "message": "Read the first character"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1]",
              "message": "Read the last character"
            }
          ],
          "level": "Revision Checkpoint - Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Read the first character",
            "Expected output begins with: D"
          ]
        },
        {
          "id": "u3cp01p03",
          "kind": "code",
          "title": "Checkpoint - middle slice",
          "brief": "Extract structure from data-structure-lab.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "structure"
            },
            {
              "type": "sourceIncludes",
              "value": "[5:14]",
              "message": "Use the correct slice"
            }
          ],
          "level": "Revision Checkpoint - Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the correct slice",
            "Expected output begins with: structure"
          ]
        },
        {
          "id": "u3cp01p04",
          "kind": "code",
          "title": "Checkpoint - unique vowel tally",
          "brief": "Count the vowels in AbhyasLab after converting to lowercase.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": ".lower()",
              "message": "Normalise the text"
            },
            {
              "type": "sourceIncludes",
              "value": "aeiou",
              "message": "Use the vowels"
            }
          ],
          "level": "Revision Checkpoint - Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Normalise the text",
            "Expected output begins with: 3"
          ]
        },
        {
          "id": "u3cp01p05",
          "kind": "code",
          "title": "Checkpoint mini build - text passport",
          "brief": "For Python, print exactly: PYTHON, Length: 6, First/Last: P/N, Reverse: nohtyP.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "PYTHON\nLength: 6\nFirst/Last: P/N\nReverse: nohtyP"
            },
            {
              "type": "sourceIncludes",
              "value": ".upper()",
              "message": "Use upper()"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Reverse with slicing"
            }
          ],
          "level": "Revision Checkpoint - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use upper()",
            "Expected output begins with: PYTHON"
          ]
        }
      ]
    },
    {
      "id": "u3t05",
      "title": "String Methods - find, index, count and replace",
      "summary": "Search for text, count occurrences and build corrected copies.",
      "notebookLM": "",
      "notes": "\n<h4>String Methods Part 1 - Search, Count and Replace</h4>\n<p>The source distinguishes find() from index(), then introduces count() and replace().</p>\n<h4>The real-world analogy: A word processor toolbar</h4>\n<p>String methods are tools attached to text with a dot. They help you search, count and create transformed copies.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Methods inspect or create transformed text\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">original</text><text x=\"74.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">string</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">.find()</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">.count()</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">.replace()</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">new</text><text x=\"626.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">string</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Methods inspect or create transformed text</text></svg>\n<h4>find() versus index()</h4><p>Both return the starting index of a substring. <code>find()</code> returns -1 when the text is missing. <code>index()</code> raises <code>ValueError</code>.</p><h4>count()</h4><p>Count a character or substring without writing a loop.</p><h4>replace()</h4><p>Create a new string where every selected old substring is replaced by new text. The original remains unchanged.</p>\n<h4>Search safely</h4><pre><code>message = \"Hello welcome to Python\"\nprint(message.find(\"welcome\"))\nprint(message.find(\"pizza\"))</code></pre><h4>Replace text</h4><pre><code>sentence = \"I love apples!\"\nprint(sentence.replace(\"apples\", \"pizza\"))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>word = \"banana\"\nprint(word.count(\"na\"))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">3</button><button data-o=\"3\">-1</button></div><p class=\"w__why\">The substring na appears twice.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >message</button><button >.</button><button data-bad>index(</button><button >\"pizza\"</button><button >)</button></div><p class=\"w__why\">index() is valid, but it raises ValueError when the text is absent. find() is safer when missing text is expected.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>find()</code></button><button data-pair=\"p1\"><code>index()</code></button><button data-pair=\"p2\"><code>replace()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">returns changed copy</button><button data-pair=\"p1\">missing raises ValueError</button><button data-pair=\"p0\">missing gives -1</button></div></div><p class=\"w__why\">The methods look similar but have different failure behaviour.</p></div>\n",
      "mcqs": [
        {
          "q": "What does find() return for missing text?",
          "options": [
            "Error",
            "-1",
            "False",
            "0"
          ],
          "answer": 1,
          "why": "find() uses -1 as the not-found result."
        },
        {
          "q": "How does index() differ?",
          "options": [
            "It searches backward",
            "It raises ValueError when missing",
            "It only finds numbers",
            "It returns False"
          ],
          "answer": 1,
          "why": "index() is strict."
        },
        {
          "q": "What does count() report?",
          "options": [
            "String length only",
            "Occurrences of a substring",
            "Spaces only",
            "The numeric sum"
          ],
          "answer": 1,
          "why": "count() counts matches."
        },
        {
          "q": "Does replace() mutate the original string?",
          "options": [
            "Yes",
            "No, it returns a new string",
            "Only for one match",
            "Only for letters"
          ],
          "answer": 1,
          "why": "Strings remain immutable."
        }
      ],
      "tasks": [
        {
          "id": "u3t05p01",
          "kind": "code",
          "title": "Hide and seek",
          "brief": "Find brown in The quick brown fox and print its index.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10"
            },
            {
              "type": "sourceIncludes",
              "value": ".find(",
              "message": "Use find()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use find()",
            "Expected output begins with: 10"
          ]
        },
        {
          "id": "u3t05p02",
          "kind": "code",
          "title": "Missing word",
          "brief": "Use find() to search for cat and print the result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "-1"
            },
            {
              "type": "sourceIncludes",
              "value": ".find(",
              "message": "Use find()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use find()",
            "Expected output begins with: -1"
          ]
        },
        {
          "id": "u3t05p03",
          "kind": "code",
          "title": "Letter counter",
          "brief": "Count s in Mississippi.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "4"
            },
            {
              "type": "sourceIncludes",
              "value": ".count(",
              "message": "Use count()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use count()",
            "Expected output begins with: 4"
          ]
        },
        {
          "id": "u3t05p04",
          "kind": "code",
          "title": "Typo fixer",
          "brief": "Replace hate with love in I hate programming!.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "I love programming!"
            },
            {
              "type": "sourceIncludes",
              "value": ".replace(",
              "message": "Use replace()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use replace()",
            "Expected output begins with: I love programming!"
          ]
        },
        {
          "id": "u3t05p05",
          "kind": "code",
          "title": "Space remover",
          "brief": "Remove all spaces from 100 200 300 using replace().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100200300"
            },
            {
              "type": "sourceIncludes",
              "value": ".replace(",
              "message": "Replace spaces with empty text"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Replace spaces with empty text",
            "Expected output begins with: 100200300"
          ]
        },
        {
          "id": "u3t05p06",
          "kind": "code",
          "title": "Mini build - search dashboard",
          "brief": "For banana bread, print first a index, a count, and a bread-to-cake replacement.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "First a: 1\na count: 4\nbanana cake"
            },
            {
              "type": "sourceIncludes",
              "value": ".find(",
              "message": "Use find()"
            },
            {
              "type": "sourceIncludes",
              "value": ".count(",
              "message": "Use count()"
            },
            {
              "type": "sourceIncludes",
              "value": ".replace(",
              "message": "Use replace()"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use find()",
            "Expected output begins with: First a: 1"
          ]
        }
      ]
    },
    {
      "id": "u3t06",
      "title": "String Methods - Case Conversion and Whitespace",
      "summary": "Standardise user text with case methods and edge trimming.",
      "notebookLM": "",
      "notes": "\n<h4>String Methods Part 2 - Case and Whitespace</h4>\n<p>The source explains upper, lower, title, capitalize, strip, lstrip, and rstrip.</p>\n<h4>The real-world analogy: Ironing a wrinkled shirt</h4>\n<p>User-entered text is often uneven. Case-changing and strip methods clean the edges and standardise presentation before data is stored or compared.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Clean the edges, then normalise the case\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"91.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">messy</text><text x=\"91.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">input</text><path class=\"arrow\" d=\"M164 85 H185\"/><circle cx=\"169\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"168;181;168\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"190\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"263.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">.strip()</text><path class=\"arrow\" d=\"M336 85 H357\"/><circle cx=\"341\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"340;353;340\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"362\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"435.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">.lower()</text><text x=\"435.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">or .title()</text><path class=\"arrow\" d=\"M508 85 H529\"/><circle cx=\"513\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"512;525;512\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"534\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"607.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">clean</text><text x=\"607.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">value</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Clean the edges, then normalise the case</text></svg>\n<h4>Changing case</h4><table><tr><th>Method</th><th>Result</th></tr><tr><td><code>upper()</code></td><td>all uppercase</td></tr><tr><td><code>lower()</code></td><td>all lowercase</td></tr><tr><td><code>title()</code></td><td>first letter of each word</td></tr><tr><td><code>capitalize()</code></td><td>first letter of the whole string</td></tr></table><h4>Trimming whitespace</h4><p><code>strip()</code> removes leading and trailing whitespace. <code>lstrip()</code> and <code>rstrip()</code> remove only one side. Internal spaces remain.</p>\n<h4>Normalise a name</h4><pre><code>name = \"  bRuCe wAyNe  \"\nclean = name.strip().title()\nprint(clean)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>name = \"bRuCe wAyNe\"\nprint(name.capitalize())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Bruce Wayne</button><button data-o=\"1\">Bruce wayne</button><button data-o=\"2\">BRUCE WAYNE</button><button data-o=\"3\">bruce wayne</button></div><p class=\"w__why\">capitalize() changes only the first character and lowercases the rest.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >user</button><button >.</button><button >strip</button><button data-bad>[</button><button >]</button></div><p class=\"w__why\">Methods are called with parentheses, so use strip(), not strip[].</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>title()</code></button><button data-pair=\"p1\"><code>capitalize()</code></button><button data-pair=\"p2\"><code>rstrip()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">remove right-edge whitespace</button><button data-pair=\"p1\">Sentence style</button><button data-pair=\"p0\">Book Title Style</button></div></div><p class=\"w__why\">Choose the method that matches the intended cleanup.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method capitalises every word?",
          "options": [
            "upper()",
            "capitalize()",
            "title()",
            "lower()"
          ],
          "answer": 2,
          "why": "title() uses title case."
        },
        {
          "q": "How do title() and capitalize() differ?",
          "options": [
            "No difference",
            "capitalize affects only the beginning of the full string",
            "title makes uppercase only",
            "capitalize removes spaces"
          ],
          "answer": 1,
          "why": "title applies word by word."
        },
        {
          "q": "What does strip() remove?",
          "options": [
            "All vowels",
            "Every space including middle ones",
            "Whitespace at both edges",
            "The entire string"
          ],
          "answer": 2,
          "why": "Internal spaces remain."
        },
        {
          "q": "Which method removes only left-edge whitespace?",
          "options": [
            "strip()",
            "lstrip()",
            "rstrip()",
            "left()"
          ],
          "answer": 1,
          "why": "l means left."
        }
      ],
      "tasks": [
        {
          "id": "u3t06p01",
          "kind": "code",
          "title": "The screamer",
          "brief": "Convert quiet down to uppercase.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "QUIET DOWN"
            },
            {
              "type": "sourceIncludes",
              "value": ".upper()",
              "message": "Use upper()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use upper()",
            "Expected output begins with: QUIET DOWN"
          ]
        },
        {
          "id": "u3t06p02",
          "kind": "code",
          "title": "The whisperer",
          "brief": "Convert I AM SO MAD to lowercase.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "i am so mad"
            },
            {
              "type": "sourceIncludes",
              "value": ".lower()",
              "message": "Use lower()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use lower()",
            "Expected output begins with: i am so mad"
          ]
        },
        {
          "id": "u3t06p03",
          "kind": "code",
          "title": "Book title",
          "brief": "Format harry potter and the goblet of fire with title().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Harry Potter And The Goblet Of Fire"
            },
            {
              "type": "sourceIncludes",
              "value": ".title()",
              "message": "Use title()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use title()",
            "Expected output begins with: Harry Potter And The Goblet Of Fire"
          ]
        },
        {
          "id": "u3t06p04",
          "kind": "code",
          "title": "Messy user",
          "brief": "Remove only the leading spaces from   Alice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Alice"
            },
            {
              "type": "sourceIncludes",
              "value": ".lstrip()",
              "message": "Use lstrip()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use lstrip()",
            "Expected output begins with: Alice"
          ]
        },
        {
          "id": "u3t06p05",
          "kind": "code",
          "title": "Ultimate cleaner",
          "brief": "Clean and title-case   sPoNgEbOb  .",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Spongebob"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Strip the edges"
            },
            {
              "type": "sourceIncludes",
              "value": ".title()",
              "message": "Fix the capitalisation"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Strip the edges",
            "Expected output begins with: Spongebob"
          ]
        },
        {
          "id": "u3t06p06",
          "kind": "code",
          "title": "Mini build - account normaliser",
          "brief": "For <code>  aLiCe joHNSON  </code>, print Username: alice johnson and Display: Alice Johnson.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Username: alice johnson\nDisplay: Alice Johnson"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Trim the input"
            },
            {
              "type": "sourceIncludes",
              "value": ".lower()",
              "message": "Build the username"
            },
            {
              "type": "sourceIncludes",
              "value": ".title()",
              "message": "Build the display name"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Trim the input",
            "Expected output begins with: Username: alice johnson"
          ]
        }
      ]
    },
    {
      "id": "u3t07",
      "title": "String Methods - Validation, split, join and string Module",
      "summary": "Validate text and move cleanly between strings and lists.",
      "notebookLM": "",
      "notes": "\n<h4>String Methods Part 3 - Validation, Split and Join</h4>\n<p>The source covers startswith, endswith, isalpha, isdigit, isalnum, split, join, and the string module.</p>\n<h4>The real-world analogy: A security checkpoint and a kitchen knife</h4>\n<p>Validation methods inspect what text contains. split() chops text into a list, while join() glues list items into one string.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Validate, split, transform and join\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">raw</text><text x=\"74.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">text</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">validate</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">split</text><text x=\"350.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">into list</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">transform</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">join</text><text x=\"626.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">to text</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Validate, split, transform and join</text></svg>\n<h4>Beginning and ending checks</h4><p><code>startswith()</code> and <code>endswith()</code> return Boolean values.</p><h4>Character validation</h4><table><tr><th>Method</th><th>True when</th></tr><tr><td><code>isalpha()</code></td><td>letters only</td></tr><tr><td><code>isdigit()</code></td><td>digits only</td></tr><tr><td><code>isalnum()</code></td><td>letters and digits only</td></tr></table><h4>Chopping and gluing</h4><p><code>split()</code> converts a string to a list. <code>join()</code> combines a sequence of strings using the text before the dot as glue.</p><h4>The string module</h4><p><code>import string</code> provides constants such as <code>string.punctuation</code>.</p>\n<h4>Validate before conversion</h4><pre><code>age = \"24\"\nif age.isdigit():\n    print(int(age) + 10)</code></pre><h4>Split and join</h4><pre><code>words = \"Apples Oranges Bananas\".split()\nprint(\"-\".join(words))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>password = \"secret123\"\nprint(password.isalnum())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">False</button><button data-o=\"2\">An error</button></div><p class=\"w__why\">The text contains only letters and digits.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >words</button><button data-bad>.</button><button >join(</button><button >\"-\"</button><button >)</button></div><p class=\"w__why\">join() belongs to the separator string: \"-\".join(words).</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>isdigit()</code></button><button data-pair=\"p1\"><code>split()</code></button><button data-pair=\"p2\"><code>\", \".join(words)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">list to comma-separated string</button><button data-pair=\"p1\">string to list</button><button data-pair=\"p0\">digits only</button></div></div><p class=\"w__why\">Inspection methods return Booleans; split and join change representation.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method validates digits only?",
          "options": [
            "isalpha()",
            "isdigit()",
            "isnumber()",
            "isalnum()"
          ],
          "answer": 1,
          "why": "isdigit() checks digit characters."
        },
        {
          "q": "What does split() normally return?",
          "options": [
            "A string",
            "A list of pieces",
            "A dictionary",
            "A number"
          ],
          "answer": 1,
          "why": "split turns text into a list."
        },
        {
          "q": "Which method glues words together?",
          "options": [
            "combine()",
            "split()",
            "glue()",
            "join()"
          ],
          "answer": 3,
          "why": "join combines string items."
        },
        {
          "q": "What does isalnum() reject?",
          "options": [
            "Letters",
            "Digits",
            "Spaces and punctuation",
            "All text"
          ],
          "answer": 2,
          "why": "Only letters and digits are accepted."
        }
      ],
      "tasks": [
        {
          "id": "u3t07p01",
          "kind": "code",
          "title": "Website checker",
          "brief": "Print whether https://www.wikipedia.org ends with .com.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": ".endswith(",
              "message": "Use endswith()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use endswith()",
            "Expected output begins with: False"
          ]
        },
        {
          "id": "u3t07p02",
          "kind": "code",
          "title": "Security guard",
          "brief": "Check whether secret123 is alphanumeric.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": ".isalnum()",
              "message": "Use isalnum()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use isalnum()",
            "Expected output begins with: True"
          ]
        },
        {
          "id": "u3t07p03",
          "kind": "code",
          "title": "Ninja chef",
          "brief": "Split Milk Bread Eggs Cheese and print the list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Milk', 'Bread', 'Eggs', 'Cheese']"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Use split()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use split()",
            "Expected output begins with: ['Milk', 'Bread', 'Eggs', 'Cheese']"
          ]
        },
        {
          "id": "u3t07p04",
          "kind": "code",
          "title": "Super glue",
          "brief": "Join Red, Green and Blue with comma-space.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Red, Green, Blue"
            },
            {
              "type": "sourceIncludes",
              "value": "\", \".join",
              "message": "Use comma-space as the join glue"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use comma-space as the join glue",
            "Expected output begins with: Red, Green, Blue"
          ]
        },
        {
          "id": "u3t07p05",
          "kind": "code",
          "title": "ZIP validator",
          "brief": "For zip_code 462001, print Zip code accepted only when isdigit() is true.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Zip code accepted"
            },
            {
              "type": "sourceIncludes",
              "value": ".isdigit()",
              "message": "Validate the digits"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Use a condition"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Validate the digits",
            "Expected output begins with: Zip code accepted"
          ]
        },
        {
          "id": "u3t07p06",
          "kind": "code",
          "title": "Mini build - safe tag builder",
          "brief": "Clean <code>  python data lab  </code>, split it, title each word, and join with hyphens.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Python-Data-Lab"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Trim the input"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Split the words"
            },
            {
              "type": "sourceIncludes",
              "value": ".join(",
              "message": "Join the result"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Trim the input",
            "Expected output begins with: Python-Data-Lab"
          ]
        }
      ]
    },
    {
      "id": "u3cp02",
      "title": "Revision Checkpoint 2 - String Methods",
      "summary": "Combine cleaning, validation, searching, splitting and joining.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 2 - String Methods</h4>\n<p>This checkpoint combines all string methods from the source into practical cleaning workflows.</p>\n<h4>The real-world analogy: A data-cleaning pipeline</h4>\n<p>Real programs rarely use one method alone. They chain methods to clean, inspect, transform and format text.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"A reusable text-cleaning pipeline\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">strip</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">lower</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">replace</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">split</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">join</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">A reusable text-cleaning pipeline</text></svg>\n<h4>Method pipeline</h4><ol><li>Trim accidental edge whitespace.</li><li>Normalise case.</li><li>Validate the content.</li><li>Search, count or replace.</li><li>Split into pieces or join the final result.</li></ol><p>Each string method returns a value. Store that value or continue chaining another method.</p>\n<h4>Chained cleanup</h4><pre><code>raw = \"  PYTHON,DATA,LAB  \"\nclean = raw.strip().lower().replace(\",\", \" \")\nwords = clean.split()\nprint(\"-\".join(words))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>text = \"  PyThOn  \"\nprint(text.strip().lower())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">python</button><button data-o=\"1\">  python  </button><button data-o=\"2\">Python</button><button data-o=\"3\">PYTHON</button></div><p class=\"w__why\">strip removes the edges and lower normalises the case.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >text</button><button >.</button><button >find(</button><button >\"x\"</button><button >)</button><button >==</button><button data-bad>0</button></div><p class=\"w__why\">A missing find result is -1, not 0. Index 0 means the match begins at the first character.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>find()</code></button><button data-pair=\"p1\"><code>count()</code></button><button data-pair=\"p2\"><code>replace()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">new transformed string</button><button data-pair=\"p1\">number of matches</button><button data-pair=\"p0\">position or -1</button></div></div><p class=\"w__why\">Search, count and replacement answer different questions.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method chain cleans both edges and case?",
          "options": [
            "strip().lower()",
            "split().count()",
            "join().find()",
            "index().upper"
          ],
          "answer": 0,
          "why": "Both methods return strings, so they can be chained."
        },
        {
          "q": "What result means find() failed?",
          "options": [
            "0",
            "False",
            "-1",
            "None"
          ],
          "answer": 2,
          "why": "-1 is the not-found marker."
        },
        {
          "q": "Which operation converts words into a list?",
          "options": [
            "join",
            "split",
            "replace",
            "title"
          ],
          "answer": 1,
          "why": "split returns pieces."
        },
        {
          "q": "Which method checks a .org suffix?",
          "options": [
            "startswith",
            "endswith",
            "isdigit",
            "find only"
          ],
          "answer": 1,
          "why": "endswith checks the ending."
        }
      ],
      "tasks": [
        {
          "id": "u3cp02p01",
          "kind": "code",
          "title": "Checkpoint - clean name",
          "brief": "Convert <code>  aLICE SMITH  </code> to Alice Smith.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Alice Smith"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Trim whitespace"
            },
            {
              "type": "sourceIncludes",
              "value": ".title()",
              "message": "Use title case"
            }
          ],
          "level": "Revision Checkpoint - Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Trim whitespace",
            "Expected output begins with: Alice Smith"
          ]
        },
        {
          "id": "u3cp02p02",
          "kind": "code",
          "title": "Checkpoint - safe search",
          "brief": "Search for Java in Python and Java, then print the starting index.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "11"
            },
            {
              "type": "sourceIncludes",
              "value": ".find(",
              "message": "Use find()"
            }
          ],
          "level": "Revision Checkpoint - Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use find()",
            "Expected output begins with: 11"
          ]
        },
        {
          "id": "u3cp02p03",
          "kind": "code",
          "title": "Checkpoint - validation",
          "brief": "For user42, print Letters only: False and Alphanumeric: True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Letters only: False\nAlphanumeric: True"
            },
            {
              "type": "sourceIncludes",
              "value": ".isalpha()",
              "message": "Check letters only"
            },
            {
              "type": "sourceIncludes",
              "value": ".isalnum()",
              "message": "Check letters and digits"
            }
          ],
          "level": "Revision Checkpoint - Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Check letters only",
            "Expected output begins with: Letters only: False"
          ]
        },
        {
          "id": "u3cp02p04",
          "kind": "code",
          "title": "Checkpoint - CSV words",
          "brief": "Turn red,green,blue into Red | Green | Blue.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Red | Green | Blue"
            },
            {
              "type": "sourceIncludes",
              "value": ".split(",
              "message": "Split on commas"
            },
            {
              "type": "sourceIncludes",
              "value": ".title()",
              "message": "Title-case the words"
            },
            {
              "type": "sourceIncludes",
              "value": "join(",
              "message": "Join with the separator"
            }
          ],
          "level": "Revision Checkpoint - Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Split on commas",
            "Expected output begins with: Red | Green | Blue"
          ]
        },
        {
          "id": "u3cp02p05",
          "kind": "code",
          "title": "Checkpoint mini build - username maker",
          "brief": "For <code>  Ada Lovelace  </code>, print display name and username ada_lovelace.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Display: Ada Lovelace\nUsername: ada_lovelace"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Trim the input"
            },
            {
              "type": "sourceIncludes",
              "value": ".lower()",
              "message": "Lowercase the username"
            },
            {
              "type": "sourceIncludes",
              "value": ".replace(",
              "message": "Replace the space"
            }
          ],
          "level": "Revision Checkpoint - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Trim the input",
            "Expected output begins with: Display: Ada Lovelace"
          ]
        }
      ]
    },
    {
      "id": "u3t08",
      "title": "Arrays - Introduction, Type Codes and Access",
      "summary": "Create typed arrays and access values with familiar indexing rules.",
      "notebookLM": "",
      "notes": "\n<h4>Arrays Part 1 - Introduction and Creation</h4>\n<p>The source compares arrays and lists, explains same-type storage, imports array as arr, introduces i/d type codes, and accesses elements.</p>\n<h4>The real-world analogy: A pill organiser versus a backpack</h4>\n<p>A list is a flexible backpack. An array is a strict pill organiser: every item must use the same type, which can improve memory efficiency for large numeric collections.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"An array is a typed, ordered numeric sequence\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"91.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">import</text><text x=\"91.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">array</text><path class=\"arrow\" d=\"M164 85 H185\"/><circle cx=\"169\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"168;181;168\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"190\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"263.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">choose</text><text x=\"263.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">type code</text><path class=\"arrow\" d=\"M336 85 H357\"/><circle cx=\"341\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"340;353;340\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"362\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"435.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">store same</text><text x=\"435.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">data type</text><path class=\"arrow\" d=\"M508 85 H529\"/><circle cx=\"513\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"512;525;512\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"534\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"607.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">index</text><text x=\"607.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">values</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">An array is a typed, ordered numeric sequence</text></svg>\n<h4>Import the array toolbox</h4><p>Use <code>import array as arr</code>. The alias keeps later code short.</p><h4>Type codes</h4><table><tr><th>Code</th><th>Meaning</th></tr><tr><td><code>'i'</code></td><td>signed integers</td></tr><tr><td><code>'d'</code></td><td>double-precision floating-point numbers</td></tr></table><h4>Accessing values</h4><p>Arrays use the same zero-based and negative indexing rules as strings and lists.</p>\n<h4>Integer array</h4><pre><code>import array as arr\nscores = arr.array(\"i\", [85, 90, 100, 75])\nprint(scores)</code></pre><h4>Float array</h4><pre><code>prices = arr.array(\"d\", [10.5, 20.0, 5.99])\nprint(prices[0])\nprint(prices[-1])</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>import array as arr\ndata = arr.array(\"i\", [10, 20, 30])\nprint(data[1])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">10</button><button data-o=\"1\">20</button><button data-o=\"2\">30</button><button data-o=\"3\">An error</button></div><p class=\"w__why\">Index 1 is the second array element.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >arr.array(</button><button >\"i\"</button><button >,</button><button >[10,</button><button data-bad>\"Hello\"</button><button >,30])</button></div><p class=\"w__why\">An integer array cannot contain a string.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>'i'</code></button><button data-pair=\"p1\"><code>'d'</code></button><button data-pair=\"p2\"><code>arr.array</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">array constructor</button><button data-pair=\"p1\">floating-point array</button><button data-pair=\"p0\">integer array</button></div></div><p class=\"w__why\">The type code tells the module what every element must be.</p></div>\n",
      "mcqs": [
        {
          "q": "What is the critical array rule?",
          "options": [
            "Only numbers are allowed in Python",
            "Every element uses the same data type",
            "Arrays have no indexes",
            "Arrays are automatic"
          ],
          "answer": 1,
          "why": "Arrays are homogeneous."
        },
        {
          "q": "What does type code i mean?",
          "options": [
            "Index",
            "Item",
            "Signed integer",
            "Import"
          ],
          "answer": 2,
          "why": "i selects integers."
        },
        {
          "q": "How do you read 20 from [10,20,30]?",
          "options": [
            "[20]",
            "[1]",
            "[2]",
            ".get(20)"
          ],
          "answer": 1,
          "why": "Indexing starts at 0."
        },
        {
          "q": "Why use arrays for large numeric data?",
          "options": [
            "They accept every data type",
            "They can use memory more efficiently",
            "They automatically make charts",
            "They require no import"
          ],
          "answer": 1,
          "why": "Typed storage can be compact and efficient."
        }
      ],
      "tasks": [
        {
          "id": "u3t08p01",
          "kind": "code",
          "title": "Open the toolbox",
          "brief": "Import array as arr and print Toolbox ready.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Toolbox ready"
            },
            {
              "type": "sourceIncludes",
              "value": "import array as arr",
              "message": "Import array with alias arr"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Import array with alias arr",
            "Expected output begins with: Toolbox ready"
          ]
        },
        {
          "id": "u3t08p02",
          "kind": "code",
          "title": "Integer array",
          "brief": "Create ages with 14, 15, 16 and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [14, 15, 16])"
            },
            {
              "type": "sourceRegex",
              "pattern": "arr\\.array\\([\"']i[\"']",
              "message": "Use integer type code i"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use integer type code i",
            "Expected output begins with: array('i', [14, 15, 16])"
          ]
        },
        {
          "id": "u3t08p03",
          "kind": "code",
          "title": "Float array",
          "brief": "Create temperatures with 98.6, 100.2, 97.5 and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('d', [98.6, 100.2, 97.5])"
            },
            {
              "type": "sourceRegex",
              "pattern": "arr\\.array\\([\"']d[\"']",
              "message": "Use float type code d"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use float type code d",
            "Expected output begins with: array('d', [98.6, 100.2, 97.5])"
          ]
        },
        {
          "id": "u3t08p04",
          "kind": "code",
          "title": "Middle temperature",
          "brief": "Print only 100.2 from the temperatures array.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100.2"
            },
            {
              "type": "sourceIncludes",
              "value": "[1]",
              "message": "Use index 1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index 1",
            "Expected output begins with: 100.2"
          ]
        },
        {
          "id": "u3t08p05",
          "kind": "code",
          "title": "Last score",
          "brief": "Print the last value from an integer array [5,10,15].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1]",
              "message": "Use negative indexing"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use negative indexing",
            "Expected output begins with: 15"
          ]
        },
        {
          "id": "u3t08p06",
          "kind": "code",
          "title": "Mini build - typed sensor card",
          "brief": "Create a d array [22.5,23.0,21.75], then print Count: 3, First: 22.5, Last: 21.75.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Count: 3\nFirst: 22.5\nLast: 21.75"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len()"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1]",
              "message": "Read the last value"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use len()",
            "Expected output begins with: Count: 3"
          ]
        }
      ]
    },
    {
      "id": "u3t09",
      "title": "Arrays - Updating and Traversing Values",
      "summary": "Modify typed elements and inspect arrays by item or index.",
      "notebookLM": "",
      "notes": "\n<h4>Arrays Part 2 - Modification and Traversal</h4>\n<p>The source covers updating array elements, looping by item, looping with range(len()), and accumulators.</p>\n<h4>The real-world analogy: Replacing a lightbulb and inspecting an assembly line</h4>\n<p>Arrays are mutable. You may replace a value at an index, then traverse by item or by index.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Arrays can be updated and inspected in place\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">array</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">choose</text><text x=\"212.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">index</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">replace</text><text x=\"350.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">same type</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">loop</text><text x=\"488.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">items</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">report</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Arrays can be updated and inspected in place</text></svg>\n<h4>Updating an element</h4><p>Assign a same-type value to an existing position: <code>scores[0] = 95</code>.</p><h4>Looping by item</h4><p><code>for value in numbers</code> gives each value directly.</p><h4>Looping by index</h4><p><code>for i in range(len(numbers))</code> gives both the position and access to <code>numbers[i]</code>.</p>\n<h4>Update an array</h4><pre><code>import array as arr\nscores = arr.array(\"i\", [50, 85, 90])\nscores[0] = 95\nprint(scores)</code></pre><h4>Traverse by index</h4><pre><code>for i in range(len(scores)):\n    print(i, scores[i])</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>import array as arr\na = arr.array(\"i\", [1, 2, 3])\na[-1] = 9\nprint(a)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[1,2,3]</button><button data-o=\"1\">array('i',[1,2,9])</button><button data-o=\"2\">9 only</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">-1 selects the final element, which is replaced by 9.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >prices</button><button >[1]</button><button >=</button><button data-bad>\"free\"</button></div><p class=\"w__why\">A d array needs numeric values; a string violates its type.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\">loop by item</button><button data-pair=\"p1\">loop by index</button><button data-pair=\"p2\">mutable</button></div><div class=\"w-match__col\"><button data-pair=\"p2\">elements can be replaced</button><button data-pair=\"p1\">use position and value</button><button data-pair=\"p0\">use the value directly</button></div></div><p class=\"w__why\">Choose the traversal style according to whether the index matters.</p></div>\n",
      "mcqs": [
        {
          "q": "What does mutable mean for an array?",
          "options": [
            "It can speak",
            "Elements can be updated",
            "It accepts all types",
            "It has no length"
          ],
          "answer": 1,
          "why": "Array elements may be changed."
        },
        {
          "q": "How can 300 be changed to 500 in [100,200,300]?",
          "options": [
            "data[300]=500",
            "data[-1]=500",
            "data[3]=500",
            "data.change"
          ],
          "answer": 1,
          "why": "-1 selects the last valid item."
        },
        {
          "q": "Which tool commonly traverses an array?",
          "options": [
            "if",
            "len only",
            "for loop",
            "import"
          ],
          "answer": 2,
          "why": "for loops visit each element."
        },
        {
          "q": "Why use range(len(array))?",
          "options": [
            "To know indexes while looping",
            "To convert to text",
            "To sort values",
            "To import array"
          ],
          "answer": 0,
          "why": "The loop variable becomes a valid index."
        }
      ],
      "tasks": [
        {
          "id": "u3t09p01",
          "kind": "code",
          "title": "Score fixer",
          "brief": "Update the middle grade of [70,75,80] to 95.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [70, 95, 80])"
            },
            {
              "type": "sourceIncludes",
              "value": "[1] = 95",
              "message": "Assign 95 to index 1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Assign 95 to index 1",
            "Expected output begins with: array('i', [70, 95, 80])"
          ]
        },
        {
          "id": "u3t09p02",
          "kind": "code",
          "title": "Basic traversal",
          "brief": "Print Price: $1.99, Price: $5.5, Price: $10.0 on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Price: $1.99\nPrice: $5.5\nPrice: $10.0"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+\\w+\\s+in\\s+prices",
              "message": "Loop through prices"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Loop through prices",
            "Expected output begins with: Price: $1.99"
          ]
        },
        {
          "id": "u3t09p03",
          "kind": "code",
          "title": "Accumulator array",
          "brief": "Sum [5,10,15] with a loop and print 30.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "30"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*=\\s*0",
              "message": "Start total at 0"
            },
            {
              "type": "sourceRegex",
              "pattern": "total\\s*\\+=",
              "message": "Accumulate each number"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start total at 0",
            "Expected output begins with: 30"
          ]
        },
        {
          "id": "u3t09p04",
          "kind": "code",
          "title": "Index traversal",
          "brief": "For [100,200], print Index 0: 100 and Index 1: 200.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Index 0: 100\nIndex 1: 200"
            },
            {
              "type": "sourceIncludes",
              "value": "range(len(",
              "message": "Loop over valid indexes"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Loop over valid indexes",
            "Expected output begins with: Index 0: 100"
          ]
        },
        {
          "id": "u3t09p05",
          "kind": "code",
          "title": "Double every element",
          "brief": "Change [2,4,6] in place to [4,8,12] using indexes.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [4, 8, 12])"
            },
            {
              "type": "sourceIncludes",
              "value": "range(len(",
              "message": "Use index traversal"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[i\\]\\s*=",
              "message": "Assign through each index"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index traversal",
            "Expected output begins with: array('i', [4, 8, 12])"
          ]
        },
        {
          "id": "u3t09p06",
          "kind": "code",
          "title": "Mini build - temperature report",
          "brief": "For [20.5,22.0,19.5], print every index/value and Average: 20.666666666666668.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0 -> 20.5\n1 -> 22.0\n2 -> 19.5\nAverage: 20.666666666666668"
            },
            {
              "type": "sourceIncludes",
              "value": "range(len(",
              "message": "Print index/value pairs"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Calculate the total"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Print index/value pairs",
            "Expected output begins with: 0 -> 20.5"
          ]
        }
      ]
    },
    {
      "id": "u3t10",
      "title": "Arrays - Methods, Insertion, Deletion and Search",
      "summary": "Grow, shrink, reverse and search typed arrays.",
      "notebookLM": "",
      "notes": "\n<h4>Arrays Part 3 - Manipulating and Searching</h4>\n<p>The source introduces typecode, itemsize, reverse, append, insert, pop, remove, and index.</p>\n<h4>The real-world analogy: A bookshelf that grows and shrinks</h4>\n<p>Array methods add, insert, remove, reverse and locate same-type values while preserving the array type.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Array methods manipulate same-type elements\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">append</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">insert</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">reverse</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">index</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">pop / remove</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Array methods manipulate same-type elements</text></svg>\n<h4>Metadata and order</h4><p><code>.typecode</code> reports the type code, <code>.itemsize</code> reports bytes per item, and <code>.reverse()</code> reverses the array in place.</p><h4>Growing and shrinking</h4><ul><li><code>append(value)</code> adds at the end.</li><li><code>insert(index,value)</code> adds at a position.</li><li><code>pop(index)</code> removes by position and returns the value.</li><li><code>remove(value)</code> deletes the first matching value.</li></ul><h4>Searching</h4><p><code>index(value)</code> returns a position and raises <code>ValueError</code> when the value is absent.</p>\n<h4>Manipulate values</h4><pre><code>scores = arr.array(\"i\", [10, 20])\nscores.append(30)\nscores.insert(1, 15)\nscores.pop(0)\nscores.remove(30)\nprint(scores)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>a = arr.array(\"i\", [1,2,3])\na.reverse()\nprint(a[0])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">3</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">reverse() changes the array in place, so 3 becomes first.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >scores</button><button >.</button><button >remove(</button><button data-bad>0</button><button >)</button></div><p class=\"w__why\">remove(0) searches for the value 0. Use pop(0) to remove by index.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>append(30)</code></button><button data-pair=\"p1\"><code>insert(1,15)</code></button><button data-pair=\"p2\"><code>pop(0)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">remove by index</button><button data-pair=\"p1\">add at index 1</button><button data-pair=\"p0\">add at end</button></div></div><p class=\"w__why\">Array methods distinguish positions from values.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method adds at the end?",
          "options": [
            "insert",
            "add",
            "append",
            "extend"
          ],
          "answer": 2,
          "why": "append adds one value at the end."
        },
        {
          "q": "How do pop and remove differ?",
          "options": [
            "No difference",
            "pop uses index; remove uses value",
            "pop adds values",
            "remove only works on strings"
          ],
          "answer": 1,
          "why": "One targets a position, the other a value."
        },
        {
          "q": "What happens when index() cannot find a value?",
          "options": [
            "Returns -1",
            "Raises ValueError",
            "Returns False",
            "Adds the value"
          ],
          "answer": 1,
          "why": "Array index() is strict."
        },
        {
          "q": "What does reverse() do?",
          "options": [
            "Sorts ascending",
            "Flips current order in place",
            "Creates a tuple",
            "Removes duplicates"
          ],
          "answer": 1,
          "why": "It reverses without sorting."
        }
      ],
      "tasks": [
        {
          "id": "u3t10p01",
          "kind": "code",
          "title": "Reversal",
          "brief": "Reverse [1,2,3] and print the array.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [3, 2, 1])"
            },
            {
              "type": "sourceIncludes",
              "value": ".reverse()",
              "message": "Use reverse()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use reverse()",
            "Expected output begins with: array('i', [3, 2, 1])"
          ]
        },
        {
          "id": "u3t10p02",
          "kind": "code",
          "title": "Growing array",
          "brief": "Append 300 to [100,200].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [100, 200, 300])"
            },
            {
              "type": "sourceIncludes",
              "value": ".append(300)",
              "message": "Append 300"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Append 300",
            "Expected output begins with: array('i', [100, 200, 300])"
          ]
        },
        {
          "id": "u3t10p03",
          "kind": "code",
          "title": "The intruder",
          "brief": "Insert 150 at index 1 in [100,200,300].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [100, 150, 200, 300])"
            },
            {
              "type": "sourceIncludes",
              "value": ".insert(1, 150)",
              "message": "Insert at index 1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Insert at index 1",
            "Expected output begins with: array('i', [100, 150, 200, 300])"
          ]
        },
        {
          "id": "u3t10p04",
          "kind": "code",
          "title": "The eviction",
          "brief": "Remove the value 200. ",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [100, 150, 300])"
            },
            {
              "type": "sourceIncludes",
              "value": ".remove(200)",
              "message": "Remove by value"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Remove by value",
            "Expected output begins with: array('i', [100, 150, 300])"
          ]
        },
        {
          "id": "u3t10p05",
          "kind": "code",
          "title": "Search party",
          "brief": "Find the index of 99 in [12,45,99,32].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": ".index(99)",
              "message": "Use index()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index()",
            "Expected output begins with: 2"
          ]
        },
        {
          "id": "u3t10p06",
          "kind": "code",
          "title": "Mini build - array editor",
          "brief": "Starting [10,20,30], append 40, insert 15, pop index 2, reverse, then print the array.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [40, 30, 15, 10])"
            },
            {
              "type": "sourceIncludes",
              "value": ".append(",
              "message": "Append a value"
            },
            {
              "type": "sourceIncludes",
              "value": ".insert(",
              "message": "Insert a value"
            },
            {
              "type": "sourceIncludes",
              "value": ".pop(",
              "message": "Pop by index"
            },
            {
              "type": "sourceIncludes",
              "value": ".reverse()",
              "message": "Reverse at the end"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Append a value",
            "Expected output begins with: array('i', [40, 30, 15, 10])"
          ]
        }
      ]
    },
    {
      "id": "u3cp03",
      "title": "Revision Checkpoint 3 - Arrays",
      "summary": "Apply typed creation, mutation, traversal and collection methods.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 3 - Arrays</h4>\n<p>This checkpoint consolidates all three array source parts.</p>\n<h4>The real-world analogy: A typed-data workshop</h4>\n<p>This checkpoint combines type codes, indexing, mutation, traversal, accumulators and methods.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"The complete array lifecycle\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"63.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">create</text><path class=\"arrow\" d=\"M108 85 H129\"/><circle cx=\"113\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"112;125;112\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"134\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"179.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">access</text><path class=\"arrow\" d=\"M224 85 H245\"/><circle cx=\"229\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"228;241;228\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"250\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"295.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">update</text><path class=\"arrow\" d=\"M340 85 H361\"/><circle cx=\"345\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"344;357;344\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"366\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"411.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">traverse</text><path class=\"arrow\" d=\"M456 85 H477\"/><circle cx=\"461\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"460;473;460\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"482\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"527.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">manipulate</text><path class=\"arrow\" d=\"M572 85 H593\"/><circle cx=\"577\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"576;589;576\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"598\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"643.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">search</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">The complete array lifecycle</text></svg>\n<h4>Typed-data checklist</h4><ol><li>Import <code>array as arr</code>.</li><li>Select the correct type code.</li><li>Keep every value compatible.</li><li>Use indexes for positions and methods for collection operations.</li><li>Traverse when a calculation needs every item.</li></ol>\n<h4>Array lifecycle</h4><pre><code>import array as arr\ndata = arr.array(\"i\", [4, 8, 12])\ndata.append(16)\ndata[0] = 2\nfor value in data:\n    print(value)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>a = arr.array(\"i\", [5,10,15])\nprint(a.index(10))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">0</button><button data-o=\"1\">1</button><button data-o=\"2\">2</button><button data-o=\"3\">10</button></div><p class=\"w__why\">The value 10 is stored at index 1.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >a</button><button >.</button><button >insert(</button><button data-bad>2</button><button >)</button></div><p class=\"w__why\">insert needs both an index and a value.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>pop(1)</code></button><button data-pair=\"p1\"><code>remove(10)</code></button><button data-pair=\"p2\"><code>index(10)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">find position of 10</button><button data-pair=\"p1\">remove first value 10</button><button data-pair=\"p0\">remove position 1</button></div></div><p class=\"w__why\">The argument is either a position or a value depending on the method.</p></div>\n",
      "mcqs": [
        {
          "q": "Which type code stores floating-point values?",
          "options": [
            "i",
            "d",
            "s",
            "f only"
          ],
          "answer": 1,
          "why": "d is the double type code in the source."
        },
        {
          "q": "Which method removes by position?",
          "options": [
            "remove",
            "pop",
            "append",
            "index"
          ],
          "answer": 1,
          "why": "pop takes an index."
        },
        {
          "q": "What does typecode report?",
          "options": [
            "Length",
            "Element type code",
            "Last value",
            "Sorting order"
          ],
          "answer": 1,
          "why": "It describes the array element type."
        },
        {
          "q": "How can every item be totalled?",
          "options": [
            "Use a loop and accumulator or sum",
            "Use startswith",
            "Use title",
            "Use tuple only"
          ],
          "answer": 0,
          "why": "Traversing numeric values supports accumulation."
        }
      ],
      "tasks": [
        {
          "id": "u3cp03p01",
          "kind": "code",
          "title": "Checkpoint - typed creation",
          "brief": "Create an integer array [3,6,9] and print its typecode.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "i"
            },
            {
              "type": "sourceIncludes",
              "value": ".typecode",
              "message": "Read typecode"
            }
          ],
          "level": "Revision Checkpoint - Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Read typecode",
            "Expected output begins with: i"
          ]
        },
        {
          "id": "u3cp03p02",
          "kind": "code",
          "title": "Checkpoint - mutate and read",
          "brief": "Change the last element of [1,2,3] to 8 and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "8"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1] = 8",
              "message": "Update the last position"
            }
          ],
          "level": "Revision Checkpoint - Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Update the last position",
            "Expected output begins with: 8"
          ]
        },
        {
          "id": "u3cp03p03",
          "kind": "code",
          "title": "Checkpoint - total",
          "brief": "Loop over [2,4,6,8] and print Total: 20.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Total: 20"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+\\w+\\s+in",
              "message": "Traverse the array"
            }
          ],
          "level": "Revision Checkpoint - Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Traverse the array",
            "Expected output begins with: Total: 20"
          ]
        },
        {
          "id": "u3cp03p04",
          "kind": "code",
          "title": "Checkpoint - edit sequence",
          "brief": "For [10,30], insert 20, append 40 and print the result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [10, 20, 30, 40])"
            },
            {
              "type": "sourceIncludes",
              "value": ".insert(",
              "message": "Insert 20"
            },
            {
              "type": "sourceIncludes",
              "value": ".append(",
              "message": "Append 40"
            }
          ],
          "level": "Revision Checkpoint - Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Insert 20",
            "Expected output begins with: array('i', [10, 20, 30, 40])"
          ]
        },
        {
          "id": "u3cp03p05",
          "kind": "code",
          "title": "Checkpoint mini build - score analyser",
          "brief": "For [70,95,80], print Count: 3, Total: 245, Highest: 95, 95 index: 1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Count: 3\nTotal: 245\nHighest: 95\n95 index: 1"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Count values"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Sum values"
            },
            {
              "type": "sourceIncludes",
              "value": "max(",
              "message": "Find the maximum"
            },
            {
              "type": "sourceIncludes",
              "value": ".index(95)",
              "message": "Find the index"
            }
          ],
          "level": "Revision Checkpoint - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Count values",
            "Expected output begins with: Count: 3"
          ]
        }
      ]
    },
    {
      "id": "u3t11",
      "title": "Lists - Creation, Mixed Values and Access",
      "summary": "Build flexible ordered collections and inspect their elements.",
      "notebookLM": "",
      "notes": "\n<h4>Lists Part 1 - Introduction and Access</h4>\n<p>The source introduces lists, mixed data types, len(), positive/negative indexing, IndexError, and membership.</p>\n<h4>The real-world analogy: A backpack and a train</h4>\n<p>A list stores multiple ordered items in one variable. Unlike an array, a list may mix strings, numbers, Booleans and other objects.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Lists are flexible ordered collections\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">square</text><text x=\"74.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">brackets</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">ordered</text><text x=\"212.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">items</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">mixed</text><text x=\"350.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">types</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">index</text><text x=\"488.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">positions</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">membership</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Lists are flexible ordered collections</text></svg>\n<h4>Create a list</h4><p>Place comma-separated items inside square brackets. Empty lists are written <code>[]</code>.</p><h4>Mixed values</h4><p>A student profile may contain a name, age, percentage and Boolean status together.</p><h4>Length, indexing and membership</h4><p><code>len()</code>, positive/negative indexing, <code>in</code> and <code>not in</code> work just as they do with strings.</p>\n<h4>Mixed list</h4><pre><code>student_profile = [\"John Doe\", 18, 95.5, True]\nprint(student_profile)</code></pre><h4>Guest list</h4><pre><code>guest_list = [\"Alice\", \"Bob\", \"Charlie\"]\nprint(\"Bob\" in guest_list)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>movies = [\"Avatar\", \"Titanic\", \"Jaws\", \"Alien\"]\nprint(movies[-2])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Titanic</button><button data-o=\"1\">Jaws</button><button data-o=\"2\">Alien</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">-2 is the second-last item, Jaws.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >scores</button><button data-bad>(</button><button >0</button><button >)</button></div><p class=\"w__why\">Lists are indexed with square brackets, not parentheses.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>[]</code></button><button data-pair=\"p1\"><code>len(items)</code></button><button data-pair=\"p2\"><code>value in items</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">membership test</button><button data-pair=\"p1\">number of items</button><button data-pair=\"p0\">empty list</button></div></div><p class=\"w__why\">List syntax combines brackets with familiar sequence operations.</p></div>\n",
      "mcqs": [
        {
          "q": "Which symbols define a list?",
          "options": [
            "()",
            "{}",
            "[]",
            "quotes"
          ],
          "answer": 2,
          "why": "Lists use square brackets."
        },
        {
          "q": "Can a list mix data types?",
          "options": [
            "No",
            "Yes",
            "Only two types",
            "Only numbers and text"
          ],
          "answer": 1,
          "why": "Lists are flexible."
        },
        {
          "q": "What does my_list[-1] return?",
          "options": [
            "First item",
            "0",
            "Last item",
            "Error always"
          ],
          "answer": 2,
          "why": "-1 is the final position."
        },
        {
          "q": "What happens for a nonexistent index?",
          "options": [
            "False",
            "IndexError",
            "-1",
            "New item"
          ],
          "answer": 1,
          "why": "Direct indexing outside the list raises IndexError."
        }
      ],
      "tasks": [
        {
          "id": "u3t11p01",
          "kind": "code",
          "title": "Mixed user list",
          "brief": "Create and print [\"Mira\", 19, 1.65, True].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Mira', 19, 1.65, True]"
            },
            {
              "type": "sourceIncludes",
              "value": "[",
              "message": "Use list brackets"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use list brackets",
            "Expected output begins with: ['Mira', 19, 1.65, True]"
          ]
        },
        {
          "id": "u3t11p02",
          "kind": "code",
          "title": "Length checker",
          "brief": "Print the length of [Mon,Tue,Wed,Thu,Fri].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Use len()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use len()",
            "Expected output begins with: 5"
          ]
        },
        {
          "id": "u3t11p03",
          "kind": "code",
          "title": "First and last",
          "brief": "For [100,95,80,75,99], print 100 and 99.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100\n99"
            },
            {
              "type": "sourceIncludes",
              "value": "[0]",
              "message": "Use the first index"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1]",
              "message": "Use the final index"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the first index",
            "Expected output begins with: 100"
          ]
        },
        {
          "id": "u3t11p04",
          "kind": "code",
          "title": "Middle child",
          "brief": "Print 80 from the score list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "80"
            },
            {
              "type": "sourceIncludes",
              "value": "[2]",
              "message": "Use index 2"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index 2",
            "Expected output begins with: 80"
          ]
        },
        {
          "id": "u3t11p05",
          "kind": "code",
          "title": "The bouncer",
          "brief": "Check teacher in [admin,teacher,principal] and print Access Granted.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Access Granted"
            },
            {
              "type": "sourceIncludes",
              "value": " in ",
              "message": "Use membership"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Use an if statement"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use membership",
            "Expected output begins with: Access Granted"
          ]
        },
        {
          "id": "u3t11p06",
          "kind": "code",
          "title": "Mini build - student profile",
          "brief": "Print Name: Riya, Age: 20, Active: True from one mixed list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Name: Riya\nAge: 20\nActive: True"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "profile\\[",
              "count": 3,
              "message": "Read three list positions"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Read three list positions",
            "Expected output begins with: Name: Riya"
          ]
        }
      ]
    },
    {
      "id": "u3t12",
      "title": "Lists - Slicing, Concatenation and Repetition",
      "summary": "Extract mini-lists and combine or repeat sequence data.",
      "notebookLM": "",
      "notes": "\n<h4>Lists Part 2 - Slices and Operations</h4>\n<p>The source covers list slices, blank boundaries, concatenation, and repetition.</p>\n<h4>The real-world analogy: A sliced loaf and super glue</h4>\n<p>List slicing returns a new mini-list. The + operator concatenates lists, and * repeats their items.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 205\" role=\"img\" aria-label=\"A string slice selects items from the start index up to but not including the stop index\"><rect class=\"box\" x=\"38\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"70\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:18px\">A</text><text x=\"70\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">0</text><rect class=\"box box--dark\" x=\"116\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"148\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">B</text><text x=\"148\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">1</text><rect class=\"box box--dark\" x=\"194\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"226\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">C</text><text x=\"226\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">2</text><rect class=\"box box--dark\" x=\"272\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"304\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:18px\">D</text><text x=\"304\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">3</text><rect class=\"box\" x=\"350\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"382\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:18px\">E</text><text x=\"382\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">4</text><rect class=\"box\" x=\"428\" y=\"70\" width=\"64\" height=\"58\" rx=\"8\"/><text x=\"460\" y=\"105\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:18px\">F</text><text x=\"460\" y=\"55\" text-anchor=\"middle\" class=\"lbl\">5</text><path class=\"accent\" d=\"M116 145 H336\" stroke-width=\"7\"><animate attributeName=\"stroke-width\" values=\"4;9;4\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><text x=\"350\" y=\"184\" text-anchor=\"middle\" class=\"lbl\">The slice includes index 1 and stops before index 4</text></svg>\n<h4>List slices</h4><p>The formula <code>[start:stop:step]</code> follows exactly the same exclusive-stop rules as string slicing.</p><h4>Concatenation</h4><p><code>list_a + list_b</code> produces a new list containing all items in order.</p><h4>Repetition</h4><p><code>items * 3</code> repeats the sequence three times.</p>\n<h4>Slice a list</h4><pre><code>letters = [\"A\",\"B\",\"C\",\"D\",\"E\",\"F\"]\nprint(letters[1:4])</code></pre><h4>Glue and repeat</h4><pre><code>print([1,2] + [3,4])\nprint([\"Hip\",\"Hooray\"] * 2)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>print([1, 2] + [3, 4])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[4,6]</button><button data-o=\"1\">[1,2,3,4]</button><button data-o=\"2\">[[1,2],[3,4]]</button><button data-o=\"3\">10</button></div><p class=\"w__why\">List + concatenates; it does not add the numbers item by item.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >colors</button><button >[</button><button >1:3</button><button data-bad>)</button></div><p class=\"w__why\">A slice begins with [ and must end with ].</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>items[:2]</code></button><button data-pair=\"p1\"><code>items[-2:]</code></button><button data-pair=\"p2\"><code>[\"Hi\"] * 3</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">repeat three times</button><button data-pair=\"p1\">last two items</button><button data-pair=\"p0\">first two items</button></div></div><p class=\"w__why\">List slicing and repetition follow sequence rules.</p></div>\n",
      "mcqs": [
        {
          "q": "Does data[2:5] include index 5?",
          "options": [
            "Yes",
            "No",
            "Only for lists",
            "It reverses"
          ],
          "answer": 1,
          "why": "The stop is excluded."
        },
        {
          "q": "What does data[:4] mean?",
          "options": [
            "Start at 1",
            "Syntax error",
            "Start at 0",
            "Skip four"
          ],
          "answer": 2,
          "why": "Blank start means the beginning."
        },
        {
          "q": "What is [1,2] + [3,4]?",
          "options": [
            "[4,6]",
            "[1,2,3,4]",
            "Nested lists",
            "10"
          ],
          "answer": 1,
          "why": "+ concatenates lists."
        },
        {
          "q": "What does [\"Hi\"] * 3 produce?",
          "options": [
            "A number",
            "Three Hi items",
            "An error",
            "One item"
          ],
          "answer": 1,
          "why": "* repeats the sequence."
        }
      ],
      "tasks": [
        {
          "id": "u3t12p01",
          "kind": "code",
          "title": "Basic list slice",
          "brief": "Extract Orange, Yellow, Green from the colour list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Orange', 'Yellow', 'Green']"
            },
            {
              "type": "sourceIncludes",
              "value": "[1:4]",
              "message": "Use the slice [1:4]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the slice [1:4]",
            "Expected output begins with: ['Orange', 'Yellow', 'Green']"
          ]
        },
        {
          "id": "u3t12p02",
          "kind": "code",
          "title": "Start shortcut",
          "brief": "Print the first two colours with a blank-start slice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Red', 'Orange']"
            },
            {
              "type": "sourceIncludes",
              "value": "[:2]",
              "message": "Use [:2]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use [:2]",
            "Expected output begins with: ['Red', 'Orange']"
          ]
        },
        {
          "id": "u3t12p03",
          "kind": "code",
          "title": "End shortcut",
          "brief": "Print the last two colours with a blank-end slice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Green', 'Blue']"
            },
            {
              "type": "sourceIncludes",
              "value": "[-2:]",
              "message": "Use [-2:]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use [-2:]",
            "Expected output begins with: ['Green', 'Blue']"
          ]
        },
        {
          "id": "u3t12p04",
          "kind": "code",
          "title": "Super glue",
          "brief": "Combine team_A and team_B. ",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['John', 'Sarah', 'Mike', 'Emma']"
            },
            {
              "type": "sourceRegex",
              "pattern": "team_A\\s*\\+\\s*team_B",
              "message": "Concatenate the lists"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Concatenate the lists",
            "Expected output begins with: ['John', 'Sarah', 'Mike', 'Emma']"
          ]
        },
        {
          "id": "u3t12p05",
          "kind": "code",
          "title": "The echo",
          "brief": "Repeat [Hello!] five times.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Hello!', 'Hello!', 'Hello!', 'Hello!', 'Hello!']"
            },
            {
              "type": "sourceIncludes",
              "value": "* 5",
              "message": "Use list repetition"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use list repetition",
            "Expected output begins with: ['Hello!', 'Hello!', 'Hello!', 'Hello!', 'Hello!']"
          ]
        },
        {
          "id": "u3t12p06",
          "kind": "code",
          "title": "Mini build - weekly rota",
          "brief": "Combine [Mon,Tue,Wed] and [Thu,Fri], then print Work days and Weekend repeated twice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Work days: Mon, Tue, Wed, Thu, Fri\nWeekend: Sat, Sun, Sat, Sun"
            },
            {
              "type": "sourceIncludes",
              "value": " + ",
              "message": "Concatenate workday lists"
            },
            {
              "type": "sourceIncludes",
              "value": "* 2",
              "message": "Repeat weekend values"
            },
            {
              "type": "sourceIncludes",
              "value": ".join(",
              "message": "Format with join()"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Concatenate workday lists",
            "Expected output begins with: Work days: Mon, Tue, Wed, Thu, Fri"
          ]
        }
      ]
    },
    {
      "id": "u3t13",
      "title": "Lists - Adding, Removing and Deleting Items",
      "summary": "Grow, shrink and restructure lists with dynamic methods.",
      "notebookLM": "",
      "notes": "\n<h4>Lists Part 3 - Adding and Removing Methods</h4>\n<p>The source introduces append, insert, extend, remove, pop, clear, and del.</p>\n<h4>The real-world analogy: A dynamic bookshelf</h4>\n<p>Lists can grow and shrink after creation. Use methods when adding or removing one item, many items, positions or values.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Dynamic lists grow and shrink through clear operations\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"63.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">append</text><path class=\"arrow\" d=\"M108 85 H129\"/><circle cx=\"113\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"112;125;112\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"134\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"179.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">insert</text><path class=\"arrow\" d=\"M224 85 H245\"/><circle cx=\"229\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"228;241;228\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"250\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"295.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">extend</text><path class=\"arrow\" d=\"M340 85 H361\"/><circle cx=\"345\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"344;357;344\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"366\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"411.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">remove</text><path class=\"arrow\" d=\"M456 85 H477\"/><circle cx=\"461\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"460;473;460\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"482\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"527.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">pop</text><path class=\"arrow\" d=\"M572 85 H593\"/><circle cx=\"577\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"576;589;576\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"598\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"643.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">clear / del</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Dynamic lists grow and shrink through clear operations</text></svg>\n<h4>Adding values</h4><ul><li><code>append(value)</code> adds one item at the end.</li><li><code>insert(index,value)</code> adds one item at a chosen position.</li><li><code>extend(other)</code> unpacks another iterable onto the end.</li></ul><h4>Removing values</h4><ul><li><code>remove(value)</code> deletes the first matching value.</li><li><code>pop(index)</code> removes and returns one position; no index means the last item.</li><li><code>clear()</code> empties the list.</li></ul><h4>del</h4><p>The <code>del</code> statement can remove an item, a slice, or the variable itself.</p>\n<h4>Edit a cart</h4><pre><code>cart = [\"Apple\", \"Banana\"]\ncart.append(\"Orange\")\ncart.insert(1, \"Milk\")\ncart.extend([\"Bread\", \"Cheese\"])\nprint(cart)</code></pre><h4>Delete a slice</h4><pre><code>nums = [10,20,30,40,50]\ndel nums[1:3]\nprint(nums)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>data = [\"X\", \"Y\", \"Z\", \"Y\"]\ndata.remove(\"Y\")\nprint(data)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[X,Z]</button><button data-o=\"1\">[X,Z,Y]</button><button data-o=\"2\">[X,Y,Z]</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">remove deletes only the first matching Y.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >cart</button><button >.</button><button >append(</button><button >\"A\"</button><button data-bad>,</button><button >\"B\"</button><button >)</button></div><p class=\"w__why\">append accepts one object. Use extend for several separate items.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>append(x)</code></button><button data-pair=\"p1\"><code>extend(xs)</code></button><button data-pair=\"p2\"><code>pop(1)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">remove and return index 1</button><button data-pair=\"p1\">many items at end</button><button data-pair=\"p0\">one item at end</button></div></div><p class=\"w__why\">Use the method that matches the amount and location of the change.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method adds one item at the end?",
          "options": [
            "insert",
            "add",
            "extend",
            "append"
          ],
          "answer": 3,
          "why": "append adds one object."
        },
        {
          "q": "How do remove and pop differ?",
          "options": [
            "remove uses value; pop uses index",
            "No difference",
            "pop adds",
            "remove clears all"
          ],
          "answer": 0,
          "why": "They target different things."
        },
        {
          "q": "What does pop() without an index remove?",
          "options": [
            "First item",
            "Nothing",
            "Last item",
            "Whole list"
          ],
          "answer": 2,
          "why": "Default pop removes the end."
        },
        {
          "q": "What does clear() leave?",
          "options": [
            "Deleted variable",
            "Empty list",
            "One item",
            "Tuple"
          ],
          "answer": 1,
          "why": "The list object remains empty."
        }
      ],
      "tasks": [
        {
          "id": "u3t13p01",
          "kind": "code",
          "title": "Appender",
          "brief": "Append Minecraft to [Mario,Zelda].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Mario', 'Zelda', 'Minecraft']"
            },
            {
              "type": "sourceIncludes",
              "value": ".append(",
              "message": "Use append()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use append()",
            "Expected output begins with: ['Mario', 'Zelda', 'Minecraft']"
          ]
        },
        {
          "id": "u3t13p02",
          "kind": "code",
          "title": "The intruder",
          "brief": "Insert 3 into [1,2,4,5].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[1, 2, 3, 4, 5]"
            },
            {
              "type": "sourceIncludes",
              "value": ".insert(2, 3)",
              "message": "Insert 3 at index 2"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Insert 3 at index 2",
            "Expected output begins with: [1, 2, 3, 4, 5]"
          ]
        },
        {
          "id": "u3t13p03",
          "kind": "code",
          "title": "Value removal",
          "brief": "Remove the first Y from [X,Y,Z,Y].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['X', 'Z', 'Y']"
            },
            {
              "type": "sourceIncludes",
              "value": ".remove(\"Y\")",
              "message": "Remove by value"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Remove by value",
            "Expected output begins with: ['X', 'Z', 'Y']"
          ]
        },
        {
          "id": "u3t13p04",
          "kind": "code",
          "title": "The popper",
          "brief": "Pop Trash at index 1 from the task list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Dishes', 'Vacuum']"
            },
            {
              "type": "sourceIncludes",
              "value": ".pop(1)",
              "message": "Pop index 1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Pop index 1",
            "Expected output begins with: ['Dishes', 'Vacuum']"
          ]
        },
        {
          "id": "u3t13p05",
          "kind": "code",
          "title": "The extender",
          "brief": "Extend [10,20] with [30,40].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[10, 20, 30, 40]"
            },
            {
              "type": "sourceIncludes",
              "value": ".extend(",
              "message": "Use extend()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use extend()",
            "Expected output begins with: [10, 20, 30, 40]"
          ]
        },
        {
          "id": "u3t13p06",
          "kind": "code",
          "title": "Mini build - shopping cart editor",
          "brief": "Start [Apple,Banana], insert Milk, append Bread, remove Banana, extend Eggs/Cheese, then print the cart.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Apple', 'Milk', 'Bread', 'Eggs', 'Cheese']"
            },
            {
              "type": "sourceIncludes",
              "value": ".insert(",
              "message": "Insert Milk"
            },
            {
              "type": "sourceIncludes",
              "value": ".append(",
              "message": "Append Bread"
            },
            {
              "type": "sourceIncludes",
              "value": ".remove(",
              "message": "Remove Banana"
            },
            {
              "type": "sourceIncludes",
              "value": ".extend(",
              "message": "Extend the cart"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Insert Milk",
            "Expected output begins with: ['Apple', 'Milk', 'Bread', 'Eggs', 'Cheese']"
          ]
        }
      ]
    },
    {
      "id": "u3t14",
      "title": "Lists - Sorting, Traversal, enumerate and zip",
      "summary": "Organise collections and build indexed or parallel reports.",
      "notebookLM": "",
      "notes": "\n<h4>Lists Part 4 - Ordering and Looping</h4>\n<p>The source covers sort, reverse, sorted, for-loop traversal, enumerate, and zip.</p>\n<h4>The real-world analogy: An assembly line and a zipper</h4>\n<p>Sorting organises a list. Traversal processes each item. enumerate pairs positions with values, while zip pairs items from parallel lists.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Order and traverse list data\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">messy</text><text x=\"74.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">list</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">sort / sorted</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">enumerate</text><text x=\"350.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">index + item</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">zip</text><text x=\"488.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">parallel lists</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">formatted</text><text x=\"626.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">report</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Order and traverse list data</text></svg>\n<h4>Sorting tools</h4><p><code>list.sort()</code> changes the original. <code>sorted(list)</code> returns a new sorted list. <code>reverse()</code> flips current order without alphabetising.</p><h4>Traversal</h4><p>A basic <code>for</code> loop visits values. <code>enumerate()</code> yields index/value pairs. <code>zip()</code> walks multiple iterables together and stops when the shortest one ends.</p>\n<h4>Sort safely</h4><pre><code>grades = [90,50,100]\nperfect_grades = sorted(grades)\nprint(grades)\nprint(perfect_grades)</code></pre><h4>Pair lists</h4><pre><code>names = [\"Alice\",\"Bob\"]\nscores = [95,80]\nfor name, score in zip(names, scores):\n    print(name, score)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>names = [\"Zack\", \"Alice\", \"Bob\"]\nnames.sort()\nprint(names[0])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Zack</button><button data-o=\"1\">Alice</button><button data-o=\"2\">Bob</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">sort places Alice first alphabetically.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >for</button><button >i, item</button><button >in</button><button data-bad>items.enumerate()</button><button >:</button></div><p class=\"w__why\">enumerate is a function: enumerate(items).</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>sort()</code></button><button data-pair=\"p1\"><code>sorted(items)</code></button><button data-pair=\"p2\"><code>zip(a,b)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">pair two lists</button><button data-pair=\"p1\">new sorted copy</button><button data-pair=\"p0\">change original</button></div></div><p class=\"w__why\">Mutating methods and safe-copy functions have different effects.</p></div>\n",
      "mcqs": [
        {
          "q": "How do sort() and sorted() differ?",
          "options": [
            "No difference",
            "sort mutates; sorted returns a copy",
            "sorted only works on numbers",
            "sort always reverses"
          ],
          "answer": 1,
          "why": "One changes the original."
        },
        {
          "q": "Which tool gives item and index?",
          "options": [
            "zip",
            "sort",
            "enumerate",
            "len only"
          ],
          "answer": 2,
          "why": "enumerate yields pairs."
        },
        {
          "q": "What does zip() do?",
          "options": [
            "Compress files",
            "Pair items from multiple iterables",
            "Delete lists",
            "Sort two lists"
          ],
          "answer": 1,
          "why": "zip advances the iterables together."
        },
        {
          "q": "Does reverse() sort alphabetically?",
          "options": [
            "Yes",
            "No, it only flips current order",
            "Only strings",
            "Only numbers"
          ],
          "answer": 1,
          "why": "Reversal is not sorting."
        }
      ],
      "tasks": [
        {
          "id": "u3t14p01",
          "kind": "code",
          "title": "Sorter",
          "brief": "Sort [45,12,67,33] ascending.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[12, 33, 45, 67]"
            },
            {
              "type": "sourceIncludes",
              "value": ".sort()",
              "message": "Use sort()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use sort()",
            "Expected output begins with: [12, 33, 45, 67]"
          ]
        },
        {
          "id": "u3t14p02",
          "kind": "code",
          "title": "Reverse sorter",
          "brief": "Sort the same values highest to lowest.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[67, 45, 33, 12]"
            },
            {
              "type": "sourceIncludes",
              "value": "reverse=True",
              "message": "Use reverse=True"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use reverse=True",
            "Expected output begins with: [67, 45, 33, 12]"
          ]
        },
        {
          "id": "u3t14p03",
          "kind": "code",
          "title": "Basic traversal",
          "brief": "Print I have a Dog/Cat/Bird on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "I have a Dog\nI have a Cat\nI have a Bird"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+\\w+\\s+in",
              "message": "Traverse the list"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Traverse the list",
            "Expected output begins with: I have a Dog"
          ]
        },
        {
          "id": "u3t14p04",
          "kind": "code",
          "title": "Numbered list",
          "brief": "Use enumerate to print Rank 0: Jaws, Rank 1: Star Wars, Rank 2: E.T..",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Rank 0: Jaws\nRank 1: Star Wars\nRank 2: E.T."
            },
            {
              "type": "sourceIncludes",
              "value": "enumerate(",
              "message": "Use enumerate()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use enumerate()",
            "Expected output begins with: Rank 0: Jaws"
          ]
        },
        {
          "id": "u3t14p05",
          "kind": "code",
          "title": "The zipper",
          "brief": "Zip Name/Color with Arthur/Blue and print question-answer lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "What is your Name? Arthur.\nWhat is your Color? Blue."
            },
            {
              "type": "sourceIncludes",
              "value": "zip(",
              "message": "Use zip()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use zip()",
            "Expected output begins with: What is your Name? Arthur."
          ]
        },
        {
          "id": "u3t14p06",
          "kind": "code",
          "title": "Mini build - leaderboard",
          "brief": "Zip [Asha,Ben,Cara] with [88,95,91], sort pairs by score descending, and print numbered ranks.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1. Ben - 95\n2. Cara - 91\n3. Asha - 88"
            },
            {
              "type": "sourceIncludes",
              "value": "zip(",
              "message": "Pair names and scores"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Create a sorted copy"
            },
            {
              "type": "sourceIncludes",
              "value": "enumerate(",
              "message": "Number the ranks"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Pair names and scores",
            "Expected output begins with: 1. Ben - 95"
          ]
        }
      ]
    },
    {
      "id": "u3t15",
      "title": "Lists - Mutability, Aliasing and Safe Copies",
      "summary": "Understand shared references and create independent list copies.",
      "notebookLM": "",
      "notes": "\n<h4>Lists Part 5 - Mutability and Memory</h4>\n<p>The source explains list mutability, aliasing, copy(), full-slice cloning, and list parameters.</p>\n<h4>The real-world analogy: Two names for one dog</h4>\n<p>List assignment does not clone data. Two variables may point to the same mutable object, so a change through either name is visible through both.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 220\" role=\"img\" aria-label=\"Two variable names point to one shared list in memory\">\n      <rect class=\"box\" x=\"35\" y=\"40\" width=\"150\" height=\"52\" rx=\"9\"/><text x=\"110\" y=\"72\" text-anchor=\"middle\" class=\"mono\">team_A</text>\n      <rect class=\"box\" x=\"35\" y=\"128\" width=\"150\" height=\"52\" rx=\"9\"/><text x=\"110\" y=\"160\" text-anchor=\"middle\" class=\"mono\">team_B</text>\n      <path class=\"arrow\" d=\"M185 66 C270 66 260 105 340 105\"/><path class=\"arrow\" d=\"M185 154 C270 154 260 115 340 115\"/>\n      <rect class=\"box box--dark\" x=\"340\" y=\"66\" width=\"300\" height=\"96\" rx=\"14\"/>\n      <text x=\"490\" y=\"105\" text-anchor=\"middle\" class=\"mono on-dark\">[&quot;John&quot;, &quot;Sarah&quot;]</text>\n      <text x=\"490\" y=\"135\" text-anchor=\"middle\" class=\"on-dark\" style=\"font-size:12px\">one physical list object</text>\n      <circle cx=\"330\" cy=\"110\" r=\"7\" class=\"accent\"><animate attributeName=\"r\" values=\"5;11;5\" dur=\"1.6s\" repeatCount=\"indefinite\"/></circle>\n      <text x=\"350\" y=\"205\" text-anchor=\"middle\" class=\"lbl\">Assignment creates a second label, not a second list</text>\n    </svg>\n<h4>List mutability</h4><p>Assigning to <code>scores[1]</code> changes the existing list.</p><h4>The alias trap</h4><p><code>team_B = team_A</code> creates a second reference to the same list.</p><h4>Safe shallow copies</h4><p>Use <code>team_A.copy()</code> or <code>team_A[:]</code> to create a separate top-level list.</p><h4>Function parameters</h4><p>Passing a list gives the function a reference to the same object. In-place changes can affect the caller.</p>\n<h4>Alias trap</h4><pre><code>team_A = [\"John\", \"Sarah\"]\nteam_B = team_A\nteam_B[0] = \"Mike\"\nprint(team_A)</code></pre><h4>Safe copy</h4><pre><code>team_B = team_A.copy()\nteam_B[0] = \"Mike\"</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>x = [1, 2]\ny = x\ny[0] = 99\nprint(x)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[1,2]</button><button data-o=\"1\">[99,2]</button><button data-o=\"2\">Error</button><button data-o=\"3\">[99,99]</button></div><p class=\"w__why\">x and y reference the same list.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >safe_copy</button><button data-bad>=</button><button >original</button></div><p class=\"w__why\">This is aliasing, not copying. Use original.copy() or original[:].</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>b = a</code></button><button data-pair=\"p1\"><code>b = a.copy()</code></button><button data-pair=\"p2\"><code>b = a[:]</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">separate shallow copy</button><button data-pair=\"p1\">separate shallow copy</button><button data-pair=\"p0\">alias</button></div></div><p class=\"w__why\">Assignment and copying look similar but have different memory effects.</p></div>\n",
      "mcqs": [
        {
          "q": "What does list mutability allow?",
          "options": [
            "Only reading",
            "Changing, adding and deleting in place",
            "Only numbers",
            "Permanent locking"
          ],
          "answer": 1,
          "why": "Lists can be edited."
        },
        {
          "q": "After y=x and y[0]=99, what happens to x?",
          "options": [
            "Unchanged",
            "It also changes",
            "It becomes tuple",
            "Error"
          ],
          "answer": 1,
          "why": "Both names share one list."
        },
        {
          "q": "Which creates a safe top-level copy?",
          "options": [
            "new=old",
            "new=old.copy()",
            "new==old",
            "copy(old) without import"
          ],
          "answer": 1,
          "why": "copy() creates a new list object."
        },
        {
          "q": "What is another shallow-copy shortcut?",
          "options": [
            "old[0]",
            "old[:]",
            "old[-1]",
            "old.clear()"
          ],
          "answer": 1,
          "why": "A full slice returns a new list."
        }
      ],
      "tasks": [
        {
          "id": "u3t15p01",
          "kind": "code",
          "title": "Mutability test",
          "brief": "Change Blue to Yellow in [Red,Blue,Green].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Red', 'Yellow', 'Green']"
            },
            {
              "type": "sourceIncludes",
              "value": "[1] = \"Yellow\"",
              "message": "Assign through index 1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Assign through index 1",
            "Expected output begins with: ['Red', 'Yellow', 'Green']"
          ]
        },
        {
          "id": "u3t15p02",
          "kind": "code",
          "title": "Alias trap",
          "brief": "Create box2 = box1, change box2[0] to 99, and print box1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[99, 20]"
            },
            {
              "type": "sourceRegex",
              "pattern": "box2\\s*=\\s*box1",
              "message": "Create the alias"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create the alias",
            "Expected output begins with: [99, 20]"
          ]
        },
        {
          "id": "u3t15p03",
          "kind": "code",
          "title": "Safe clone method",
          "brief": "Use copy(), change safe2, and prove safe1 remains [A,B].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['A', 'B']"
            },
            {
              "type": "sourceIncludes",
              "value": ".copy()",
              "message": "Use copy()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use copy()",
            "Expected output begins with: ['A', 'B']"
          ]
        },
        {
          "id": "u3t15p04",
          "kind": "code",
          "title": "Safe clone slice",
          "brief": "Use [:] to copy [100,200], change the copy, and print the original.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[100, 200]"
            },
            {
              "type": "sourceIncludes",
              "value": "[:]",
              "message": "Use the full-slice copy"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the full-slice copy",
            "Expected output begins with: [100, 200]"
          ]
        },
        {
          "id": "u3t15p05",
          "kind": "code",
          "title": "Mental trace in code",
          "brief": "Create a=[1,2,3], b=a.copy(), b[0]=5, c=b, c[1]=9; print a then b.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[1, 2, 3]\n[5, 9, 3]"
            },
            {
              "type": "sourceIncludes",
              "value": ".copy()",
              "message": "Separate b from a"
            },
            {
              "type": "sourceRegex",
              "pattern": "c\\s*=\\s*b",
              "message": "Alias c to b"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Separate b from a",
            "Expected output begins with: [1, 2, 3]"
          ]
        },
        {
          "id": "u3t15p06",
          "kind": "code",
          "title": "Mini build - safe draft editor",
          "brief": "Create original [Intro,Body,End], clone it, replace Body with Revised Body and append Review only to the clone; print both lists.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Original: ['Intro', 'Body', 'End']\nDraft: ['Intro', 'Revised Body', 'End', 'Review']"
            },
            {
              "type": "sourceIncludes",
              "value": ".copy()",
              "message": "Clone the original"
            },
            {
              "type": "sourceIncludes",
              "value": ".append(",
              "message": "Append to the draft"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Clone the original",
            "Expected output begins with: Original: ['Intro', 'Body', 'End']"
          ]
        }
      ]
    },
    {
      "id": "u3t16",
      "title": "Lists - Nested Grids and Comprehensions",
      "summary": "Represent matrices and create transformed or filtered lists concisely.",
      "notebookLM": "",
      "notes": "\n<h4>Lists Part 6 - Nested Lists and Comprehensions</h4>\n<p>The source introduces nested 2D lists, double indexing, list comprehensions, and conditional comprehensions.</p>\n<h4>The real-world analogy: An egg carton and an assembly-line shortcut</h4>\n<p>Nested lists represent rows and columns. List comprehensions create transformed or filtered lists in a compact expression.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 255\" role=\"img\" aria-label=\"A nested list shown as a three by three grid with row and column indexes\"><text x=\"185\" y=\"79\" text-anchor=\"end\" class=\"lbl\">row 0</text><rect class=\"box\" x=\"220\" y=\"45\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"254\" y=\"74\" text-anchor=\"middle\" class=\"mono \">1</text><rect class=\"box\" x=\"302\" y=\"45\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"336\" y=\"74\" text-anchor=\"middle\" class=\"mono \">2</text><rect class=\"box\" x=\"384\" y=\"45\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"418\" y=\"74\" text-anchor=\"middle\" class=\"mono \">3</text><text x=\"185\" y=\"137\" text-anchor=\"end\" class=\"lbl\">row 1</text><rect class=\"box\" x=\"220\" y=\"103\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"254\" y=\"132\" text-anchor=\"middle\" class=\"mono \">4</text><rect class=\"box\" x=\"302\" y=\"103\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"336\" y=\"132\" text-anchor=\"middle\" class=\"mono \">5</text><rect class=\"box box--dark\" x=\"384\" y=\"103\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"418\" y=\"132\" text-anchor=\"middle\" class=\"mono on-dark\">6</text><text x=\"185\" y=\"195\" text-anchor=\"end\" class=\"lbl\">row 2</text><rect class=\"box\" x=\"220\" y=\"161\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"254\" y=\"190\" text-anchor=\"middle\" class=\"mono \">7</text><rect class=\"box\" x=\"302\" y=\"161\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"336\" y=\"190\" text-anchor=\"middle\" class=\"mono \">8</text><rect class=\"box\" x=\"384\" y=\"161\" width=\"68\" height=\"46\" rx=\"7\"/><text x=\"418\" y=\"190\" text-anchor=\"middle\" class=\"mono \">9</text><text x=\"254\" y=\"32\" text-anchor=\"middle\" class=\"lbl\">col 0</text><text x=\"336\" y=\"32\" text-anchor=\"middle\" class=\"lbl\">col 1</text><text x=\"418\" y=\"32\" text-anchor=\"middle\" class=\"lbl\">col 2</text><path class=\"accent\" d=\"M500 132 C565 132 575 188 625 188\" fill=\"none\"><animate attributeName=\"stroke-width\" values=\"2;6;2\" dur=\"1.6s\" repeatCount=\"indefinite\"/></path><text x=\"615\" y=\"215\" text-anchor=\"middle\" class=\"mono\">grid[1][2] = 6</text></svg>\n<h4>Two-dimensional lists</h4><p>A nested list is a list containing other lists. Access a cell with two indexes: row first, then column.</p><h4>List comprehensions</h4><p>The form <code>[expression for item in iterable]</code> creates a new list. Add <code>if condition</code> at the end to filter.</p><div class=\"callout\"><strong>Read left to right.</strong> Give me the expression for every item in the iterable, optionally only when the condition passes.</div>\n<h4>Nested grid</h4><pre><code>grid = [[1,2,3],[4,5,6],[7,8,9]]\nprint(grid[1][2])</code></pre><h4>Comprehension</h4><pre><code>numbers = [1,2,3]\ndoubled = [num * 2 for num in numbers]\nprint(doubled)</code></pre><h4>Conditional comprehension</h4><pre><code>evens = [x for x in [1,2,3,4,5] if x % 2 == 0]\nprint(evens)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>print([x * 10 for x in [1, 2, 3]])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[10,20,30]</button><button data-o=\"1\">[1,2,3,10]</button><button data-o=\"2\">102030</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The expression x*10 is evaluated for every item.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >matrix</button><button data-bad>[1,2]</button></div><p class=\"w__why\">Nested Python lists use two bracket operations: matrix[1][2].</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>grid[1][2]</code></button><button data-pair=\"p1\"><code>[x*2 for x in nums]</code></button><button data-pair=\"p2\"><code>[x for x in nums if x&gt;0]</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">filter items</button><button data-pair=\"p1\">transform every item</button><button data-pair=\"p0\">row 1, column 2</button></div></div><p class=\"w__why\">Nested indexing and comprehensions solve different collection problems.</p></div>\n",
      "mcqs": [
        {
          "q": "How do you access row 1, column 2?",
          "options": [
            "matrix[1,2]",
            "matrix[1][2]",
            "matrix(1)(2)",
            "matrix.get"
          ],
          "answer": 1,
          "why": "Nested lists use one index at a time."
        },
        {
          "q": "What is a list comprehension for?",
          "options": [
            "Writing comments",
            "Creating a new list compactly",
            "Checking emptiness only",
            "Deleting safely"
          ],
          "answer": 1,
          "why": "It compresses a transformation loop."
        },
        {
          "q": "What does [x*10 for x in [1,2,3]] return?",
          "options": [
            "[10,20,30]",
            "[1,2,3,10]",
            "102030",
            "Error"
          ],
          "answer": 0,
          "why": "Each item is transformed."
        },
        {
          "q": "Where does a filter condition appear?",
          "options": [
            "Before [",
            "After the iterable",
            "Inside print only",
            "It cannot be used"
          ],
          "answer": 1,
          "why": "Use ... for x in items if condition."
        }
      ],
      "tasks": [
        {
          "id": "u3t16p01",
          "kind": "code",
          "title": "Treasure grid",
          "brief": "Access Gold in [[Dirt,Dirt,Dirt],[Dirt,Gold,Dirt]].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Gold"
            },
            {
              "type": "sourceIncludes",
              "value": "[1][1]",
              "message": "Use two indexes"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use two indexes",
            "Expected output begins with: Gold"
          ]
        },
        {
          "id": "u3t16p02",
          "kind": "code",
          "title": "Taxed prices",
          "brief": "Add 5 to every item in [10,20,30] with a comprehension.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[15, 25, 35]"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[.*for\\s+\\w+\\s+in",
              "message": "Use a list comprehension"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a list comprehension",
            "Expected output begins with: [15, 25, 35]"
          ]
        },
        {
          "id": "u3t16p03",
          "kind": "code",
          "title": "String comprehension",
          "brief": "Uppercase [hello,world] with a comprehension.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['HELLO', 'WORLD']"
            },
            {
              "type": "sourceIncludes",
              "value": ".upper()",
              "message": "Uppercase each word"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[.*for\\s+",
              "message": "Use a comprehension"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Uppercase each word",
            "Expected output begins with: ['HELLO', 'WORLD']"
          ]
        },
        {
          "id": "u3t16p04",
          "kind": "code",
          "title": "The filter",
          "brief": "Keep grades >=70 from [100,50,95,40].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[100, 95]"
            },
            {
              "type": "sourceIncludes",
              "value": "if ",
              "message": "Add a comprehension filter"
            },
            {
              "type": "sourceIncludes",
              "value": ">= 70",
              "message": "Use the passing condition"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Add a comprehension filter",
            "Expected output begins with: [100, 95]"
          ]
        },
        {
          "id": "u3t16p05",
          "kind": "code",
          "title": "Skip two",
          "brief": "Create [0,1,3,4] from range(5) with a conditional comprehension.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[0, 1, 3, 4]"
            },
            {
              "type": "sourceIncludes",
              "value": "range(5)",
              "message": "Use range(5)"
            },
            {
              "type": "sourceIncludes",
              "value": "!= 2",
              "message": "Filter out 2"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use range(5)",
            "Expected output begins with: [0, 1, 3, 4]"
          ]
        },
        {
          "id": "u3t16p06",
          "kind": "code",
          "title": "Mini build - matrix report",
          "brief": "For [[1,2,3],[4,5,6]], print 6, row sums [6,15], and flattened [1,2,3,4,5,6].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Target: 6\nRow sums: [6, 15]\nFlat: [1, 2, 3, 4, 5, 6]"
            },
            {
              "type": "sourceIncludes",
              "value": "[1][2]",
              "message": "Read the target cell"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "for\\s+",
              "count": 2,
              "message": "Use comprehensions for rows and flattening"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Read the target cell",
            "Expected output begins with: Target: 6"
          ]
        }
      ]
    },
    {
      "id": "u3cp04",
      "title": "Revision Checkpoint 4 - Lists",
      "summary": "Combine list operations, traversal, copying and comprehensions.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 4 - Lists</h4>\n<p>This checkpoint consolidates all six list sections from the source.</p>\n<h4>The real-world analogy: A collection-management control room</h4>\n<p>This checkpoint connects creation, slicing, dynamic methods, sorting, traversal, copying, nested lists and comprehensions.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"A complete list workflow\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"63.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">create</text><path class=\"arrow\" d=\"M108 85 H129\"/><circle cx=\"113\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"112;125;112\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"134\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"179.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">slice / index</text><path class=\"arrow\" d=\"M224 85 H245\"/><circle cx=\"229\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"228;241;228\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"250\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"295.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">edit</text><path class=\"arrow\" d=\"M340 85 H361\"/><circle cx=\"345\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"344;357;344\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"366\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"411.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">sort</text><path class=\"arrow\" d=\"M456 85 H477\"/><circle cx=\"461\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"460;473;460\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"482\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"527.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">copy</text><path class=\"arrow\" d=\"M572 85 H593\"/><circle cx=\"577\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"576;589;576\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"598\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"643.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">comprehension</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">A complete list workflow</text></svg>\n<h4>Choose the right operation</h4><table><tr><th>Goal</th><th>Tool</th></tr><tr><td>Read a position</td><td>indexing</td></tr><tr><td>Read a range</td><td>slicing</td></tr><tr><td>Add/remove</td><td>list methods</td></tr><tr><td>Order</td><td>sort or sorted</td></tr><tr><td>Transform many</td><td>loop or comprehension</td></tr><tr><td>Protect original</td><td>copy()</td></tr></table>\n<h4>Complete workflow</h4><pre><code>scores = [70,95,80]\ndraft = scores.copy()\ndraft.append(88)\ndraft.sort(reverse=True)\npassing = [x for x in draft if x &gt;= 75]\nprint(passing)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>a=[1,2]\nb=a.copy()\nb.append(3)\nprint(a)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[1,2]</button><button data-o=\"1\">[1,2,3]</button><button data-o=\"2\">Error</button><button data-o=\"3\">[]</button></div><p class=\"w__why\">copy creates a separate top-level list.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >items</button><button >.</button><button >extend(</button><button data-bad>\"A\"</button><button >)</button></div><p class=\"w__why\">extend iterates the argument. A plain string would add its characters; use append(\"A\") for one item.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>append</code></button><button data-pair=\"p1\"><code>extend</code></button><button data-pair=\"p2\"><code>copy</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">independent top-level list</button><button data-pair=\"p1\">many items</button><button data-pair=\"p0\">one item</button></div></div><p class=\"w__why\">Method choice prevents subtle collection bugs.</p></div>\n",
      "mcqs": [
        {
          "q": "Which operation protects the original before edits?",
          "options": [
            "alias assignment",
            "copy()",
            "clear()",
            "remove()"
          ],
          "answer": 1,
          "why": "copy creates a separate list."
        },
        {
          "q": "Which tool numbers items during traversal?",
          "options": [
            "zip",
            "enumerate",
            "sort",
            "index only"
          ],
          "answer": 1,
          "why": "enumerate yields index/value pairs."
        },
        {
          "q": "Which syntax filters a comprehension?",
          "options": [
            "if after the iterable",
            "else before list",
            "remove()",
            "filter keyword only"
          ],
          "answer": 0,
          "why": "The condition follows the iterable."
        },
        {
          "q": "What does extend(\"AB\") do?",
          "options": [
            "Adds one string item",
            "Adds A and B as separate items",
            "Raises error",
            "Clears list"
          ],
          "answer": 1,
          "why": "extend iterates its argument."
        }
      ],
      "tasks": [
        {
          "id": "u3cp04p01",
          "kind": "code",
          "title": "Checkpoint - slice and edit",
          "brief": "From [A,B,C,D,E], copy B,C,D, replace C with X, and print the new list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['B', 'X', 'D']"
            },
            {
              "type": "sourceIncludes",
              "value": "[1:4]",
              "message": "Slice the middle"
            },
            {
              "type": "sourceIncludes",
              "value": "[1] = \"X\"",
              "message": "Edit the copied mini-list"
            }
          ],
          "level": "Revision Checkpoint - Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Slice the middle",
            "Expected output begins with: ['B', 'X', 'D']"
          ]
        },
        {
          "id": "u3cp04p02",
          "kind": "code",
          "title": "Checkpoint - safe sort",
          "brief": "Use sorted() on [3,1,2], then print original and sorted.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[3, 1, 2]\n[1, 2, 3]"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Create a sorted copy"
            }
          ],
          "level": "Revision Checkpoint - Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create a sorted copy",
            "Expected output begins with: [3, 1, 2]"
          ]
        },
        {
          "id": "u3cp04p03",
          "kind": "code",
          "title": "Checkpoint - numbered pairs",
          "brief": "Zip [Ana,Bob] with [81,92] and enumerate from 1 to print 1. Ana=81 and 2. Bob=92.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1. Ana=81\n2. Bob=92"
            },
            {
              "type": "sourceIncludes",
              "value": "zip(",
              "message": "Pair the lists"
            },
            {
              "type": "sourceIncludes",
              "value": "enumerate(",
              "message": "Number the pairs"
            }
          ],
          "level": "Revision Checkpoint - Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Pair the lists",
            "Expected output begins with: 1. Ana=81"
          ]
        },
        {
          "id": "u3cp04p04",
          "kind": "code",
          "title": "Checkpoint - safe clone",
          "brief": "Clone [draft,review], append publish only to the clone, then print both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Base: ['draft', 'review']\nCopy: ['draft', 'review', 'publish']"
            },
            {
              "type": "sourceIncludes",
              "value": ".copy()",
              "message": "Clone the base list"
            }
          ],
          "level": "Revision Checkpoint - Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Clone the base list",
            "Expected output begins with: Base: ['draft', 'review']"
          ]
        },
        {
          "id": "u3cp04p05",
          "kind": "code",
          "title": "Checkpoint mini build - gradebook",
          "brief": "For [[Asha,88],[Ben,95],[Cara,91]], sort by score descending and print names of students scoring >=90.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Ben: 95\nCara: 91"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort records"
            },
            {
              "type": "sourceIncludes",
              "value": "lambda",
              "message": "Sort by the score field"
            },
            {
              "type": "sourceIncludes",
              "value": ">= 90",
              "message": "Filter passing scores"
            }
          ],
          "level": "Revision Checkpoint - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Sort records",
            "Expected output begins with: Ben: 95"
          ]
        }
      ]
    },
    {
      "id": "u3t17",
      "title": "Tuples - Creation, Single Items and Access",
      "summary": "Create immutable ordered records and access them safely.",
      "notebookLM": "",
      "notes": "\n<h4>Tuples Part 1 - The Immutable List</h4>\n<p>The source introduces tuples, immutability, creation, the single-element comma, indexing and slicing.</p>\n<h4>The real-world analogy: A printed menu versus a chalkboard</h4>\n<p>A list is a changeable chalkboard. A tuple is a laminated record: ordered and indexable, but protected from item replacement, insertion or deletion.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Tuples protect ordered records\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"91.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">ordered</text><text x=\"91.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">record</text><path class=\"arrow\" d=\"M164 85 H185\"/><circle cx=\"169\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"168;181;168\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"190\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"263.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">parentheses</text><text x=\"263.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">and commas</text><path class=\"arrow\" d=\"M336 85 H357\"/><circle cx=\"341\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"340;353;340\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"362\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"435.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">index / slice</text><path class=\"arrow\" d=\"M508 85 H529\"/><circle cx=\"513\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"512;525;512\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"534\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"607.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">immutable</text><text x=\"607.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">protection</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Tuples protect ordered records</text></svg>\n<h4>Creating tuples</h4><p>Tuples are commonly written with parentheses. They may contain mixed data types.</p><h4>The single-item trap</h4><p><code>(5)</code> is an integer in parentheses. <code>(5,)</code> is a one-item tuple because the comma creates the tuple.</p><h4>Access and slicing</h4><p>Positive indexes, negative indexes and slices follow the same sequence rules as strings and lists.</p>\n<h4>Create tuples</h4><pre><code>days = (\"Monday\", \"Tuesday\", \"Wednesday\")\nuser_data = (\"Alice\", 25, True)\nprint(days)</code></pre><h4>Single item</h4><pre><code>real_tuple = (5,)\nprint(type(real_tuple))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>single = (100,)\nprint(type(single).__name__)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">int</button><button data-o=\"1\">tuple</button><button data-o=\"2\">list</button><button data-o=\"3\">set</button></div><p class=\"w__why\">The trailing comma makes a one-item tuple.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >single</button><button >=</button><button >(</button><button >100</button><button data-bad>)</button></div><p class=\"w__why\">Without a comma, parentheses only group the integer. Use (100,).</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>()</code></button><button data-pair=\"p1\"><code>(5,)</code></button><button data-pair=\"p2\"><code>data[-1]</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">last tuple item</button><button data-pair=\"p1\">single-item tuple</button><button data-pair=\"p0\">empty tuple</button></div></div><p class=\"w__why\">Tuple syntax relies on commas and uses normal sequence indexing.</p></div>\n",
      "mcqs": [
        {
          "q": "Which symbols commonly display a tuple?",
          "options": [
            "[]",
            "()",
            "{}",
            "quotes"
          ],
          "answer": 1,
          "why": "Tuples are usually shown with parentheses."
        },
        {
          "q": "What is the main difference from lists?",
          "options": [
            "Tuples only hold numbers",
            "Tuples are immutable",
            "No difference",
            "Lists are immutable"
          ],
          "answer": 1,
          "why": "Tuples cannot be edited in place."
        },
        {
          "q": "How do you create one-item tuple Apple?",
          "options": [
            "(\"Apple\")",
            "\"Apple\"",
            "[\"Apple\"]",
            "(\"Apple\",)"
          ],
          "answer": 3,
          "why": "The comma is required."
        },
        {
          "q": "Can tuples hold mixed types?",
          "options": [
            "No",
            "Yes",
            "Only strings and numbers",
            "Only immutable values"
          ],
          "answer": 1,
          "why": "A tuple may contain different object types."
        }
      ],
      "tasks": [
        {
          "id": "u3t17p01",
          "kind": "code",
          "title": "Create months",
          "brief": "Create and print (January, February, March).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "('January', 'February', 'March')"
            },
            {
              "type": "sourceIncludes",
              "value": "(",
              "message": "Use tuple syntax"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use tuple syntax",
            "Expected output begins with: ('January', 'February', 'March')"
          ]
        },
        {
          "id": "u3t17p02",
          "kind": "code",
          "title": "Single-item trap",
          "brief": "Create (100,) and print its type name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "tuple"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\(100\\s*,\\s*\\)",
              "message": "Use the trailing comma"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use the trailing comma",
            "Expected output begins with: tuple"
          ]
        },
        {
          "id": "u3t17p03",
          "kind": "code",
          "title": "Access hero stat",
          "brief": "Print 100 from (Batman,100,85.5).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100"
            },
            {
              "type": "sourceIncludes",
              "value": "[1]",
              "message": "Use index 1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use index 1",
            "Expected output begins with: 100"
          ]
        },
        {
          "id": "u3t17p04",
          "kind": "code",
          "title": "Negative grab",
          "brief": "Print 85.5 using a negative index.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "85.5"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1]",
              "message": "Use -1"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use -1",
            "Expected output begins with: 85.5"
          ]
        },
        {
          "id": "u3t17p05",
          "kind": "code",
          "title": "Tuple slice",
          "brief": "Extract Orange, Yellow, Green from the colour tuple.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "('Orange', 'Yellow', 'Green')"
            },
            {
              "type": "sourceIncludes",
              "value": "[1:4]",
              "message": "Use a tuple slice"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a tuple slice",
            "Expected output begins with: ('Orange', 'Yellow', 'Green')"
          ]
        },
        {
          "id": "u3t17p06",
          "kind": "code",
          "title": "Mini build - coordinate record",
          "brief": "Create point=(12.5,77.25,\"Warehouse\") and print Latitude, Longitude and Label on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Latitude: 12.5\nLongitude: 77.25\nLabel: Warehouse"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "point\\[",
              "count": 3,
              "message": "Read all tuple fields"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Read all tuple fields",
            "Expected output begins with: Latitude: 12.5"
          ]
        }
      ]
    },
    {
      "id": "u3t18",
      "title": "Tuples - Immutability, Packing, Unpacking and Swapping",
      "summary": "Protect records and assign several values elegantly.",
      "notebookLM": "",
      "notes": "\n<h4>Tuples Part 2 - Packing, Unpacking and Immutability</h4>\n<p>The source proves immutability, explains packing/unpacking, matching counts, and the variable-swap trick.</p>\n<h4>The real-world analogy: Unpacking a grocery bag</h4>\n<p>Packing combines values into one tuple. Unpacking assigns those values to separate variables in one statement. The variable count must match the item count.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Packing and unpacking move data cleanly\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"91.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">pack</text><text x=\"91.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">values</text><path class=\"arrow\" d=\"M164 85 H185\"/><circle cx=\"169\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"168;181;168\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"190\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"263.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">tuple</text><text x=\"263.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">record</text><path class=\"arrow\" d=\"M336 85 H357\"/><circle cx=\"341\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"340;353;340\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"362\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"435.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">unpack</text><text x=\"435.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">variables</text><path class=\"arrow\" d=\"M508 85 H529\"/><circle cx=\"513\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"512;525;512\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"534\" y=\"48\" width=\"146\" height=\"74\" rx=\"10\"/><text x=\"607.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">swap</text><text x=\"607.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">positions</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Packing and unpacking move data cleanly</text></svg>\n<h4>The hard immutability rule</h4><p>Tuple item assignment and append are unavailable. Convert to a list when genuine changes are required.</p><h4>Packing</h4><p>Commas can create a tuple even without parentheses: <code>box = \"Hat\", \"Socks\"</code>.</p><h4>Unpacking</h4><p><code>name, age, city = user_info</code> assigns one tuple item to each variable.</p><h4>Variable swapping</h4><p><code>a, b = b, a</code> packs the right side and unpacks it into the left side.</p>\n<h4>Unpack a profile</h4><pre><code>user_info = (\"John\", 25, \"New York\")\nname, age, city = user_info\nprint(name)\nprint(age)</code></pre><h4>Swap values</h4><pre><code>a = \"Milk\"\nb = \"Juice\"\na, b = b, a\nprint(a, b)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>a=\"Milk\"\nb=\"Juice\"\na,b=b,a\nprint(a)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Milk</button><button data-o=\"1\">Juice</button><button data-o=\"2\">(Juice,Milk)</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The values swap, so a becomes Juice.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button data-bad>x, y</button><button >=</button><button >(</button><button >10,</button><button >20,</button><button >30</button><button >)</button></div><p class=\"w__why\">Two variables cannot unpack three items unless starred unpacking is used. The source rule requires matching counts.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\">packing</button><button data-pair=\"p1\">unpacking</button><button data-pair=\"p2\">swap</button></div><div class=\"w-match__col\"><button data-pair=\"p2\">a, b = b, a</button><button data-pair=\"p1\">tuple values to variables</button><button data-pair=\"p0\">many values to one tuple</button></div></div><p class=\"w__why\">Tuple syntax makes multiple assignment compact and readable.</p></div>\n",
      "mcqs": [
        {
          "q": "What happens after data[0]=5 on a tuple?",
          "options": [
            "It changes",
            "TypeError",
            "New list",
            "Prints 5"
          ],
          "answer": 1,
          "why": "Tuples do not support item assignment."
        },
        {
          "q": "What is tuple unpacking?",
          "options": [
            "Deleting tuple",
            "Converting to string",
            "Assigning items to separate variables",
            "Removing parentheses"
          ],
          "answer": 2,
          "why": "Unpacking spreads values across names."
        },
        {
          "q": "What happens when two variables unpack three items?",
          "options": [
            "Last item deleted",
            "Both get tuple",
            "ValueError",
            "First and last only"
          ],
          "answer": 2,
          "why": "Counts must match in the source pattern."
        },
        {
          "q": "What does a,b=b,a do?",
          "options": [
            "Adds values",
            "Swaps values",
            "Creates list",
            "Sorts variables"
          ],
          "answer": 1,
          "why": "It uses packing and unpacking."
        }
      ],
      "tasks": [
        {
          "id": "u3t18p01",
          "kind": "code",
          "title": "Immutability demonstration",
          "brief": "Create lockbox=(Gold,Silver) and print Tuples are locked without attempting an illegal assignment.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Tuples are locked"
            },
            {
              "type": "sourceIncludes",
              "value": "(",
              "message": "Create the tuple"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create the tuple",
            "Expected output begins with: Tuples are locked"
          ]
        },
        {
          "id": "u3t18p02",
          "kind": "code",
          "title": "Pack without parentheses",
          "brief": "Assign 100,200,300 without brackets and print the type name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "tuple"
            },
            {
              "type": "sourceRegex",
              "pattern": "my_data\\s*=\\s*100\\s*,\\s*200\\s*,\\s*300",
              "message": "Pack with commas"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Pack with commas",
            "Expected output begins with: tuple"
          ]
        },
        {
          "id": "u3t18p03",
          "kind": "code",
          "title": "Unpack dimensions",
          "brief": "Unpack (50,100,20) and print width.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100"
            },
            {
              "type": "sourceRegex",
              "pattern": "length\\s*,\\s*width\\s*,\\s*height\\s*=",
              "message": "Unpack into three names"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Unpack into three names",
            "Expected output begins with: 100"
          ]
        },
        {
          "id": "u3t18p04",
          "kind": "code",
          "title": "Profile unpack",
          "brief": "Unpack (admin,password123) and print the requested sentence.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "User admin has the password password123"
            },
            {
              "type": "sourceRegex",
              "pattern": "username\\s*,\\s*password\\s*=",
              "message": "Unpack the profile"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Unpack the profile",
            "Expected output begins with: User admin has the password password123"
          ]
        },
        {
          "id": "u3t18p05",
          "kind": "code",
          "title": "Magic swap",
          "brief": "Swap first=Last and last=First, then print them on one line.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "First Last"
            },
            {
              "type": "sourceRegex",
              "pattern": "first\\s*,\\s*last\\s*=\\s*last\\s*,\\s*first",
              "message": "Use tuple swapping"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use tuple swapping",
            "Expected output begins with: First Last"
          ]
        },
        {
          "id": "u3t18p06",
          "kind": "code",
          "title": "Mini build - unpacked record",
          "brief": "Unpack (S101,Mira,88) and print ID, Name and Score lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ID: S101\nName: Mira\nScore: 88"
            },
            {
              "type": "sourceRegex",
              "pattern": "student_id\\s*,\\s*name\\s*,\\s*score\\s*=",
              "message": "Unpack all record fields"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Unpack all record fields",
            "Expected output begins with: ID: S101"
          ]
        }
      ]
    },
    {
      "id": "u3t19",
      "title": "Tuples - Conversions, Returns, Generators and Records",
      "summary": "Convert deliberately and use tuples for returned or ordered data.",
      "notebookLM": "",
      "notes": "\n<h4>Tuples Part 3 - Conversions and Advanced Uses</h4>\n<p>The source covers list/tuple conversion, tuple return values, generator expressions, tuple(), next(), and ordered records.</p>\n<h4>The real-world analogy: Scanning and relaminating a menu</h4>\n<p>When a tuple truly must change, convert it to a list, edit, then convert back. Tuples also represent multiple return values and ordered records.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Convert only when controlled changes are required\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">tuple</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">list()</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">edit</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">tuple()</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">protected</text><text x=\"626.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">record</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Convert only when controlled changes are required</text></svg>\n<h4>Convert between list and tuple</h4><p><code>list(tuple_value)</code> creates a mutable list. <code>tuple(list_value)</code> creates a new immutable tuple.</p><h4>Returning several values</h4><p>A function returns one object. Comma-separated return values are packed into a tuple and may be unpacked by the caller.</p><h4>Generator expressions</h4><p>Parenthesised comprehensions create generator objects, not tuples. Wrap them with <code>tuple()</code> to materialise the values.</p><h4>Ordered records</h4><p>Coordinates and RGB colours benefit from predictable, protected ordering.</p>\n<h4>Convert and edit</h4><pre><code>menu = (\"Soup\", \"Salad\")\neditable = list(menu)\neditable.append(\"Sandwich\")\nmenu = tuple(editable)\nprint(menu)</code></pre><h4>Return a tuple</h4><pre><code>def get_user_data():\n    return \"Alice\", 99\nname, score = get_user_data()</code></pre><h4>Force a tuple</h4><pre><code>solid = tuple(x * 10 for x in range(3))\nprint(solid)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>g = (x for x in range(3))\nprint(type(g).__name__)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">tuple</button><button data-o=\"1\">generator</button><button data-o=\"2\">list</button><button data-o=\"3\">range</button></div><p class=\"w__why\">Parentheses create a generator expression here, not a tuple.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >menu</button><button data-bad>.</button><button >append(</button><button >\"Soup\"</button><button >)</button></div><p class=\"w__why\">Tuples have no append method. Convert to a list first.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>list(t)</code></button><button data-pair=\"p1\"><code>tuple(xs)</code></button><button data-pair=\"p2\"><code>return a, b</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">returns one packed tuple</button><button data-pair=\"p1\">immutable tuple</button><button data-pair=\"p0\">editable copy</button></div></div><p class=\"w__why\">Conversions and tuple returns support protected records.</p></div>\n",
      "mcqs": [
        {
          "q": "How can a new item be added to tuple data?",
          "options": [
            "append directly",
            "Never under any circumstances",
            "Convert to list, edit, convert back",
            "Add an integer"
          ],
          "answer": 2,
          "why": "The conversion workflow creates a new tuple."
        },
        {
          "q": "Why can a function return several values?",
          "options": [
            "It packs them into one tuple",
            "Tuples look better",
            "To slow down",
            "Functions cannot use tuples"
          ],
          "answer": 0,
          "why": "One tuple object carries multiple fields."
        },
        {
          "q": "What does (x for x in range(10)) create?",
          "options": [
            "Tuple",
            "Generator object",
            "List",
            "String"
          ],
          "answer": 1,
          "why": "It is lazy."
        },
        {
          "q": "Why suit coordinates?",
          "options": [
            "Tuples are unordered",
            "Order matters and values are protected",
            "Only integers allowed",
            "Automatic maps"
          ],
          "answer": 1,
          "why": "Coordinates are ordered records."
        }
      ],
      "tasks": [
        {
          "id": "u3t19p01",
          "kind": "code",
          "title": "Lamination trick",
          "brief": "Convert (10,20,30) to a list, change 20 to 99, convert back and print.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "(10, 99, 30)"
            },
            {
              "type": "sourceIncludes",
              "value": "list(",
              "message": "Convert to list"
            },
            {
              "type": "sourceIncludes",
              "value": "tuple(",
              "message": "Convert back to tuple"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Convert to list",
            "Expected output begins with: (10, 99, 30)"
          ]
        },
        {
          "id": "u3t19p02",
          "kind": "code",
          "title": "Tuple return",
          "brief": "Return Red,Blue from a function, unpack and print both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Red\nBlue"
            },
            {
              "type": "sourceIncludes",
              "value": "return \"Red\", \"Blue\"",
              "message": "Return two packed values"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Return two packed values",
            "Expected output begins with: Red"
          ]
        },
        {
          "id": "u3t19p03",
          "kind": "code",
          "title": "Force the tuple",
          "brief": "Use tuple(x for x in range(5)) and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "(0, 1, 2, 3, 4)"
            },
            {
              "type": "sourceIncludes",
              "value": "tuple(",
              "message": "Materialise the generator"
            },
            {
              "type": "sourceIncludes",
              "value": "range(5)",
              "message": "Generate 0 through 4"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Materialise the generator",
            "Expected output begins with: (0, 1, 2, 3, 4)"
          ]
        },
        {
          "id": "u3t19p04",
          "kind": "code",
          "title": "Database records",
          "brief": "Traverse [(John,20),(Alice,25),(Bob,30)] and print each tuple.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "('John', 20)\n('Alice', 25)\n('Bob', 30)"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+\\w+\\s+in\\s+database",
              "message": "Traverse the record list"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Traverse the record list",
            "Expected output begins with: ('John', 20)"
          ]
        },
        {
          "id": "u3t19p05",
          "kind": "code",
          "title": "Unpacking loop",
          "brief": "Unpack each database record in the loop and print name is age years old.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "John is 20 years old\nAlice is 25 years old\nBob is 30 years old"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+name\\s*,\\s*age\\s+in",
              "message": "Unpack in the loop header"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Unpack in the loop header",
            "Expected output begins with: John is 20 years old"
          ]
        },
        {
          "id": "u3t19p06",
          "kind": "code",
          "title": "Mini build - RGB converter",
          "brief": "Create RGB=(255,128,0), unpack it, and print Hex: #ff8000.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hex: #ff8000"
            },
            {
              "type": "sourceRegex",
              "pattern": "r\\s*,\\s*g\\s*,\\s*b\\s*=",
              "message": "Unpack RGB values"
            },
            {
              "type": "sourceIncludes",
              "value": ":02x",
              "message": "Format each byte as two hex digits"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Unpack RGB values",
            "Expected output begins with: Hex: #ff8000"
          ]
        }
      ]
    },
    {
      "id": "u3t20",
      "title": "Practical Strings - Reversal and Palindrome Checking",
      "summary": "Build reusable clean-transform-compare programs.",
      "notebookLM": "",
      "notes": "\n<h4>Practical Programs - Reverse and Palindrome</h4>\n<p>The source practical programs provide thought process, pseudocode, functions and explanations for reversing strings and palindrome checking.</p>\n<h4>The real-world analogy: A mirror test</h4>\n<p>Reversing and palindrome checking combine slicing, cleaning and comparison. The process matters more than memorising one line.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"The palindrome pipeline\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">input</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">clean</text><text x=\"212.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">lower / spaces</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">reverse</text><text x=\"350.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">[::-1]</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">compare</text><text x=\"488.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">==</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">True / False</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">The palindrome pipeline</text></svg>\n<h4>Reverse a string</h4><ol><li>Take the full string.</li><li>Use a step of -1.</li><li>Return the new reversed copy.</li></ol><h4>Check a palindrome</h4><ol><li>Normalise case.</li><li>Optionally remove spaces.</li><li>Reverse the cleaned text.</li><li>Compare the two strings.</li></ol><p>The source program uses functions. Functions are introduced more deeply in Unit 4, but here they package reusable logic.</p>\n<h4>Reverse function</h4><pre><code>def reverse_string(text):\n    return text[::-1]\nprint(reverse_string(\"Python\"))</code></pre><h4>Palindrome function</h4><pre><code>def is_palindrome(text):\n    clean_text = text.lower()\n    return clean_text == clean_text[::-1]\nprint(is_palindrome(\"Racecar\"))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>text = \"Racecar\".lower()\nprint(text == text[::-1])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">False</button><button data-o=\"2\">Error</button></div><p class=\"w__why\">After lowercasing, racecar equals its reverse.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >return</button><button >text</button><button data-bad>[::1]</button></div><p class=\"w__why\">A step of +1 keeps the original order. Use [::-1] to reverse.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>[::-1]</code></button><button data-pair=\"p1\"><code>lower()</code></button><button data-pair=\"p2\"><code>==</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">compare original and reverse</button><button data-pair=\"p1\">case-insensitive comparison</button><button data-pair=\"p0\">reverse a sequence</button></div></div><p class=\"w__why\">The program is a clean-transform-compare workflow.</p></div>\n",
      "mcqs": [
        {
          "q": "What is the quickest slicing reversal?",
          "options": [
            "[0:6:-1]",
            "[::-1]",
            "reverse() on string",
            "[-1:0]"
          ],
          "answer": 1,
          "why": "A negative step traverses backward."
        },
        {
          "q": "Why lowercase before palindrome comparison?",
          "options": [
            "To shorten text",
            "To make comparison case-insensitive",
            "To remove vowels",
            "To sort letters"
          ],
          "answer": 1,
          "why": "Racecar and racecar should match."
        },
        {
          "q": "What operator compares the strings?",
          "options": [
            "=",
            "==",
            "in",
            "is only"
          ],
          "answer": 1,
          "why": "== tests equality."
        },
        {
          "q": "How can taco cat be supported?",
          "options": [
            "Add a space",
            "Remove spaces during cleaning",
            "Use title()",
            "Use count()"
          ],
          "answer": 1,
          "why": "Normalise spaces before reversal."
        }
      ],
      "tasks": [
        {
          "id": "u3t20p01",
          "kind": "code",
          "title": "Reverse Python",
          "brief": "Use slicing to print nohtyP.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "nohtyP"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Reverse with slicing"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Reverse with slicing",
            "Expected output begins with: nohtyP"
          ]
        },
        {
          "id": "u3t20p02",
          "kind": "code",
          "title": "Palindrome Racecar",
          "brief": "Print True for Racecar using lowercase cleaning.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": ".lower()",
              "message": "Normalise case"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Reverse the cleaned text"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Normalise case",
            "Expected output begins with: True"
          ]
        },
        {
          "id": "u3t20p03",
          "kind": "code",
          "title": "Not a palindrome",
          "brief": "Print False for hello.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": "==",
              "message": "Compare the two strings"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Compare the two strings",
            "Expected output begins with: False"
          ]
        },
        {
          "id": "u3t20p04",
          "kind": "code",
          "title": "Spaced palindrome",
          "brief": "Print True for taco cat after removing spaces.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": ".replace(\" \", \"\")",
              "message": "Remove spaces"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Reverse the cleaned text"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Remove spaces",
            "Expected output begins with: True"
          ]
        },
        {
          "id": "u3t20p05",
          "kind": "code",
          "title": "Reusable reverse function",
          "brief": "Define <code>reverse_string(text)</code>, call it with <code>AbhyasLab</code> and print the reversed text.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "baLsayhbA"
            },
            {
              "type": "sourceRegex",
              "pattern": "def\\s+reverse_string",
              "message": "Define the function"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Return the reversed slice"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Define the function",
            "Expected output begins with: baLsayhbA"
          ]
        },
        {
          "id": "u3t20p06",
          "kind": "code",
          "title": "Mini build - mirror report",
          "brief": "For Never odd or even, remove spaces, lowercase, then print Clean: neveroddoreven, Reverse: neveroddoreven, Palindrome: True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Clean: neveroddoreven\nReverse: neveroddoreven\nPalindrome: True"
            },
            {
              "type": "sourceIncludes",
              "value": ".lower()",
              "message": "Lowercase the text"
            },
            {
              "type": "sourceIncludes",
              "value": ".replace(",
              "message": "Remove spaces"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Create the reverse"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Lowercase the text",
            "Expected output begins with: Clean: neveroddoreven"
          ]
        }
      ]
    },
    {
      "id": "u3t21",
      "title": "Practical Strings - Counters, Frequency and Duplicate Removal",
      "summary": "Analyse text with accumulators, dictionaries and membership guards.",
      "notebookLM": "",
      "notes": "\n<h4>Practical Programs - Counting, Frequency and Duplicates</h4>\n<p>The source practical programs cover vowel/consonant counting, character-frequency dictionaries, duplicate removal, word frequency and vowel removal.</p>\n<h4>The real-world analogy: A tally sheet and a club bouncer</h4>\n<p>Accumulators count known categories. Dictionaries count unknown keys. A membership guard prevents repeated characters from entering a new result string.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Counting and uniqueness use controlled accumulators\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"82.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">traverse</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">validate</text><text x=\"212.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">isalpha</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">classify</text><text x=\"350.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">vowel?</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">update</text><text x=\"488.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">counter / dict</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">build</text><text x=\"626.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">result</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Counting and uniqueness use controlled accumulators</text></svg>\n<h4>Vowels and consonants</h4><p>Loop through lowercase text, use <code>isalpha()</code> to ignore punctuation, then test membership in <code>aeiou</code>.</p><h4>Character frequency</h4><p>A dictionary connects each character key to a numeric count. If a key exists, increment it; otherwise initialise it to 1.</p><h4>Remove duplicate characters</h4><p>Because strings are immutable, build a new result. Append a character only when it is not already present.</p><h4>Word frequency</h4><p>Split the sentence first, then apply the same dictionary tally to words.</p>\n<h4>Vowels and consonants</h4><pre><code>text = \"Hello World!\"\nvowels = \"aeiou\"\nv = c = 0\nfor char in text.lower():\n    if char.isalpha():\n        if char in vowels: v += 1\n        else: c += 1\nprint(v, c)</code></pre><h4>Frequency dictionary</h4><pre><code>freq = {}\nfor char in \"banana\":\n    freq[char] = freq.get(char, 0) + 1\nprint(freq)</code></pre><h4>Remove duplicates</h4><pre><code>result = \"\"\nfor char in \"programming\":\n    if char not in result:\n        result += char\nprint(result)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>result=\"\"\nfor ch in \"banana\":\n    if ch not in result:\n        result += ch\nprint(result)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">banana</button><button data-o=\"1\">ban</button><button data-o=\"2\">bana</button><button data-o=\"3\">bn</button></div><p class=\"w__why\">Only the first occurrence of each character is added.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >if</button><button >char</button><button data-bad>not</button><button >result</button><button >:</button></div><p class=\"w__why\">Membership syntax needs the word in: if char not in result.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\">counter variable</button><button data-pair=\"p1\">dictionary</button><button data-pair=\"p2\"><code>not in</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">keep only first occurrence</button><button data-pair=\"p1\">count many unknown keys</button><button data-pair=\"p0\">known category total</button></div></div><p class=\"w__why\">Choose the data structure according to what must be counted.</p></div>\n",
      "mcqs": [
        {
          "q": "Why use isalpha() in the counter?",
          "options": [
            "To uppercase",
            "To ignore punctuation and spaces",
            "To sort text",
            "To create a list"
          ],
          "answer": 1,
          "why": "Only letters should be classified."
        },
        {
          "q": "Why use a dictionary for frequency?",
          "options": [
            "Lists cannot hold strings",
            "Key-value pairs connect item to count",
            "Dictionaries sort automatically",
            "They are immutable"
          ],
          "answer": 1,
          "why": "Each character or word becomes a key."
        },
        {
          "q": "Why build a new duplicate-free string?",
          "options": [
            "Strings are immutable",
            "delete is too slow",
            "Empty strings save memory only",
            "Original can be edited"
          ],
          "answer": 0,
          "why": "Characters cannot be deleted in place."
        },
        {
          "q": "What should happen before word frequency?",
          "options": [
            "Reverse text",
            "split into words",
            "convert to array",
            "sort characters"
          ],
          "answer": 1,
          "why": "The loop must iterate words rather than characters."
        }
      ],
      "tasks": [
        {
          "id": "u3t21p01",
          "kind": "code",
          "title": "Vowel and consonant count",
          "brief": "Count Hello World! and print Vowels: 3, Consonants: 7.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Vowels: 3\nConsonants: 7"
            },
            {
              "type": "sourceIncludes",
              "value": ".isalpha()",
              "message": "Ignore non-letters"
            },
            {
              "type": "sourceIncludes",
              "value": "aeiou",
              "message": "Classify vowels"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Ignore non-letters",
            "Expected output begins with: Vowels: 3"
          ]
        },
        {
          "id": "u3t21p02",
          "kind": "code",
          "title": "Consonant counter",
          "brief": "Count consonants in Mississippi.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "7"
            },
            {
              "type": "sourceIncludes",
              "value": "not in \"aeiou\"",
              "message": "Ignore vowels"
            },
            {
              "type": "sourceRegex",
              "pattern": "count\\s*\\+=\\s*1",
              "message": "Increment the count"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Ignore vowels",
            "Expected output begins with: 7"
          ]
        },
        {
          "id": "u3t21p03",
          "kind": "code",
          "title": "Character frequency",
          "brief": "Print the frequency dictionary for banana.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{'b': 1, 'a': 3, 'n': 2}"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\{\\}",
              "message": "Start an empty dictionary"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[char\\]",
              "message": "Use the character as a key"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Start an empty dictionary",
            "Expected output begins with: {'b': 1, 'a': 3, 'n': 2}"
          ]
        },
        {
          "id": "u3t21p04",
          "kind": "code",
          "title": "Remove duplicates",
          "brief": "Remove repeated letters from programming.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "progamin"
            },
            {
              "type": "sourceIncludes",
              "value": "not in result",
              "message": "Keep only unseen characters"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Keep only unseen characters",
            "Expected output begins with: progamin"
          ]
        },
        {
          "id": "u3t21p05",
          "kind": "code",
          "title": "Word frequency",
          "brief": "Count words in apple banana apple.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{'apple': 2, 'banana': 1}"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Split into words"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[word\\]",
              "message": "Use words as dictionary keys"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Split into words",
            "Expected output begins with: {'apple': 2, 'banana': 1}"
          ]
        },
        {
          "id": "u3t21p06",
          "kind": "code",
          "title": "Vowel remover",
          "brief": "Remove vowels from beautiful.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "btfl"
            },
            {
              "type": "sourceIncludes",
              "value": "not in \"aeiou\"",
              "message": "Keep only non-vowels"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Keep only non-vowels",
            "Expected output begins with: btfl"
          ]
        },
        {
          "id": "u3t21p07",
          "kind": "code",
          "title": "Mini build - text analytics",
          "brief": "For Data structures are powerful, print Words: 4, Letters: 25, Vowels: 10, Unique letters: 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Words: 4\nLetters: 25\nVowels: 10\nUnique letters: 15"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Count words"
            },
            {
              "type": "sourceIncludes",
              "value": ".isalpha()",
              "message": "Count letters only"
            },
            {
              "type": "sourceIncludes",
              "value": "set(",
              "message": "Find unique letters"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Count words",
            "Expected output begins with: Words: 4"
          ]
        }
      ]
    },
    {
      "id": "u3cp05",
      "title": "Revision Checkpoint 5 - Choosing Core Data Structures",
      "summary": "Select and combine strings, arrays, lists, tuples and dictionaries.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint 5 - Core Data Structures</h4>\n<p>This checkpoint synthesises the complete Unit 3 source and the practical-program patterns.</p>\n<h4>The real-world analogy: A data-structure selection desk</h4>\n<p>The right structure depends on whether data must be text, flexible, typed, immutable, tabular or keyed.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Choose a data structure by the operations you need\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"74.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">string</text><text x=\"74.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">text</text><path class=\"arrow\" d=\"M130 85 H151\"/><circle cx=\"135\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"134;147;134\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"156\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"212.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">array</text><text x=\"212.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">typed numbers</text><path class=\"arrow\" d=\"M268 85 H289\"/><circle cx=\"273\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"272;285;272\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"294\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"350.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">list</text><text x=\"350.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">flexible items</text><path class=\"arrow\" d=\"M406 85 H427\"/><circle cx=\"411\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"410;423;410\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"432\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"488.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">tuple</text><text x=\"488.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">protected record</text><path class=\"arrow\" d=\"M544 85 H565\"/><circle cx=\"549\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"548;561;548\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"570\" y=\"48\" width=\"112\" height=\"74\" rx=\"10\"/><text x=\"626.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">dict</text><text x=\"626.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">key-value</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Choose a data structure by the operations you need</text></svg>\n<h4>Choose by behaviour</h4><table><tr><th>Need</th><th>Best starting choice</th></tr><tr><td>Text characters</td><td>string</td></tr><tr><td>Flexible ordered collection</td><td>list</td></tr><tr><td>Same-type numeric sequence</td><td>array</td></tr><tr><td>Protected ordered record</td><td>tuple</td></tr><tr><td>Key-to-value lookup</td><td>dictionary</td></tr></table><p>This source unit mainly develops strings, arrays, lists and tuples; the frequency practical introduces dictionaries as a tally tool.</p>\n<h4>Structure comparison</h4><pre><code>text = \"Python\"\nitems = [\"A\", 1, True]\npoint = (10, 20)\nfrequency = {\"a\": 3}\nprint(type(text).__name__, type(items).__name__, type(point).__name__, type(frequency).__name__)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>data = (1,2,3)\nprint(data[1])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">3</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Tuples are immutable but still indexable.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >scores</button><button >=</button><button >arr.array(</button><button >\"i\"</button><button >,</button><button >[90,</button><button data-bad>95.5</button><button >])</button></div><p class=\"w__why\">An integer array cannot contain the float 95.5.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\">list</button><button data-pair=\"p1\">tuple</button><button data-pair=\"p2\">array</button><button data-pair=\"p3\">dictionary</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">key-value lookup</button><button data-pair=\"p2\">same-type collection</button><button data-pair=\"p1\">immutable ordered record</button><button data-pair=\"p0\">mutable flexible collection</button></div></div><p class=\"w__why\">Behaviour is more important than bracket shape.</p></div>\n",
      "mcqs": [
        {
          "q": "Which structure is best for a protected coordinate?",
          "options": [
            "list",
            "tuple",
            "string",
            "array only"
          ],
          "answer": 1,
          "why": "Order matters and accidental edits should be prevented."
        },
        {
          "q": "Which structure mixes name, age and active status?",
          "options": [
            "integer array",
            "list",
            "raw string only",
            "range"
          ],
          "answer": 1,
          "why": "Lists can mix types."
        },
        {
          "q": "Which structure maps each character to its count?",
          "options": [
            "tuple",
            "dictionary",
            "array",
            "string"
          ],
          "answer": 1,
          "why": "Frequency needs key-value pairs."
        },
        {
          "q": "Which structure requires one element type?",
          "options": [
            "list",
            "array",
            "tuple",
            "dictionary"
          ],
          "answer": 1,
          "why": "Arrays are typed."
        }
      ],
      "tasks": [
        {
          "id": "u3cp05p01",
          "kind": "code",
          "title": "Checkpoint - structure names",
          "brief": "Create one string, list, tuple and dictionary, then print their type names on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "str\nlist\ntuple\ndict"
            },
            {
              "type": "sourceMinMatches",
              "pattern": "type\\(",
              "count": 4,
              "message": "Inspect four types"
            }
          ],
          "level": "Revision Checkpoint - Task 1",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Inspect four types",
            "Expected output begins with: str"
          ]
        },
        {
          "id": "u3cp05p02",
          "kind": "code",
          "title": "Checkpoint - list to tuple",
          "brief": "Convert [10,20,30] to a tuple and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "(10, 20, 30)"
            },
            {
              "type": "sourceIncludes",
              "value": "tuple(",
              "message": "Convert with tuple()"
            }
          ],
          "level": "Revision Checkpoint - Task 2",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Convert with tuple()",
            "Expected output begins with: (10, 20, 30)"
          ]
        },
        {
          "id": "u3cp05p03",
          "kind": "code",
          "title": "Checkpoint - typed versus flexible",
          "brief": "Create array [1,2,3] and list [1,\"two\",True], then print both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [1, 2, 3])\n[1, 'two', True]"
            },
            {
              "type": "sourceIncludes",
              "value": "arr.array",
              "message": "Create a typed array"
            }
          ],
          "level": "Revision Checkpoint - Task 3",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create a typed array",
            "Expected output begins with: array('i', [1, 2, 3])"
          ]
        },
        {
          "id": "u3cp05p04",
          "kind": "code",
          "title": "Checkpoint - record report",
          "brief": "Traverse [(S1,Asha,88),(S2,Ben,95)] and unpack each record.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "S1 | Asha | 88\nS2 | Ben | 95"
            },
            {
              "type": "sourceRegex",
              "pattern": "for\\s+student_id\\s*,\\s*name\\s*,\\s*score\\s+in",
              "message": "Unpack tuple records in the loop"
            }
          ],
          "level": "Revision Checkpoint - Task 4",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Unpack tuple records in the loop",
            "Expected output begins with: S1 | Asha | 88"
          ]
        },
        {
          "id": "u3cp05p05",
          "kind": "code",
          "title": "Checkpoint mini build - word analyser",
          "brief": "For level radar python, print palindromes as a list and word lengths as a dictionary.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Palindromes: ['level', 'radar']\nLengths: {'level': 5, 'radar': 5, 'python': 6}"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Split words"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Test palindromes"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\{.*for\\s+",
              "message": "Use a dictionary comprehension or loop"
            }
          ],
          "level": "Revision Checkpoint - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Split words",
            "Expected output begins with: Palindromes: ['level', 'radar']"
          ]
        }
      ]
    },
    {
      "id": "u3mini01",
      "title": "Guided Mini-Project - Text and Data Structure Lab",
      "summary": "Build a complete student-data report in eight tested stages.",
      "notebookLM": "",
      "notes": "\n<h4>Guided Mini-Project - Text and Data Structure Lab</h4>\n<p>The guided mini-project extends the source practical programs into a staged integrated application while preserving every source concept.</p>\n<h4>The real-world analogy: A multi-tool data laboratory</h4>\n<p>Build one deterministic program in eight stages. Each stage adds a tested capability using strings, arrays, lists, tuples and dictionaries.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Eight tested stages build one integrated data application\"><rect class=\"box\" x=\"18\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"63.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">clean</text><text x=\"63.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">text</text><path class=\"arrow\" d=\"M108 85 H129\"/><circle cx=\"113\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"112;125;112\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"134\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"179.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">split</text><text x=\"179.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">words</text><path class=\"arrow\" d=\"M224 85 H245\"/><circle cx=\"229\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"228;241;228\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"250\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"295.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">array</text><text x=\"295.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">scores</text><path class=\"arrow\" d=\"M340 85 H361\"/><circle cx=\"345\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"344;357;344\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"366\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"411.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">list</text><text x=\"411.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">sort</text><path class=\"arrow\" d=\"M456 85 H477\"/><circle cx=\"461\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"460;473;460\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"482\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"527.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">tuple</text><text x=\"527.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">record</text><path class=\"arrow\" d=\"M572 85 H593\"/><circle cx=\"577\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"576;589;576\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box box--dark\" x=\"598\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"643.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">dict</text><text x=\"643.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono on-dark\" style=\"font-size:11px\">frequency</text><path class=\"arrow\" d=\"M688 85 H709\"/><circle cx=\"693\" cy=\"85\" r=\"5\" class=\"accent\"><animate attributeName=\"cx\" values=\"692;705;692\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><rect class=\"box\" x=\"714\" y=\"48\" width=\"90\" height=\"74\" rx=\"10\"/><text x=\"759.0\" y=\"73.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">final</text><text x=\"759.0\" y=\"91.0\" text-anchor=\"middle\" class=\"mono \" style=\"font-size:11px\">report</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" class=\"lbl\">Eight tested stages build one integrated data application</text></svg>\n<h4>Project scenario</h4><p>A small training centre receives raw student records. Your program cleans names, analyses text, stores scores, calculates summaries and produces protected records.</p><h4>Eight-stage path</h4><ol><li>Clean one student name.</li><li>Split a sentence and count words.</li><li>Create and update a typed score array.</li><li>Sort a flexible score list.</li><li>Build an immutable student tuple.</li><li>Count word frequencies.</li><li>Detect palindromes.</li><li>Print one complete report.</li></ol><div class=\"callout\"><strong>Deterministic demo.</strong> The supplied values are fixed so every learner receives the same expected output and can debug one stage at a time.</div>\n<h4>Final report shape</h4><pre><code>TEXT AND DATA LAB\nStudent: Mira Sharma\nScores: 78, 88, 91\nAverage: 85.67\nTop score: 91\nWords: 4\nPalindromes: level, radar</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Read the explanation, predict the output, then run every coding task. Unit 3 becomes easy only when you manipulate the data yourself.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose before running the code.</p><pre><code>words = \"level python radar\".split()\nprint([w for w in words if w == w[::-1]])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">['level','radar']</button><button data-o=\"1\">['python']</button><button data-o=\"2\">[]</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">level and radar equal their reverses.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span><p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >record</button><button >=</button><button data-bad>[</button><button >\"S1\",</button><button >\"Mira\",</button><button >88</button><button >]</button></div><p class=\"w__why\">A protected record should use a tuple with parentheses.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect each Python idea to its meaning.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\">clean student name</button><button data-pair=\"p1\">typed scores</button><button data-pair=\"p2\">protected record</button><button data-pair=\"p3\">frequency table</button></div><div class=\"w-match__col\"><button data-pair=\"p3\">dictionary</button><button data-pair=\"p2\">tuple</button><button data-pair=\"p1\">array</button><button data-pair=\"p0\">strip + title</button></div></div><p class=\"w__why\">The mini-project combines structures according to their strengths.</p></div>\n",
      "mcqs": [
        {
          "q": "Which structure should store same-type numeric scores?",
          "options": [
            "string",
            "array",
            "tuple only",
            "dictionary"
          ],
          "answer": 1,
          "why": "A typed array fits numeric scores."
        },
        {
          "q": "Which operation cleans a student name?",
          "options": [
            "strip().title()",
            "pop().sort()",
            "isdigit() only",
            "tuple()"
          ],
          "answer": 0,
          "why": "Trim edges and normalise display case."
        },
        {
          "q": "Which structure protects one final record?",
          "options": [
            "list",
            "tuple",
            "string only",
            "set"
          ],
          "answer": 1,
          "why": "Tuples are immutable ordered records."
        },
        {
          "q": "Which tool counts repeated words?",
          "options": [
            "dictionary",
            "tuple slice",
            "array typecode",
            "raw string"
          ],
          "answer": 0,
          "why": "Key-value pairs map word to count."
        }
      ],
      "tasks": [
        {
          "id": "u3mini01p01",
          "kind": "code",
          "title": "Stage 1 - Clean student name",
          "brief": "Clean <code>  mIRA shARMA  </code> and print Student: Mira Sharma.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Student: Mira Sharma"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Trim the name"
            },
            {
              "type": "sourceIncludes",
              "value": ".title()",
              "message": "Normalise display case"
            }
          ],
          "level": "Level 1 - Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Trim the name",
            "Expected output begins with: Student: Mira Sharma"
          ]
        },
        {
          "id": "u3mini01p02",
          "kind": "code",
          "title": "Stage 2 - Word list",
          "brief": "Split Python data structures rock and print the list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Python', 'data', 'structures', 'rock']"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Split the sentence"
            }
          ],
          "level": "Level 1 - Follow Me",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Split the sentence",
            "Expected output begins with: ['Python', 'data', 'structures', 'rock']"
          ]
        },
        {
          "id": "u3mini01p03",
          "kind": "code",
          "title": "Stage 3 - Typed scores",
          "brief": "Create integer array [78,88,90], update the last score to 91 and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "array('i', [78, 88, 91])"
            },
            {
              "type": "sourceIncludes",
              "value": "arr.array",
              "message": "Create the array"
            },
            {
              "type": "sourceIncludes",
              "value": "[-1] = 91",
              "message": "Update the last score"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Create the array",
            "Expected output begins with: array('i', [78, 88, 91])"
          ]
        },
        {
          "id": "u3mini01p04",
          "kind": "code",
          "title": "Stage 4 - Sorted score copy",
          "brief": "Convert the array to a list, make a descending sorted copy, and print [91,88,78].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[91, 88, 78]"
            },
            {
              "type": "sourceIncludes",
              "value": "list(",
              "message": "Convert to list"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Create a sorted copy"
            },
            {
              "type": "sourceIncludes",
              "value": "reverse=True",
              "message": "Sort descending"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Convert to list",
            "Expected output begins with: [91, 88, 78]"
          ]
        },
        {
          "id": "u3mini01p05",
          "kind": "code",
          "title": "Stage 5 - Protected record",
          "brief": "Create tuple (S301,Mira Sharma,85.67) and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "('S301', 'Mira Sharma', 85.67)"
            },
            {
              "type": "sourceRegex",
              "pattern": "record\\s*=\\s*\\(",
              "message": "Use a tuple record"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Use a tuple record",
            "Expected output begins with: ('S301', 'Mira Sharma', 85.67)"
          ]
        },
        {
          "id": "u3mini01p06",
          "kind": "code",
          "title": "Stage 6 - Word frequency",
          "brief": "Count words in level python radar level and print the dictionary.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{'level': 2, 'python': 1, 'radar': 1}"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Split the sentence"
            },
            {
              "type": "sourceRegex",
              "pattern": "frequency\\[word\\]",
              "message": "Use dictionary keys"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Split the sentence",
            "Expected output begins with: {'level': 2, 'python': 1, 'radar': 1}"
          ]
        },
        {
          "id": "u3mini01p07",
          "kind": "code",
          "title": "Stage 7 - Palindrome list",
          "brief": "From level python radar, print [level,radar] using a comprehension.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['level', 'radar']"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Test each reverse"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\[.*for\\s+word\\s+in",
              "message": "Use a comprehension"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Test each reverse",
            "Expected output begins with: ['level', 'radar']"
          ]
        },
        {
          "id": "u3mini01p08",
          "kind": "code",
          "title": "Stage 8 - Complete Text and Data Lab",
          "brief": "Print the exact seven-line report from the expected-output hint using name cleaning, score array, average, max, split and palindrome detection.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "TEXT AND DATA LAB\nStudent: Mira Sharma\nScores: 78, 88, 91\nAverage: 85.67\nTop score: 91\nWords: 4\nPalindromes: level, radar"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Clean the name"
            },
            {
              "type": "sourceIncludes",
              "value": "arr.array",
              "message": "Use an array for scores"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Calculate the average"
            },
            {
              "type": "sourceIncludes",
              "value": "max(",
              "message": "Find the top score"
            },
            {
              "type": "sourceIncludes",
              "value": ".split()",
              "message": "Split words"
            },
            {
              "type": "sourceIncludes",
              "value": "[::-1]",
              "message": "Detect palindromes"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Work one small step at a time. Run the program after the first working line.",
            "Clean the name",
            "Expected output begins with: TEXT AND DATA LAB"
          ]
        }
      ]
    }
  ],
  "test": {
    "title": "Unit 3 Final Test - Strings, Arrays and Core Data Structures",
    "marksPerQuestion": 2,
    "durationMinutes": 75,
    "questions": [
      {
        "q": "Why is a Python string a compound data type?",
        "options": [
          "It contains ordered characters",
          "It only does complex maths",
          "It cannot be indexed",
          "It is always multiline"
        ],
        "answer": 0
      },
      {
        "q": "Which quotes are intended for multiline strings?",
        "options": [
          "Single",
          "Double only",
          "Triple",
          "No quotes"
        ],
        "answer": 2
      },
      {
        "q": "What does \\t insert?",
        "options": [
          "A tab",
          "A newline",
          "A quote",
          "A raw string"
        ],
        "answer": 0
      },
      {
        "q": "What does r before a string literal create?",
        "options": [
          "Reversed string",
          "Raw string",
          "Read-only file",
          "Random text"
        ],
        "answer": 1
      },
      {
        "q": "What is the first valid positive index?",
        "options": [
          "1",
          "0",
          "-1",
          "first"
        ],
        "answer": 1
      },
      {
        "q": "Which index selects the last sequence item?",
        "options": [
          "0",
          "1",
          "-1",
          "len"
        ],
        "answer": 2
      },
      {
        "q": "Does a slice include its stop index?",
        "options": [
          "Always",
          "Never",
          "Only for lists",
          "Only for arrays"
        ],
        "answer": 1
      },
      {
        "q": "What does [::2] do?",
        "options": [
          "Reverse",
          "Take every second item",
          "Repeat twice",
          "Stop at index 2"
        ],
        "answer": 1
      },
      {
        "q": "Why can name[0] not be reassigned in a string?",
        "options": [
          "Strings are immutable",
          "Index 0 is reserved",
          "Names cannot contain letters",
          "Python has no assignment"
        ],
        "answer": 0
      },
      {
        "q": "How does Python compare strings?",
        "options": [
          "By length only",
          "Lexicographically",
          "Randomly",
          "By spaces only"
        ],
        "answer": 1
      },
      {
        "q": "Which operator checks substring membership?",
        "options": [
          "has",
          "in",
          "inside",
          "contains"
        ],
        "answer": 1
      },
      {
        "q": "What does a for loop over a string yield?",
        "options": [
          "One character at a time",
          "One word only",
          "Indexes only",
          "A list automatically"
        ],
        "answer": 0
      },
      {
        "q": "What does find() return when text is missing?",
        "options": [
          "ValueError",
          "-1",
          "False",
          "0"
        ],
        "answer": 1
      },
      {
        "q": "What does index() do when text is missing?",
        "options": [
          "Returns -1",
          "Raises ValueError",
          "Returns False",
          "Adds the text"
        ],
        "answer": 1
      },
      {
        "q": "Which method counts substring occurrences?",
        "options": [
          "len",
          "count",
          "size",
          "index"
        ],
        "answer": 1
      },
      {
        "q": "Does replace() change the original string in place?",
        "options": [
          "Yes",
          "No",
          "Only for one letter",
          "Only with numbers"
        ],
        "answer": 1
      },
      {
        "q": "Which method makes every letter uppercase?",
        "options": [
          "title",
          "upper",
          "capitalize",
          "strip"
        ],
        "answer": 1
      },
      {
        "q": "Which method capitalises every word?",
        "options": [
          "title",
          "capitalize",
          "upper",
          "lower"
        ],
        "answer": 0
      },
      {
        "q": "What does strip() remove?",
        "options": [
          "All spaces everywhere",
          "Edge whitespace",
          "Vowels",
          "Punctuation only"
        ],
        "answer": 1
      },
      {
        "q": "Which method removes only right-edge whitespace?",
        "options": [
          "strip",
          "lstrip",
          "rstrip",
          "right"
        ],
        "answer": 2
      },
      {
        "q": "Which method checks digits only?",
        "options": [
          "isalpha",
          "isdigit",
          "isalnum",
          "endswith"
        ],
        "answer": 1
      },
      {
        "q": "Which method accepts letters and digits but no spaces?",
        "options": [
          "isdigit",
          "isalpha",
          "isalnum",
          "split"
        ],
        "answer": 2
      },
      {
        "q": "What does split() return?",
        "options": [
          "List",
          "String",
          "Tuple only",
          "Boolean"
        ],
        "answer": 0
      },
      {
        "q": "What does join() do?",
        "options": [
          "Split text",
          "Glue string items",
          "Count items",
          "Sort words"
        ],
        "answer": 1
      },
      {
        "q": "What is the key array rule?",
        "options": [
          "Mixed types required",
          "Same element type",
          "No indexing",
          "Immutable"
        ],
        "answer": 1
      },
      {
        "q": "Which array type code stores signed integers?",
        "options": [
          "d",
          "i",
          "s",
          "n"
        ],
        "answer": 1
      },
      {
        "q": "Which type code stores double-precision floats?",
        "options": [
          "d",
          "i",
          "f only",
          "x"
        ],
        "answer": 0
      },
      {
        "q": "Are Python array elements mutable?",
        "options": [
          "Yes",
          "No",
          "Only strings",
          "Only index 0"
        ],
        "answer": 0
      },
      {
        "q": "Which loop form exposes array indexes?",
        "options": [
          "for value in a",
          "for i in range(len(a))",
          "while False",
          "if i"
        ],
        "answer": 1
      },
      {
        "q": "Which array method adds at the end?",
        "options": [
          "insert",
          "append",
          "extend only",
          "add"
        ],
        "answer": 1
      },
      {
        "q": "Which array method removes by position?",
        "options": [
          "remove",
          "pop",
          "clear",
          "index"
        ],
        "answer": 1
      },
      {
        "q": "What does array index(value) return?",
        "options": [
          "Value",
          "Position",
          "Boolean",
          "Type code"
        ],
        "answer": 1
      },
      {
        "q": "Which symbols create a list?",
        "options": [
          "()",
          "[]",
          "{}",
          "quotes"
        ],
        "answer": 1
      },
      {
        "q": "Can a list mix data types?",
        "options": [
          "Yes",
          "No",
          "Only two types",
          "Only immutable values"
        ],
        "answer": 0
      },
      {
        "q": "What does list + list do?",
        "options": [
          "Numeric addition",
          "Concatenation",
          "Intersection",
          "Sorting"
        ],
        "answer": 1
      },
      {
        "q": "What does list * 3 do?",
        "options": [
          "Multiply values",
          "Repeat the sequence",
          "Make three nested lists only",
          "Error"
        ],
        "answer": 1
      },
      {
        "q": "Which list method adds one item?",
        "options": [
          "append",
          "extend",
          "clear",
          "sort"
        ],
        "answer": 0
      },
      {
        "q": "Which list method adds all items from another iterable?",
        "options": [
          "append",
          "extend",
          "pop",
          "remove"
        ],
        "answer": 1
      },
      {
        "q": "Which method removes the first matching value?",
        "options": [
          "pop",
          "remove",
          "clear",
          "del only"
        ],
        "answer": 1
      },
      {
        "q": "What does pop() with no index remove?",
        "options": [
          "First",
          "Last",
          "All",
          "Nothing"
        ],
        "answer": 1
      },
      {
        "q": "How do sort() and sorted() differ?",
        "options": [
          "No difference",
          "sort mutates; sorted returns a new list",
          "sorted only numbers",
          "sort only strings"
        ],
        "answer": 1
      },
      {
        "q": "Which tool returns index and item during traversal?",
        "options": [
          "zip",
          "enumerate",
          "range only",
          "sort"
        ],
        "answer": 1
      },
      {
        "q": "What does zip() do?",
        "options": [
          "Compress files",
          "Pair iterables item by item",
          "Sort lists",
          "Clone lists"
        ],
        "answer": 1
      },
      {
        "q": "What does b=a do for a list?",
        "options": [
          "Safe clone",
          "Alias",
          "Tuple conversion",
          "Deep copy"
        ],
        "answer": 1
      },
      {
        "q": "Which creates a separate shallow copy?",
        "options": [
          "b=a",
          "b=a.copy()",
          "b==a",
          "b=a.clear()"
        ],
        "answer": 1
      },
      {
        "q": "How do you access row 1, column 2 in a nested list?",
        "options": [
          "grid[1,2]",
          "grid[1][2]",
          "grid(1)(2)",
          "grid.get"
        ],
        "answer": 1
      },
      {
        "q": "What creates [2,4,6] from [1,2,3]?",
        "options": [
          "[x*2 for x in nums]",
          "nums*2",
          "nums+2",
          "sorted(nums)"
        ],
        "answer": 0
      },
      {
        "q": "Where is a comprehension filter written?",
        "options": [
          "Before the opening bracket",
          "After the iterable",
          "Inside print only",
          "It cannot filter"
        ],
        "answer": 1
      },
      {
        "q": "Which structure is immutable and ordered?",
        "options": [
          "List",
          "Tuple",
          "Dictionary",
          "Array always immutable"
        ],
        "answer": 1
      },
      {
        "q": "How do you create a one-item tuple containing 5?",
        "options": [
          "(5)",
          "[5]",
          "(5,)",
          "5,5"
        ],
        "answer": 2
      },
      {
        "q": "Can a tuple be indexed and sliced?",
        "options": [
          "Yes",
          "No",
          "Only indexed",
          "Only sliced"
        ],
        "answer": 0
      },
      {
        "q": "What is tuple unpacking?",
        "options": [
          "Deleting items",
          "Assigning tuple items to variables",
          "Sorting a tuple",
          "Making a list"
        ],
        "answer": 1
      },
      {
        "q": "What happens when unpacking counts do not match?",
        "options": [
          "IndexError",
          "ValueError",
          "Returns None",
          "Extra items vanish"
        ],
        "answer": 1
      },
      {
        "q": "What does a,b=b,a perform?",
        "options": [
          "Addition",
          "Swap",
          "Sort",
          "Comparison"
        ],
        "answer": 1
      },
      {
        "q": "How can a tuple be changed deliberately?",
        "options": [
          "append directly",
          "Convert to list, edit, convert back",
          "Use remove",
          "Use index assignment"
        ],
        "answer": 1
      },
      {
        "q": "What does (x for x in range(3)) create?",
        "options": [
          "Tuple",
          "Generator",
          "List",
          "String"
        ],
        "answer": 1
      },
      {
        "q": "How can a generator be materialised as a tuple?",
        "options": [
          "list only",
          "tuple(generator)",
          "append",
          "sort"
        ],
        "answer": 1
      },
      {
        "q": "Which slice reverses a string?",
        "options": [
          "[::1]",
          "[::-1]",
          "[-1:0]",
          "[0:-1]"
        ],
        "answer": 1
      },
      {
        "q": "Why use isalpha() in vowel/consonant counting?",
        "options": [
          "To ignore non-letters",
          "To uppercase",
          "To sort",
          "To split"
        ],
        "answer": 0
      },
      {
        "q": "Which structure maps characters to counts?",
        "options": [
          "Tuple",
          "Dictionary",
          "Array",
          "Raw string"
        ],
        "answer": 1
      },
      {
        "q": "Why build a new string when removing duplicates?",
        "options": [
          "Strings are immutable",
          "Lists are too slow",
          "Indexes start at 1",
          "Dictionaries cannot count"
        ],
        "answer": 0
      }
    ]
  },
  "project": {
    "title": "Unit 3 Project - Student Text and Data Toolkit",
    "summary": "Build a menu-driven Python application that cleans text, analyses strings, manages scores, and stores protected records using Unit 3 data structures.",
    "brief": "\n<h4>Your mission</h4><p>Create a terminal application called <strong>Student Text and Data Toolkit</strong>. It must combine strings, arrays, lists, tuples and a small dictionary frequency table.</p>\n<h4>Main menu</h4><pre><code>================================\nSTUDENT TEXT AND DATA TOOLKIT\n1. Clean a student name\n2. Analyse a sentence\n3. Manage a score collection\n4. Show student records\n5. Quit\n================================</code></pre>\n<h4>Required features</h4><ol><li>Clean names using <code>strip()</code> and <code>title()</code>.</li><li>Analyse sentence length, words, vowels, consonants, palindromes and word frequency.</li><li>Store same-type scores in an <code>array</code>, then demonstrate update, append, traversal, total, average and maximum.</li><li>Convert scores to a list when sorting or filtering is convenient.</li><li>Represent final student records as tuples such as <code>(student_id, name, average)</code>.</li><li>Use at least one nested list or list comprehension.</li><li>Keep the menu running until Quit and validate numeric choices before conversion.</li></ol>\n<h4>Submission package</h4><ul><li><code>student_data_toolkit.py</code></li><li><code>README.md</code> explaining each menu option and data structure choice</li><li>At least five sample runs, including invalid input</li><li>A public GitHub repository or public Google Drive link</li></ul>\n<h4>Quality checklist</h4><ul><li>Meaningful variable names and comments</li><li>No illegal tuple mutation</li><li>No mixed types inside a numeric array</li><li>Safe list copying when a draft must not alter the original</li><li>Clear output labels and readable reports</li></ul>"
  }
};

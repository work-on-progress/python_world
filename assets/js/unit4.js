/* ==========================================================================
   AbhyasLab - UNIT 4
   Advanced Data Structures and Functions - Expanded Practice Edition.

   Built from the supplied 91-page Unit 4 PDF. The source organisation and
   terminology are preserved, then expanded with inline SVG diagrams, small
   animations, prediction games, matching interactions, staged coding tasks,
   revision checkpoints, practical-program missions, a final test and project.
   ========================================================================== */

const UNIT_4 = {
  "unit": "Unit 4",
  "unitTitle": "Advanced Data Structures and Functions - Practice Edition",
  "topics": [
    {
      "id": "u4t01",
      "title": "Dictionaries - Keys, Values and Safe Access",
      "summary": "Create dictionaries, understand key-value pairs, and retrieve data safely.",
      "notebookLM": "",
      "notes": "\n<h4>Dictionaries Part 1 - Introduction and Creation</h4>\n<p>The source introduces dictionaries as mutable key-value collections that use meaningful keys instead of numbered indexes. Keys must be unique and immutable; values may contain any data type.</p>\n<h4>The real-world analogy: Contacts App</h4>\n<p>A contact name is the key you tap, while the phone number is the value the app returns. The name must be unique enough to identify the record.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 241\" role=\"img\" aria-label=\"Dictionary key-value lookup\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Dictionary key-value lookup</text>\n        <rect class=\"box\" x=\"70\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"61\" text-anchor=\"middle\" class=\"mono\">Alice</text><path class=\"arrow\" d=\"M270 55 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"61\" text-anchor=\"middle\" class=\"mono\">9876543210</text><rect class=\"box\" x=\"70\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"123\" text-anchor=\"middle\" class=\"mono\">username</text><path class=\"arrow\" d=\"M270 117 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"123\" text-anchor=\"middle\" class=\"mono\">gamer123</text><rect class=\"box\" x=\"70\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"185\" text-anchor=\"middle\" class=\"mono\">level</text><path class=\"arrow\" d=\"M270 179 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"185\" text-anchor=\"middle\" class=\"mono\">42</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Curly brackets:</strong> Create dictionaries with <code>{}</code>.</li><li><strong>Colon:</strong> Connect each key to its value using <code>key: value</code>.</li><li><strong>Square-bracket lookup:</strong> Use <code>data[key]</code> when the key is guaranteed to exist.</li><li><strong>Safe lookup:</strong> Use <code>.get(key, fallback)</code> when the key may be absent.</li></ul>\n<h4>Create and access</h4><pre><code>grades = {\"John\": 85, \"Alice\": 95}\nprint(grades[\"Alice\"])</code></pre><h4>Safe lookup</h4><pre><code>profile = {\"name\": \"Mira\"}\nprint(profile.get(\"city\", \"Unknown\"))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>data = {\"apple\": \"red\", \"banana\": \"yellow\"}\nprint(data[\"banana\"])</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">red</button><button data-o=\"1\">yellow</button><button data-o=\"2\">banana</button><button data-o=\"3\">KeyError</button></div><p class=\"w__why\">The key banana points to the value yellow.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >print(</button><button >grades[</button><button data-bad>\"Zack\"</button><button >])</button></div>\n    <p class=\"w__why\">The key Zack is missing, so direct bracket lookup raises KeyError.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>key</code></button><button data-pair=\"p1\"><code>value</code></button><button data-pair=\"p2\"><code>.get()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">safe lookup</button><button data-pair=\"p1\">stored data</button><button data-pair=\"p0\">unique lookup label</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which symbols create a dictionary?",
          "options": [
            "[]",
            "()",
            "{}",
            "<>"
          ],
          "answer": 2,
          "why": "Dictionaries use curly brackets."
        },
        {
          "q": "How is dictionary data organised?",
          "options": [
            "Indexes only",
            "Key-value pairs",
            "Alphabetically only",
            "Rows and columns"
          ],
          "answer": 1,
          "why": "A key identifies its associated value."
        },
        {
          "q": "Which expression safely returns a fallback for a missing key?",
          "options": [
            "data[\"x\"]",
            "data.get(\"x\", \"Missing\")",
            "data.index(\"x\")",
            "data.find(\"x\")"
          ],
          "answer": 1,
          "why": "get() avoids a KeyError."
        },
        {
          "q": "Which type cannot be used as a dictionary key?",
          "options": [
            "String",
            "Integer",
            "Tuple",
            "List"
          ],
          "answer": 3,
          "why": "Keys must be immutable; lists are mutable."
        }
      ],
      "tasks": [
        {
          "id": "u4t01p01",
          "kind": "code",
          "title": "Create a car dictionary",
          "brief": "Create <code>my_car</code> with brand, year and color, then print only its year.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2024"
            },
            {
              "type": "sourceIncludes",
              "value": "my_car = {",
              "message": "Create the dictionary"
            },
            {
              "type": "sourceIncludes",
              "value": "[\"year\"]",
              "message": "Access the year key"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2024"
          ]
        },
        {
          "id": "u4t01p02",
          "kind": "code",
          "title": "Locker lookup",
          "brief": "Create the supplied grades dictionary and print Alice's grade.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "95"
            },
            {
              "type": "sourceIncludes",
              "value": "grades[\"Alice\"]",
              "message": "Look up Alice by key"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 95"
          ]
        },
        {
          "id": "u4t01p03",
          "kind": "code",
          "title": "Safe city lookup",
          "brief": "Create <code>{'name': 'Mira'}</code> and safely print the missing city as <code>Unknown</code>.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Unknown"
            },
            {
              "type": "sourceIncludes",
              "value": ".get(",
              "message": "Use get()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Unknown"
          ]
        },
        {
          "id": "u4t01p04",
          "kind": "code",
          "title": "Tuple coordinate key",
          "brief": "Create <code>grid = {(2, 3): 'Enemy'}</code> and print the stored value.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Enemy"
            },
            {
              "type": "sourceIncludes",
              "value": "(2, 3)",
              "message": "Use a tuple key"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Enemy"
          ]
        },
        {
          "id": "u4t01p05",
          "kind": "code",
          "title": "Mini profile card",
          "brief": "Use a dictionary to print exactly three lines: Name: Asha, Level: 4, Premium: True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Name: Asha\nLevel: 4\nPremium: True"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "profile",
              "message": "Store the values in a dictionary"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Name: Asha"
          ]
        }
      ]
    },
    {
      "id": "u4t02",
      "title": "Dictionaries - Add, Update, Delete and Membership",
      "summary": "Modify mutable dictionaries without causing missing-key errors.",
      "notebookLM": "",
      "notes": "\n<h4>Dictionaries Part 2 - Modification and Operations</h4>\n<p>The source explains that the same bracket-assignment syntax either updates an existing key or creates a new pair. It also covers del, pop, clear, membership and len.</p>\n<h4>The real-world analogy: Address Book</h4>\n<p>When a friend moves, update the existing address. When you meet someone new, create a fresh entry. Deleting a contact removes both its name and stored details.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Dictionary lifecycle\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Dictionary lifecycle</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">create</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">update</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">check</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">pop</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">clear</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Add or update:</strong> Assign with <code>dictionary[key] = value</code>.</li><li><strong>Delete:</strong> Use <code>del</code> when the key definitely exists, or <code>.pop()</code> when you also need the removed value.</li><li><strong>Membership:</strong> <code>key in dictionary</code> checks keys, not values.</li><li><strong>Length:</strong> <code>len(dictionary)</code> counts key-value pairs.</li></ul>\n<h4>Update and add</h4><pre><code>menu = {\"Burger\": 5.99}\nmenu[\"Burger\"] = 6.99\nmenu[\"Soda\"] = 1.50</code></pre><h4>Pop a value</h4><pre><code>tasks = {\"Monday\": \"Laundry\"}\ncompleted = tasks.pop(\"Monday\")\nprint(completed)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>stock = {\"Gold\": 50}\nstock[\"Gold\"] = 75\nstock[\"Bronze\"] = 200\nprint(len(stock))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">3</button><button data-o=\"3\">KeyError</button></div><p class=\"w__why\">The update keeps one key and the addition creates a second key.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >if </button><button >\"Oranges\" </button><button >in </button><button data-bad>inventory.values()</button><button >:</button></div>\n    <p class=\"w__why\">Membership on a dictionary directly checks keys; values() changes what is searched.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>del d[k]</code></button><button data-pair=\"p1\"><code>d.pop(k)</code></button><button data-pair=\"p2\"><code>d.clear()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">empty dictionary</button><button data-pair=\"p1\">remove and return value</button><button data-pair=\"p0\">delete pair</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What happens when d['score'] = 100 uses a new key?",
          "options": [
            "KeyError",
            "A new pair is added",
            "Nothing",
            "The dictionary is deleted"
          ],
          "answer": 1,
          "why": "Assignment creates the missing key."
        },
        {
          "q": "Which method empties a dictionary?",
          "options": [
            "pop",
            "delete",
            "clear",
            "remove"
          ],
          "answer": 2,
          "why": "clear() leaves an empty dictionary."
        },
        {
          "q": "What does 'apple' in d check?",
          "options": [
            "Values only",
            "Keys only",
            "Both automatically",
            "Indexes"
          ],
          "answer": 1,
          "why": "Dictionary membership checks keys."
        },
        {
          "q": "What does pop(key) return?",
          "options": [
            "The removed value",
            "The key only",
            "The dictionary length",
            "Nothing"
          ],
          "answer": 0,
          "why": "pop removes the pair and returns its value."
        }
      ],
      "tasks": [
        {
          "id": "u4t02p01",
          "kind": "code",
          "title": "Update gold stock",
          "brief": "Update Gold from 50 to 75 and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "75"
            },
            {
              "type": "sourceIncludes",
              "value": "stock[\"Gold\"] = 75",
              "message": "Update the existing key"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 75"
          ]
        },
        {
          "id": "u4t02p02",
          "kind": "code",
          "title": "Add bronze stock",
          "brief": "Add Bronze with 200 and print the number of pairs.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": "stock[\"Bronze\"] = 200",
              "message": "Add a new key"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Count pairs"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ]
        },
        {
          "id": "u4t02p03",
          "kind": "code",
          "title": "Safe membership check",
          "brief": "Print Found if username exists in the supplied user dictionary.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Found"
            },
            {
              "type": "sourceIncludes",
              "value": "\"username\" in user",
              "message": "Check key membership"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Found"
          ]
        },
        {
          "id": "u4t02p04",
          "kind": "code",
          "title": "Pop completed task",
          "brief": "Pop Monday from the tasks dictionary and print Laundry followed by 1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Laundry\n1"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": ".pop(",
              "message": "Use pop()"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Count remaining pairs"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Laundry"
          ]
        },
        {
          "id": "u4t02p05",
          "kind": "code",
          "title": "Inventory adjustment",
          "brief": "Start with Apples: 10, sell 3, add Milk: 2 and print exactly <code>7 2</code> on one line.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "7 2"
            },
            {
              "type": "sourceIncludes",
              "value": "inventory[\"Apples\"] -= 3",
              "message": "Reduce stock"
            },
            {
              "type": "sourceIncludes",
              "value": "inventory[\"Milk\"] = 2",
              "message": "Add milk"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 7 2"
          ]
        }
      ]
    },
    {
      "id": "u4t03",
      "title": "Dictionaries - Methods, Loops and Nested Records",
      "summary": "Traverse keys, values and items, then work with nested dictionaries.",
      "notebookLM": "",
      "notes": "\n<h4>Dictionaries Part 3 - Methods and Iteration</h4>\n<p>The source covers keys(), values(), items(), dictionary traversal, tuple unpacking in loops, and nested dictionaries used for structured records.</p>\n<h4>The real-world analogy: Warehouse Labels</h4>\n<p>A warehouse manager may inspect only shelf labels, only quantities, or each label and quantity together. Nested shelves create another lookup layer.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 241\" role=\"img\" aria-label=\"Three dictionary views\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Three dictionary views</text>\n        <rect class=\"box\" x=\"70\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"61\" text-anchor=\"middle\" class=\"mono\">keys()</text><path class=\"arrow\" d=\"M270 55 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"61\" text-anchor=\"middle\" class=\"mono\">labels</text><rect class=\"box\" x=\"70\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"123\" text-anchor=\"middle\" class=\"mono\">values()</text><path class=\"arrow\" d=\"M270 117 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"123\" text-anchor=\"middle\" class=\"mono\">stored data</text><rect class=\"box\" x=\"70\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"185\" text-anchor=\"middle\" class=\"mono\">items()</text><path class=\"arrow\" d=\"M270 179 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"185\" text-anchor=\"middle\" class=\"mono\">(key, value)</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>keys():</strong> Provides a dynamic view of all keys.</li><li><strong>values():</strong> Provides a dynamic view of all values.</li><li><strong>items():</strong> Provides key-value tuples ideal for unpacking.</li><li><strong>Nested lookup:</strong> Use two keys such as <code>company['Employee2']['role']</code>.</li></ul>\n<h4>Loop through both</h4><pre><code>scores = {\"Alice\": 90, \"Bob\": 80}\nfor name, grade in scores.items():\n    print(name, grade)</code></pre><h4>Nested record</h4><pre><code>company = {\"E2\": {\"name\": \"Sarah\", \"role\": \"Developer\"}}\nprint(company[\"E2\"][\"role\"])</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>scores = {\"Alice\": 90, \"Bob\": 80}\nprint(sum(scores.values()))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">90</button><button data-o=\"1\">80</button><button data-o=\"2\">170</button><button data-o=\"3\">2</button></div><p class=\"w__why\">values() exposes the grades and sum adds them.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >for name, grade in </button><button data-bad>scores.keys()</button><button >:</button></div>\n    <p class=\"w__why\">keys() returns only keys. Use items() when unpacking key and value.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>keys()</code></button><button data-pair=\"p1\"><code>values()</code></button><button data-pair=\"p2\"><code>items()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">key-value tuples</button><button data-pair=\"p1\">all values</button><button data-pair=\"p0\">all keys</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method returns key-value tuple pairs?",
          "options": [
            "keys",
            "values",
            "items",
            "pairs"
          ],
          "answer": 2,
          "why": "items() groups each key with its value."
        },
        {
          "q": "What does a plain for loop over a dictionary produce?",
          "options": [
            "Keys",
            "Values",
            "Pairs",
            "Indexes"
          ],
          "answer": 0,
          "why": "Iteration defaults to keys."
        },
        {
          "q": "How do you access Age in {'User1': {'Age': 20}}?",
          "options": [
            "data[\"Age\"]",
            "data[\"User1\"][\"Age\"]",
            "data[0][0]",
            "data.get(\"User1\",\"Age\")"
          ],
          "answer": 1,
          "why": "Nested dictionaries require one key per layer."
        },
        {
          "q": "Which loop correctly unpacks both parts?",
          "options": [
            "for x in d.values()",
            "for k, v in d.items()",
            "for k, v in d.keys()",
            "for x in len(d)"
          ],
          "answer": 1,
          "why": "items() yields two-item tuples."
        }
      ],
      "tasks": [
        {
          "id": "u4t03p01",
          "kind": "code",
          "title": "Physical price list",
          "brief": "Convert prices.values() to a list and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[1.0, 0.5, 2.0]"
            },
            {
              "type": "sourceIncludes",
              "value": "list(prices.values())",
              "message": "Convert the values view"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [1.0, 0.5, 2.0]"
          ]
        },
        {
          "id": "u4t03p02",
          "kind": "code",
          "title": "Item looper",
          "brief": "Print Apple: 1.0, Banana: 0.5 and Cherry: 2.0 on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Apple: 1.0\nBanana: 0.5\nCherry: 2.0"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": ".items()",
              "message": "Loop with items()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Apple: 1.0"
          ]
        },
        {
          "id": "u4t03p03",
          "kind": "code",
          "title": "Value accumulator",
          "brief": "Add all values in prices and print 3.5.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3.5"
            },
            {
              "type": "sourceIncludes",
              "value": ".values()",
              "message": "Loop through values"
            },
            {
              "type": "sourceIncludes",
              "value": "total",
              "message": "Use an accumulator"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3.5"
          ]
        },
        {
          "id": "u4t03p04",
          "kind": "code",
          "title": "Nested gold update",
          "brief": "Update Player1 Gold from 50 to 75 and print 75.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "75"
            },
            {
              "type": "sourceIncludes",
              "value": "game_save[\"Player1\"][\"Gold\"] = 75",
              "message": "Use two nested keys"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 75"
          ]
        },
        {
          "id": "u4t03p05",
          "kind": "code",
          "title": "Student report rows",
          "brief": "Use items() to print exactly two lines: Alice scored 90 and Bob scored 80.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Alice scored 90\nBob scored 80"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": ".items()",
              "message": "Unpack items in the loop"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Alice scored 90"
          ]
        }
      ]
    },
    {
      "id": "u4t04",
      "title": "Dictionaries - Comprehensions, Copying and Sparse Matrices",
      "summary": "Build dictionaries in one line and avoid mutable aliasing bugs.",
      "notebookLM": "",
      "notes": "\n<h4>Dictionaries Part 4 - Advanced Concepts</h4>\n<p>The source introduces dictionary comprehensions, aliasing, shallow and deep copying, and sparse matrices represented by tuple-coordinate keys.</p>\n<h4>The real-world analogy: Two Name Tags on One Box</h4>\n<p>Aliasing gives one object two variable names. A shallow copy creates a new outer box, while deepcopy duplicates nested boxes too.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 250\" role=\"img\" aria-label=\"Sparse matrix: only meaningful cells are stored\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Sparse matrix: only meaningful cells are stored</text>\n        <rect class=\"box\" x=\"245\" y=\"55\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"277\" y=\"85\" text-anchor=\"middle\" class=\"mono\">P</text><rect class=\"box\" x=\"317\" y=\"55\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"349\" y=\"85\" text-anchor=\"middle\" class=\"mono\">0</text><rect class=\"box\" x=\"389\" y=\"55\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"421\" y=\"85\" text-anchor=\"middle\" class=\"mono\">0</text><rect class=\"box\" x=\"245\" y=\"113\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"277\" y=\"143\" text-anchor=\"middle\" class=\"mono\">0</text><rect class=\"box\" x=\"317\" y=\"113\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"349\" y=\"143\" text-anchor=\"middle\" class=\"mono\">W</text><rect class=\"box\" x=\"389\" y=\"113\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"421\" y=\"143\" text-anchor=\"middle\" class=\"mono\">0</text><rect class=\"box\" x=\"245\" y=\"171\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"277\" y=\"201\" text-anchor=\"middle\" class=\"mono\">0</text><rect class=\"box\" x=\"317\" y=\"171\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"349\" y=\"201\" text-anchor=\"middle\" class=\"mono\">0</text><rect class=\"box\" x=\"389\" y=\"171\" width=\"64\" height=\"48\" rx=\"9\"/><text x=\"421\" y=\"201\" text-anchor=\"middle\" class=\"mono\">T</text>\n        <path class=\"accent\" d=\"M215 45 H485 V235 H215 Z\" fill=\"none\"><animate attributeName=\"stroke-dashoffset\" values=\"0;80\" dur=\"3s\" repeatCount=\"indefinite\"/></path>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Dictionary comprehension:</strong> Build pairs with <code>{key_expr: value_expr for item in iterable}</code>.</li><li><strong>Aliasing trap:</strong> <code>d2 = d1</code> points both names at the same mutable object.</li><li><strong>Shallow copy:</strong> <code>d1.copy()</code> separates a simple dictionary.</li><li><strong>Deep copy:</strong> <code>copy.deepcopy()</code> separates every nested layer.</li><li><strong>Sparse matrix:</strong> Use coordinate tuples as keys and omit zero/empty cells.</li></ul>\n<h4>Comprehension</h4><pre><code>squares = {x: x ** 2 for x in range(1, 4)}</code></pre><h4>Deep copy</h4><pre><code>import copy\noriginal = {\"User\": {\"Age\": 20}}\nclone = copy.deepcopy(original)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>squares = {x: x * 10 for x in range(1, 4)}\nprint(squares[3])</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">3</button><button data-o=\"1\">10</button><button data-o=\"2\">30</button><button data-o=\"3\">KeyError</button></div><p class=\"w__why\">The key 3 maps to 3 multiplied by 10.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >safe_copy = </button><button data-bad>complex_data.copy()</button></div>\n    <p class=\"w__why\">For a nested dictionary, a shallow copy leaves inner objects shared; use deepcopy.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>d2 = d1</code></button><button data-pair=\"p1\"><code>d1.copy()</code></button><button data-pair=\"p2\"><code>copy.deepcopy(d1)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">deep copy</button><button data-pair=\"p1\">shallow copy</button><button data-pair=\"p0\">alias</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does {x: x**2 for x in range(3)} create?",
          "options": [
            "Set",
            "List",
            "Dictionary",
            "Generator"
          ],
          "answer": 2,
          "why": "A colon inside braces creates key-value pairs."
        },
        {
          "q": "What happens after d2 = d1 and d2 changes?",
          "options": [
            "Only d2 changes",
            "d1 also changes",
            "A copy is created",
            "An error occurs"
          ],
          "answer": 1,
          "why": "Both names reference one object."
        },
        {
          "q": "When is deepcopy needed?",
          "options": [
            "Simple string value",
            "Nested mutable structures",
            "Empty dictionary only",
            "Integer keys"
          ],
          "answer": 1,
          "why": "Deep copy separates inner structures."
        },
        {
          "q": "Why use a dictionary for a sparse matrix?",
          "options": [
            "It sorts cells",
            "It stores only non-empty coordinates",
            "It requires no keys",
            "It is immutable"
          ],
          "answer": 1,
          "why": "Sparse storage avoids thousands of zeros."
        }
      ],
      "tasks": [
        {
          "id": "u4t04p01",
          "kind": "code",
          "title": "Times-ten comprehension",
          "brief": "Build {1: 10, 2: 20, 3: 30} with a dictionary comprehension and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{1: 10, 2: 20, 3: 30}"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\{x\\s*:\\s*x\\s*\\*\\s*10\\s+for\\s+x\\s+in\\s+range",
              "message": "Use a dictionary comprehension"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: {1: 10, 2: 20, 3: 30}"
          ]
        },
        {
          "id": "u4t04p02",
          "kind": "code",
          "title": "Observe aliasing",
          "brief": "Make box2 an alias of box1, change color to Blue through box2, and print box1['color'].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Blue"
            },
            {
              "type": "sourceIncludes",
              "value": "box2 = box1",
              "message": "Create the alias"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Blue"
          ]
        },
        {
          "id": "u4t04p03",
          "kind": "code",
          "title": "Safe shallow copy",
          "brief": "Copy safe1 with .copy(), change safe2, and print safe1['color'] as Green.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Green"
            },
            {
              "type": "sourceIncludes",
              "value": ".copy()",
              "message": "Use a shallow copy"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Green"
          ]
        },
        {
          "id": "u4t04p04",
          "kind": "code",
          "title": "Deep-copy nested profile",
          "brief": "Deep-copy a nested dictionary, change the clone's age, then print the original age as 20.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20"
            },
            {
              "type": "sourceIncludes",
              "value": "import copy",
              "message": "Import copy"
            },
            {
              "type": "sourceIncludes",
              "value": "copy.deepcopy",
              "message": "Use deepcopy"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 20"
          ]
        },
        {
          "id": "u4t04p05",
          "kind": "code",
          "title": "Sparse-map lookup",
          "brief": "Store Enemy at (2,3), then safely print Nothing here for (0,0).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Nothing here"
            },
            {
              "type": "sourceIncludes",
              "value": ".get((0, 0), \"Nothing here\")",
              "message": "Use a safe sparse lookup"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Nothing here"
          ]
        }
      ]
    },
    {
      "id": "u4t05",
      "title": "Revision Checkpoint 1 - Dictionary Control Room",
      "summary": "Consolidate dictionary creation, mutation, traversal, copying and sparse lookup.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint - Dictionaries</h4>\n<p>This checkpoint combines the four dictionary sections into one mission: construct records, update them, iterate safely, copy nested data and use tuple keys.</p>\n<h4>The real-world analogy: Control Room Dashboard</h4>\n<p>A control room connects meaningful labels to live values. Operators must update the right label, prevent missing-key crashes and copy records without linking the originals.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Dictionary mission flow\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Dictionary mission flow</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">create</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">validate</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">update</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">report</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">copy</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Design meaningful keys:</strong> Prefer labels such as student_id, status and score.</li><li><strong>Validate before direct lookup:</strong> Use membership or get().</li><li><strong>Report with items():</strong> Unpack key-value pairs clearly.</li><li><strong>Copy intentionally:</strong> Choose alias, shallow copy or deep copy with awareness.</li></ul>\n<h4>Mission skeleton</h4><pre><code>records = {}\nrecords[\"S01\"] = {\"name\": \"Asha\", \"score\": 88}\nfor sid, profile in records.items():\n    print(sid, profile[\"score\"])</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>d = {\"A\": 1, \"B\": 2}\nremoved = d.pop(\"A\")\nprint(removed, len(d))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">1 1</button><button data-o=\"1\">A 1</button><button data-o=\"2\">1 2</button><button data-o=\"3\">KeyError</button></div><p class=\"w__why\">pop returns 1 and one pair remains.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >copy = </button><button data-bad>original</button></div>\n    <p class=\"w__why\">This creates an alias, not an independent copy.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>.get()</code></button><button data-pair=\"p1\"><code>.items()</code></button><button data-pair=\"p2\"><code>deepcopy()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">copy nested layers</button><button data-pair=\"p1\">loop through pairs</button><button data-pair=\"p0\">fallback lookup</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which method is safest for an optional key?",
          "options": [
            "Bracket lookup",
            "get",
            "index",
            "find"
          ],
          "answer": 1,
          "why": "get can provide a fallback."
        },
        {
          "q": "Which view is best for key and value together?",
          "options": [
            "keys",
            "values",
            "items",
            "len"
          ],
          "answer": 2,
          "why": "items returns pairs."
        },
        {
          "q": "Which copy separates nested dictionaries?",
          "options": [
            "Alias",
            "copy",
            "deepcopy",
            "sorted"
          ],
          "answer": 2,
          "why": "deepcopy recursively duplicates nested structures."
        },
        {
          "q": "What makes tuple coordinates useful as keys?",
          "options": [
            "They are mutable",
            "They are immutable",
            "They are strings",
            "They are unordered"
          ],
          "answer": 1,
          "why": "Immutable tuples are valid keys."
        }
      ],
      "tasks": [
        {
          "id": "u4t05p01",
          "kind": "code",
          "title": "Build a record",
          "brief": "Create S01 with name Asha and score 88, then print Asha: 88.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha: 88"
            },
            {
              "type": "sourceIncludes",
              "value": "\"S01\"",
              "message": "Use the student ID key"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Asha: 88"
          ]
        },
        {
          "id": "u4t05p02",
          "kind": "code",
          "title": "Safe missing record",
          "brief": "Safely print Not enrolled for S02.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Not enrolled"
            },
            {
              "type": "sourceIncludes",
              "value": ".get(",
              "message": "Use get()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Not enrolled"
          ]
        },
        {
          "id": "u4t05p03",
          "kind": "code",
          "title": "Update and report",
          "brief": "Increase S01 score from 88 to 93, then print 93.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "93"
            },
            {
              "type": "sourceIncludes",
              "value": "[\"score\"]",
              "message": "Update the nested score"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 93"
          ]
        },
        {
          "id": "u4t05p04",
          "kind": "code",
          "title": "Independent backup",
          "brief": "Deep-copy records, change the backup score, and print the original 93.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "93"
            },
            {
              "type": "sourceIncludes",
              "value": "copy.deepcopy",
              "message": "Create a complete backup"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 93"
          ]
        },
        {
          "id": "u4t05p05",
          "kind": "code",
          "title": "Dictionary mission report",
          "brief": "Print exactly: S01 | Asha | 93 and Total records: 1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "S01 | Asha | 93\nTotal records: 1"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": ".items()",
              "message": "Loop through the record pairs"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Count records"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: S01 | Asha | 93"
          ]
        }
      ]
    },
    {
      "id": "u4t06",
      "title": "Sets - Unique, Unordered Collections",
      "summary": "Create sets correctly and remove duplicate data instantly.",
      "notebookLM": "",
      "notes": "\n<h4>Sets Part 1 - Introduction and Creation</h4>\n<p>The source defines a set as an unordered collection containing only unique items. It also highlights the empty-set trap and converting lists to sets to remove duplicates.</p>\n<h4>The real-world analogy: VIP Guest List</h4>\n<p>Repeated RSVPs should still produce one guest entry. A set keeps each name exactly once and does not promise a numbered position.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 260\" role=\"img\" aria-label=\"Uniqueness filter\">\n        <text x=\"350\" y=\"25\" text-anchor=\"middle\" class=\"lbl\">Uniqueness filter</text>\n        <circle class=\"box\" cx=\"270\" cy=\"135\" r=\"100\"><animate attributeName=\"r\" values=\"96;103;96\" dur=\"3s\" repeatCount=\"indefinite\"/></circle>\n        <circle class=\"box\" cx=\"430\" cy=\"135\" r=\"100\"><animate attributeName=\"r\" values=\"103;96;103\" dur=\"3s\" repeatCount=\"indefinite\"/></circle>\n        <text x=\"225\" y=\"140\" text-anchor=\"middle\" class=\"mono\">duplicates</text>\n        <text x=\"475\" y=\"140\" text-anchor=\"middle\" class=\"mono\">unique items</text>\n        <text x=\"350\" y=\"140\" text-anchor=\"middle\" class=\"mono\" style=\"font-weight:800\">one copy</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Unique values:</strong> Duplicates are discarded automatically.</li><li><strong>Unordered:</strong> Do not rely on a first or last element.</li><li><strong>Creation:</strong> Use braces for non-empty sets.</li><li><strong>Empty-set trap:</strong> Use <code>set()</code>; <code>{}</code> creates a dictionary.</li><li><strong>Deduplication:</strong> Convert a list with <code>set(list_data)</code>.</li></ul>\n<h4>Remove duplicates</h4><pre><code>visitor_logs = [101, 105, 101, 102]\nunique = set(visitor_logs)\nprint(sorted(unique))</code></pre><h4>Empty set</h4><pre><code>empty_basket = set()\nprint(type(empty_basket))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>data = {1, 1, 2, 2, 3}\nprint(len(data))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">5</button><button data-o=\"1\">3</button><button data-o=\"2\">2</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Only the unique values 1, 2 and 3 remain.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >empty_set = </button><button data-bad>{}</button></div>\n    <p class=\"w__why\">Empty braces create a dictionary. Use set().</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>set()</code></button><button data-pair=\"p1\"><code>{}</code></button><button data-pair=\"p2\"><code>set(list)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">remove duplicates</button><button data-pair=\"p1\">empty dictionary</button><button data-pair=\"p0\">empty set</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is the defining rule of a set?",
          "options": [
            "Sorted",
            "Unique items",
            "Indexed",
            "Strings only"
          ],
          "answer": 1,
          "why": "Sets reject duplicates."
        },
        {
          "q": "What does {} create?",
          "options": [
            "Empty set",
            "Empty dictionary",
            "Empty list",
            "SyntaxError"
          ],
          "answer": 1,
          "why": "Empty braces are reserved for dictionaries."
        },
        {
          "q": "How do you create an empty set?",
          "options": [
            "{}",
            "[]",
            "set()",
            "()"
          ],
          "answer": 2,
          "why": "Use the set constructor."
        },
        {
          "q": "What is a fast way to remove duplicates from a list?",
          "options": [
            "list.remove",
            "set(list)",
            "sorted(list)",
            "tuple(list)"
          ],
          "answer": 1,
          "why": "Conversion to a set keeps unique values."
        }
      ],
      "tasks": [
        {
          "id": "u4t06p01",
          "kind": "code",
          "title": "Create the vowel set",
          "brief": "Create a set of a, e, i, o, u and print its length.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5"
            },
            {
              "type": "sourceIncludes",
              "value": "vowels = {",
              "message": "Use a set literal"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 5"
          ]
        },
        {
          "id": "u4t06p02",
          "kind": "code",
          "title": "Prove the empty set",
          "brief": "Create empty_basket with set() and print its type name using type(...).__name__.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "set"
            },
            {
              "type": "sourceIncludes",
              "value": "set()",
              "message": "Create an empty set"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: set"
          ]
        },
        {
          "id": "u4t06p03",
          "kind": "code",
          "title": "Contest filter",
          "brief": "Remove duplicates from the supplied entries list and print sorted(unique_entries).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Alice', 'Bob', 'Charlie']"
            },
            {
              "type": "sourceIncludes",
              "value": "set(entries)",
              "message": "Convert the list to a set"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Make output deterministic"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Alice', 'Bob', 'Charlie']"
          ]
        },
        {
          "id": "u4t06p04",
          "kind": "code",
          "title": "Unique visitor count",
          "brief": "For [101,105,101,102,105,101], print 3 unique visitors.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": "set(",
              "message": "Remove duplicates"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Count unique IDs"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ]
        },
        {
          "id": "u4t06p05",
          "kind": "code",
          "title": "Mini username cleaner",
          "brief": "Take ['admin','student','admin','faculty','student'], print each unique role alphabetically on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "admin\nfaculty\nstudent"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "set(",
              "message": "Remove duplicates"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort before printing"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: admin"
          ]
        }
      ]
    },
    {
      "id": "u4t07",
      "title": "Sets - Add, Update, Remove and Membership",
      "summary": "Modify sets safely and use fast membership checks.",
      "notebookLM": "",
      "notes": "\n<h4>Sets Part 2 - Modification and Membership</h4>\n<p>The source explains add(), update(), remove(), discard(), pop(), clear(), and the speed advantage of set membership.</p>\n<h4>The real-world analogy: A Bucket Without Slots</h4>\n<p>Because a set has no indexes, you throw new items into the bucket rather than inserting at a position. Removal by value is safe with discard.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Set mutation\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Set mutation</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">add</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">update</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">check</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">discard</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">clear</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>add(item):</strong> Adds one item.</li><li><strong>update(iterable):</strong> Adds many items.</li><li><strong>remove(item):</strong> Deletes an item but raises KeyError if absent.</li><li><strong>discard(item):</strong> Deletes safely without raising when absent.</li><li><strong>pop():</strong> Removes an arbitrary item because sets have no order.</li><li><strong>Fast membership:</strong> Use <code>item in set_data</code>.</li></ul>\n<h4>Add several items</h4><pre><code>cart = {\"Shoes\", \"Shirt\"}\ncart.add(\"Hat\")\ncart.update([\"Socks\", \"Pants\"])</code></pre><h4>Safe remove</h4><pre><code>cart.discard(\"Watch\")</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>s = {\"A\", \"B\"}\ns.add(\"A\")\nprint(len(s))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">3</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">Adding a duplicate does not increase the set size.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >cart.</button><button data-bad>remove(</button><button >\"Watch\"</button><button >)</button></div>\n    <p class=\"w__why\">remove crashes if Watch is missing; discard is the safe choice.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>add()</code></button><button data-pair=\"p1\"><code>update()</code></button><button data-pair=\"p2\"><code>discard()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">safe removal</button><button data-pair=\"p1\">many items</button><button data-pair=\"p0\">one item</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is the difference between remove and discard?",
          "options": [
            "No difference",
            "remove raises if absent; discard does not",
            "discard clears all",
            "remove adds"
          ],
          "answer": 1,
          "why": "discard safely ignores a missing item."
        },
        {
          "q": "What does pop remove from a set?",
          "options": [
            "First item",
            "Last item",
            "An arbitrary item",
            "Largest item"
          ],
          "answer": 2,
          "why": "Sets have no positional order."
        },
        {
          "q": "Which method adds multiple items?",
          "options": [
            "add",
            "update",
            "append",
            "insert"
          ],
          "answer": 1,
          "why": "update consumes an iterable."
        },
        {
          "q": "Why are sets useful for membership?",
          "options": [
            "They are usually faster than lists",
            "Lists do not support in",
            "They sort first",
            "They are immutable"
          ],
          "answer": 0,
          "why": "Set lookup is hash-based."
        }
      ],
      "tasks": [
        {
          "id": "u4t07p01",
          "kind": "code",
          "title": "Grow the cart",
          "brief": "Add Hat, Socks and Pants, then print the final size 5.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5"
            },
            {
              "type": "sourceIncludes",
              "value": ".add(",
              "message": "Add one item"
            },
            {
              "type": "sourceIncludes",
              "value": ".update(",
              "message": "Add several items"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 5"
          ]
        },
        {
          "id": "u4t07p02",
          "kind": "code",
          "title": "Safe removal",
          "brief": "Discard Watch from a cart that lacks it and print Safe.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Safe"
            },
            {
              "type": "sourceIncludes",
              "value": ".discard(",
              "message": "Use safe removal"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Safe"
          ]
        },
        {
          "id": "u4t07p03",
          "kind": "code",
          "title": "Membership gate",
          "brief": "Print Access Granted for teacher in the approved user set.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Access Granted"
            },
            {
              "type": "sourceIncludes",
              "value": " in approved_users",
              "message": "Use set membership"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Access Granted"
          ]
        },
        {
          "id": "u4t07p04",
          "kind": "code",
          "title": "Arbitrary pop proof",
          "brief": "Create {10,20,30}, pop one item, then print the remaining length as 2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": ".pop()",
              "message": "Remove an arbitrary item"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Count what remains"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ]
        },
        {
          "id": "u4t07p05",
          "kind": "code",
          "title": "Banned-word checker",
          "brief": "Given message_word='heck', print Warning: Bad Language! using set membership.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Warning: Bad Language!"
            },
            {
              "type": "sourceIncludes",
              "value": "banned_words",
              "message": "Create the banned set"
            },
            {
              "type": "sourceIncludes",
              "value": " in banned_words",
              "message": "Check membership"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Warning: Bad Language!"
          ]
        }
      ]
    },
    {
      "id": "u4t08",
      "title": "Sets - Union, Intersection, Difference and Relationships",
      "summary": "Use Venn-diagram operations to compare collections.",
      "notebookLM": "",
      "notes": "\n<h4>Sets Part 3 - Mathematical Set Operations</h4>\n<p>The source maps mathematical set theory to Python operators: union, intersection, difference, symmetric difference, subset and superset.</p>\n<h4>The real-world analogy: Two Sports Teams</h4>\n<p>Union finds every athlete, intersection finds multi-sport athletes, difference finds one-team-only members, and symmetric difference finds people in exactly one team.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 260\" role=\"img\" aria-label=\"Set operations as a Venn diagram\">\n        <text x=\"350\" y=\"25\" text-anchor=\"middle\" class=\"lbl\">Set operations as a Venn diagram</text>\n        <circle class=\"box\" cx=\"270\" cy=\"135\" r=\"100\"><animate attributeName=\"r\" values=\"96;103;96\" dur=\"3s\" repeatCount=\"indefinite\"/></circle>\n        <circle class=\"box\" cx=\"430\" cy=\"135\" r=\"100\"><animate attributeName=\"r\" values=\"103;96;103\" dur=\"3s\" repeatCount=\"indefinite\"/></circle>\n        <text x=\"225\" y=\"140\" text-anchor=\"middle\" class=\"mono\">Set A</text>\n        <text x=\"475\" y=\"140\" text-anchor=\"middle\" class=\"mono\">Set B</text>\n        <text x=\"350\" y=\"140\" text-anchor=\"middle\" class=\"mono\" style=\"font-weight:800\">A ∩ B</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Union &lt;code&gt;|&lt;/code&gt;:</strong> All unique items from both sets.</li><li><strong>Intersection &lt;code&gt;&amp;amp;&lt;/code&gt;:</strong> Items shared by both sets.</li><li><strong>Difference &lt;code&gt;-&lt;/code&gt;:</strong> Items in the first set but not the second.</li><li><strong>Symmetric difference &lt;code&gt;^&lt;/code&gt;:</strong> Items belonging to exactly one set.</li><li><strong>Subset and superset:</strong> Use issubset(), issuperset(), <= or >=.</li></ul>\n<h4>Core operators</h4><pre><code>A = {1, 2, 3, 4}\nB = {3, 4, 5, 6}\nprint(A | B)\nprint(A &amp; B)\nprint(A - B)\nprint(A ^ B)</code></pre><h4>Relationship</h4><pre><code>print({1, 2}.issubset({1, 2, 3}))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>A = {1, 2, 3}\nB = {3, 4}\nprint(sorted(A &amp; B))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">[1, 2]</button><button data-o=\"1\">[3]</button><button data-o=\"2\">[3, 4]</button><button data-o=\"3\">[1, 2, 4]</button></div><p class=\"w__why\">Intersection keeps only shared values.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >soccer_only = </button><button data-bad>soccer_team | track_team</button></div>\n    <p class=\"w__why\">Union combines both teams. Soccer-only requires difference.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>|</code></button><button data-pair=\"p1\"><code>&amp;</code></button><button data-pair=\"p2\"><code>-</code></button><button data-pair=\"p3\"><code>^</code></button></div><div class=\"w-match__col\"><button data-pair=\"p3\">symmetric difference</button><button data-pair=\"p2\">difference</button><button data-pair=\"p1\">intersection</button><button data-pair=\"p0\">union</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does A | B produce?",
          "options": [
            "Shared items only",
            "All unique items",
            "A only",
            "Exactly one set"
          ],
          "answer": 1,
          "why": "The union combines both sets."
        },
        {
          "q": "Which operator finds shared items?",
          "options": [
            "|",
            "&",
            "-",
            "^"
          ],
          "answer": 1,
          "why": "Intersection uses ampersand."
        },
        {
          "q": "What does A - B mean?",
          "options": [
            "All items",
            "Items in A not in B",
            "Items in B not in A",
            "Shared items"
          ],
          "answer": 1,
          "why": "Difference is directional."
        },
        {
          "q": "What does issubset ask?",
          "options": [
            "Whether all A items exist in B",
            "Whether sets are sorted",
            "Whether A is larger",
            "Whether duplicates exist"
          ],
          "answer": 0,
          "why": "A subset fits entirely inside another set."
        }
      ],
      "tasks": [
        {
          "id": "u4t08p01",
          "kind": "code",
          "title": "All athletes",
          "brief": "Union the soccer and track teams and print sorted names.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Emma', 'John', 'Mike', 'Sarah']"
            },
            {
              "type": "sourceIncludes",
              "value": " | ",
              "message": "Use union"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort output"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Emma', 'John', 'Mike', 'Sarah']"
          ]
        },
        {
          "id": "u4t08p02",
          "kind": "code",
          "title": "Multi-sport athletes",
          "brief": "Intersect the teams and print sorted shared names.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['John', 'Sarah']"
            },
            {
              "type": "sourceIncludes",
              "value": " & ",
              "message": "Use intersection"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['John', 'Sarah']"
          ]
        },
        {
          "id": "u4t08p03",
          "kind": "code",
          "title": "Soccer only",
          "brief": "Print ['Mike'] using set difference.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Mike']"
            },
            {
              "type": "sourceIncludes",
              "value": " - ",
              "message": "Use difference"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Mike']"
          ]
        },
        {
          "id": "u4t08p04",
          "kind": "code",
          "title": "Exactly one sport",
          "brief": "Print ['Emma', 'Mike'] using symmetric difference.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Emma', 'Mike']"
            },
            {
              "type": "sourceIncludes",
              "value": " ^ ",
              "message": "Use symmetric difference"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Emma', 'Mike']"
          ]
        },
        {
          "id": "u4t08p05",
          "kind": "code",
          "title": "Subset verifier",
          "brief": "Print True to prove pets is a subset of mammals.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": ".issubset(",
              "message": "Use the subset method"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ]
        }
      ]
    },
    {
      "id": "u4t09",
      "title": "Sets - Frozensets and Real-World Matching",
      "summary": "Protect unique collections and apply set logic to practical problems.",
      "notebookLM": "",
      "notes": "\n<h4>Sets Part 4 - Frozensets and Practical Examples</h4>\n<p>The source presents frozenset as the immutable form of a set and applies intersection, difference and membership to mutual friends, ingredient gaps and spell checking.</p>\n<h4>The real-world analogy: Laminated Guest List</h4>\n<p>A normal set can be edited. A frozenset is laminated: membership and mathematical comparison still work, but add/remove operations are blocked.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 260\" role=\"img\" aria-label=\"Practical matching\">\n        <text x=\"350\" y=\"25\" text-anchor=\"middle\" class=\"lbl\">Practical matching</text>\n        <circle class=\"box\" cx=\"270\" cy=\"135\" r=\"100\"><animate attributeName=\"r\" values=\"96;103;96\" dur=\"3s\" repeatCount=\"indefinite\"/></circle>\n        <circle class=\"box\" cx=\"430\" cy=\"135\" r=\"100\"><animate attributeName=\"r\" values=\"103;96;103\" dur=\"3s\" repeatCount=\"indefinite\"/></circle>\n        <text x=\"225\" y=\"140\" text-anchor=\"middle\" class=\"mono\">have</text>\n        <text x=\"475\" y=\"140\" text-anchor=\"middle\" class=\"mono\">need</text>\n        <text x=\"350\" y=\"140\" text-anchor=\"middle\" class=\"mono\" style=\"font-weight:800\">shared / missing</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>frozenset():</strong> Creates an immutable unique collection.</li><li><strong>Mutual friends:</strong> Use intersection.</li><li><strong>Missing requirements:</strong> Use difference.</li><li><strong>Spell checking:</strong> Use fast membership in a large set.</li><li><strong>Stable set key:</strong> A frozenset can itself be used as a dictionary key.</li></ul>\n<h4>Locked set</h4><pre><code>vowels = frozenset([\"a\", \"e\", \"i\", \"o\", \"u\"])</code></pre><h4>Skills gap</h4><pre><code>requirements = {\"Python\", \"SQL\", \"Git\", \"AWS\"}\nskills = {\"Java\", \"Python\", \"Git\"}\nprint(requirements - skills)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>locked = frozenset([\"A\", \"B\"])\nprint(\"A\" in locked)</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">False</button><button data-o=\"2\">AttributeError</button><button data-o=\"3\">KeyError</button></div><p class=\"w__why\">Immutability blocks modification, not membership checks.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >locked.</button><button data-bad>add(</button><button >\"C\"</button><button >)</button></div>\n    <p class=\"w__why\">frozenset has no add method.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>friends_a &amp; friends_b</code></button><button data-pair=\"p1\"><code>needs - pantry</code></button><button data-pair=\"p2\"><code>word in dictionary_set</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">spell check</button><button data-pair=\"p1\">shopping list</button><button data-pair=\"p0\">mutual friends</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is a frozenset?",
          "options": [
            "Sorted set",
            "Immutable set",
            "Nested set",
            "Empty set"
          ],
          "answer": 1,
          "why": "A frozenset cannot be modified."
        },
        {
          "q": "Which operation finds mutual friends?",
          "options": [
            "Union",
            "Intersection",
            "Difference",
            "Clear"
          ],
          "answer": 1,
          "why": "Mutual means present in both sets."
        },
        {
          "q": "How do you find missing job skills?",
          "options": [
            "skills - requirements",
            "requirements - skills",
            "requirements | skills",
            "requirements & skills"
          ],
          "answer": 1,
          "why": "Subtract what the applicant already has."
        },
        {
          "q": "Why use a set for a spell checker?",
          "options": [
            "Fast membership",
            "Automatic correction",
            "Guaranteed order",
            "Mutable keys"
          ],
          "answer": 0,
          "why": "Hash membership is efficient."
        }
      ],
      "tasks": [
        {
          "id": "u4t09p01",
          "kind": "code",
          "title": "Create locked vowels",
          "brief": "Create a frozenset of five vowels and print its length.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5"
            },
            {
              "type": "sourceIncludes",
              "value": "frozenset(",
              "message": "Create the immutable set"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 5"
          ]
        },
        {
          "id": "u4t09p02",
          "kind": "code",
          "title": "Mutual friends",
          "brief": "Print ['Charlie', 'David'] from the intersection.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Charlie', 'David']"
            },
            {
              "type": "sourceIncludes",
              "value": " & ",
              "message": "Use intersection"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort output"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Charlie', 'David']"
          ]
        },
        {
          "id": "u4t09p03",
          "kind": "code",
          "title": "Shopping list",
          "brief": "Print ['Eggs', 'Vanilla'] as recipe needs minus pantry.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Eggs', 'Vanilla']"
            },
            {
              "type": "sourceIncludes",
              "value": " - ",
              "message": "Use difference"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Eggs', 'Vanilla']"
          ]
        },
        {
          "id": "u4t09p04",
          "kind": "code",
          "title": "Skill match",
          "brief": "Print ['Git', 'Python'] for skills shared with requirements.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Git', 'Python']"
            },
            {
              "type": "sourceIncludes",
              "value": " & ",
              "message": "Intersect the skills"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Git', 'Python']"
          ]
        },
        {
          "id": "u4t09p05",
          "kind": "code",
          "title": "Spell-check gate",
          "brief": "Given user_word='banna', print Spell Check Error.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Spell Check Error"
            },
            {
              "type": "sourceIncludes",
              "value": " not in dictionary",
              "message": "Use negative membership"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Spell Check Error"
          ]
        }
      ]
    },
    {
      "id": "u4t10",
      "title": "Revision Checkpoint 2 - Set Theory Arena",
      "summary": "Combine uniqueness, mutation, Venn operations and frozensets.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint - Sets</h4>\n<p>This mission consolidates duplicate removal, membership, union/intersection/difference, subset logic and immutable frozensets.</p>\n<h4>The real-world analogy: Tournament Registration</h4>\n<p>Registration data arrives with duplicates. The organiser cleans it, merges teams, finds overlap, identifies missing players and freezes the final roster.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Set mission flow\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Set mission flow</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">dedupe</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">merge</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">compare</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">validate</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">freeze</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Clean first:</strong> Convert repeated list data to a set.</li><li><strong>Make output predictable:</strong> Sort only when presenting to users.</li><li><strong>Use directional difference carefully:</strong> A - B is not the same as B - A.</li><li><strong>Freeze final rules:</strong> Convert stable unique data to frozenset.</li></ul>\n<h4>Mission skeleton</h4><pre><code>raw = [\"A\", \"B\", \"A\"]\nteam = set(raw)\nlocked_team = frozenset(team)\nprint(sorted(locked_team))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>A = {1, 2, 3}\nB = {3, 4}\nprint(len(A ^ B))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">3</button><button data-o=\"3\">4</button></div><p class=\"w__why\">The symmetric difference is {1,2,4}, which has three items.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >empty = </button><button data-bad>{}</button></div>\n    <p class=\"w__why\">This is a dictionary, not a set.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>discard</code></button><button data-pair=\"p1\"><code>intersection</code></button><button data-pair=\"p2\"><code>frozenset</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">locked set</button><button data-pair=\"p1\">shared items</button><button data-pair=\"p0\">safe remove</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which operation removes duplicates?",
          "options": [
            "list",
            "set",
            "tuple",
            "dict.items"
          ],
          "answer": 1,
          "why": "Sets retain only unique values."
        },
        {
          "q": "Which removal is safe for a missing item?",
          "options": [
            "remove",
            "discard",
            "pop",
            "clear"
          ],
          "answer": 1,
          "why": "discard does not raise."
        },
        {
          "q": "Which operator finds exactly-one-set items?",
          "options": [
            "|",
            "&",
            "-",
            "^"
          ],
          "answer": 3,
          "why": "Symmetric difference uses caret."
        },
        {
          "q": "Can a frozenset be modified?",
          "options": [
            "Yes",
            "No",
            "Only with add",
            "Only with remove"
          ],
          "answer": 1,
          "why": "It is immutable."
        }
      ],
      "tasks": [
        {
          "id": "u4t10p01",
          "kind": "code",
          "title": "Clean registrations",
          "brief": "Convert ['A','B','A','C','B'] and print ['A','B','C'].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['A', 'B', 'C']"
            },
            {
              "type": "sourceIncludes",
              "value": "set(",
              "message": "Deduplicate"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort output"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['A', 'B', 'C']"
          ]
        },
        {
          "id": "u4t10p02",
          "kind": "code",
          "title": "Merge groups",
          "brief": "Union {'A','B'} and {'B','C'} and print ['A','B','C'].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['A', 'B', 'C']"
            },
            {
              "type": "sourceIncludes",
              "value": " | ",
              "message": "Use union"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['A', 'B', 'C']"
          ]
        },
        {
          "id": "u4t10p03",
          "kind": "code",
          "title": "Find overlap",
          "brief": "Print ['B'] using intersection.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['B']"
            },
            {
              "type": "sourceIncludes",
              "value": " & ",
              "message": "Use intersection"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['B']"
          ]
        },
        {
          "id": "u4t10p04",
          "kind": "code",
          "title": "Freeze final roster",
          "brief": "Convert the union to frozenset and print True for 'C' membership.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "frozenset(",
              "message": "Freeze the roster"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ]
        },
        {
          "id": "u4t10p05",
          "kind": "code",
          "title": "Tournament summary",
          "brief": "Print Unique: 3, Shared: 1, Locked: True on three lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Unique: 3\nShared: 1\nLocked: True"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "set(",
              "message": "Use a set"
            },
            {
              "type": "sourceIncludes",
              "value": "frozenset(",
              "message": "Use a frozenset"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Unique: 3"
          ]
        }
      ]
    },
    {
      "id": "u4t11",
      "title": "Functions - Define, Call and Trace Execution",
      "summary": "Build reusable blocks and understand how execution jumps into function bodies.",
      "notebookLM": "",
      "notes": "\n<h4>Functions Part 1 - Introduction and Basics</h4>\n<p>The source explains why functions improve reusability, organisation and maintainability, then introduces def, function calls and flow of execution.</p>\n<h4>The real-world analogy: Factory Machine</h4>\n<p>Instead of rebuilding a steering wheel from raw parts for every car, the factory reuses a named machine. A function packages one task behind a callable name.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Function execution\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Function execution</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">define</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">call</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">run body</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">return</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">continue</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Definition:</strong> Use <code>def name():</code> and indent the body.</li><li><strong>Call:</strong> Run the function with <code>name()</code>.</li><li><strong>Definition does not execute:</strong> Python stores the function until a call occurs.</li><li><strong>Flow of execution:</strong> A call pauses the current line, runs the function, then resumes.</li></ul>\n<h4>Define and call</h4><pre><code>def say_hello():\n    print(\"Hello there!\")\n\nsay_hello()</code></pre><h4>Trace flow</h4><pre><code>print(\"1\")\ndef middle():\n    print(\"2\")\nmiddle()\nprint(\"3\")</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def middle():\n    print(\"2\")\nprint(\"1\")\nmiddle()\nprint(\"3\")</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">1 2 3</button><button data-o=\"1\">2 1 3</button><button data-o=\"2\">1 3 2</button><button data-o=\"3\">Nothing</button></div><p class=\"w__why\">The call runs middle between the two outer print statements.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def greet_user()</button><button >\n</button><button data-bad>print(\"Welcome\")</button></div>\n    <p class=\"w__why\">The function body must be indented.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>def</code></button><button data-pair=\"p1\"><code>greet()</code></button><button data-pair=\"p2\"><code>indented block</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">function body</button><button data-pair=\"p1\">call</button><button data-pair=\"p0\">define</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which keyword defines a function?",
          "options": [
            "function",
            "create",
            "def",
            "make"
          ],
          "answer": 2,
          "why": "Python uses def."
        },
        {
          "q": "Why does a def body not run immediately?",
          "options": [
            "It is invalid",
            "The function must be called",
            "Print is missing",
            "Python skips functions forever"
          ],
          "answer": 1,
          "why": "Definition stores the callable code."
        },
        {
          "q": "What is flow of execution?",
          "options": [
            "Download speed",
            "Order in which statements run",
            "A loop type",
            "A variable"
          ],
          "answer": 1,
          "why": "Function calls temporarily redirect execution."
        },
        {
          "q": "What must follow the function header?",
          "options": [
            "Semicolon",
            "Colon",
            "Comma",
            "Arrow"
          ],
          "answer": 1,
          "why": "A colon begins the indented suite."
        }
      ],
      "tasks": [
        {
          "id": "u4t11p01",
          "kind": "code",
          "title": "Define the greeter",
          "brief": "Define greet_user() to print Welcome to the system!, then call it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Welcome to the system!"
            },
            {
              "type": "sourceIncludes",
              "value": "def greet_user():",
              "message": "Define the function"
            },
            {
              "type": "sourceIncludes",
              "value": "greet_user()",
              "message": "Call the function"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Welcome to the system!"
          ]
        },
        {
          "id": "u4t11p02",
          "kind": "code",
          "title": "Call it three times",
          "brief": "Call a function that prints Echo exactly three times.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Echo\nEcho\nEcho"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "def ",
              "message": "Define a reusable function"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Echo"
          ]
        },
        {
          "id": "u4t11p03",
          "kind": "code",
          "title": "Trace steps",
          "brief": "Create do_math() so the program prints Step 1, Step 2, Step 3, Step 4 in order.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Step 1\nStep 2\nStep 3\nStep 4"
            },
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print at least 4 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "def do_math",
              "message": "Define do_math"
            },
            {
              "type": "sourceIncludes",
              "value": "do_math()",
              "message": "Call it"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Step 1"
          ]
        },
        {
          "id": "u4t11p04",
          "kind": "code",
          "title": "Reusable banner",
          "brief": "Define show_banner() that prints === ABHYASLAB === and call it twice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "=== ABHYASLAB ===\n=== ABHYASLAB ==="
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "def show_banner",
              "message": "Define the banner"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: === ABHYASLAB ==="
          ]
        },
        {
          "id": "u4t11p05",
          "kind": "code",
          "title": "Mini menu machine",
          "brief": "Define show_menu() that prints three numbered options on separate lines and call it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1. Learn\n2. Practice\n3. Quit"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "def show_menu",
              "message": "Create the menu function"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 1. Learn"
          ]
        }
      ]
    },
    {
      "id": "u4t12",
      "title": "Functions - Parameters, Arguments and Defaults",
      "summary": "Pass custom data with positional, keyword and default arguments.",
      "notebookLM": "",
      "notes": "\n<h4>Functions Part 2 - Parameters and Arguments</h4>\n<p>The source distinguishes parameters from arguments and covers positional matching, keyword arguments and default fallback values.</p>\n<h4>The real-world analogy: Coffee Order Slots</h4>\n<p>Parameters are labelled slots on the coffee machine. Arguments are the actual size, milk and flavour placed into those slots for one order.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 241\" role=\"img\" aria-label=\"Parameters receive arguments\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Parameters receive arguments</text>\n        <rect class=\"box\" x=\"70\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"61\" text-anchor=\"middle\" class=\"mono\">name</text><path class=\"arrow\" d=\"M270 55 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"61\" text-anchor=\"middle\" class=\"mono\">Alice</text><rect class=\"box\" x=\"70\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"123\" text-anchor=\"middle\" class=\"mono\">age</text><path class=\"arrow\" d=\"M270 117 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"123\" text-anchor=\"middle\" class=\"mono\">25</text><rect class=\"box\" x=\"70\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"185\" text-anchor=\"middle\" class=\"mono\">drink</text><path class=\"arrow\" d=\"M270 179 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"185\" text-anchor=\"middle\" class=\"mono\">Water</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Parameter:</strong> A variable in the function definition waiting for data.</li><li><strong>Argument:</strong> The real value supplied at call time.</li><li><strong>Positional:</strong> Matched by order.</li><li><strong>Keyword:</strong> Matched explicitly by parameter name.</li><li><strong>Default:</strong> Used when no replacement argument is supplied.</li></ul>\n<h4>Positional</h4><pre><code>def introduce(name, age):\n    print(name, age)\nintroduce(\"John\", 25)</code></pre><h4>Keyword and default</h4><pre><code>def order(main, drink=\"Coke\"):\n    print(main, drink)\norder(drink=\"Water\", main=\"Pizza\")</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def order(main, drink=\"Coke\"):\n    print(main, drink)\norder(\"Burger\")</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">Burger Coke</button><button data-o=\"1\">Coke Burger</button><button data-o=\"2\">TypeError</button><button data-o=\"3\">Burger</button></div><p class=\"w__why\">The omitted drink uses its default.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >introduce(</button><button data-bad>25</button><button >, </button><button >\"John\"</button><button >)</button></div>\n    <p class=\"w__why\">Positional order places 25 into name. Use keywords or reverse the arguments.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>parameter</code></button><button data-pair=\"p1\"><code>argument</code></button><button data-pair=\"p2\"><code>default</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">fallback value</button><button data-pair=\"p1\">value in call</button><button data-pair=\"p0\">slot in def</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is a parameter?",
          "options": [
            "Real call data",
            "Variable in the definition",
            "Return value",
            "Global variable"
          ],
          "answer": 1,
          "why": "Parameters wait for arguments."
        },
        {
          "q": "What is a keyword argument?",
          "options": [
            "Matched by explicit parameter name",
            "Always a string",
            "A default only",
            "An error"
          ],
          "answer": 0,
          "why": "Keywords make order less important."
        },
        {
          "q": "What happens when a defaulted argument is omitted?",
          "options": [
            "TypeError",
            "Fallback is used",
            "Function is deleted",
            "Input is requested"
          ],
          "answer": 1,
          "why": "The declared default supplies the value."
        },
        {
          "q": "Which call is keyword-based?",
          "options": [
            "greet(\"Ana\")",
            "greet(name=\"Ana\")",
            "greet[]",
            "def greet(name)"
          ],
          "answer": 1,
          "why": "The parameter name appears in the call."
        }
      ],
      "tasks": [
        {
          "id": "u4t12p01",
          "kind": "code",
          "title": "Custom greeter",
          "brief": "Define say_hi(first_name,last_name) and print Hello Shridhar Pandey.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello Shridhar Pandey"
            },
            {
              "type": "sourceIncludes",
              "value": "def say_hi(first_name, last_name)",
              "message": "Use two parameters"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hello Shridhar Pandey"
          ]
        },
        {
          "id": "u4t12p02",
          "kind": "code",
          "title": "Keyword order",
          "brief": "Call introduce(age=30,name='Sarah') and print Sarah is 30.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Sarah is 30"
            },
            {
              "type": "sourceIncludes",
              "value": "age=30",
              "message": "Use a keyword argument"
            },
            {
              "type": "sourceIncludes",
              "value": "name=\"Sarah\"",
              "message": "Name the second argument"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Sarah is 30"
          ]
        },
        {
          "id": "u4t12p03",
          "kind": "code",
          "title": "Default drink",
          "brief": "Define order_meal(main_dish, drink='Coke') and call it with Burger only.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Burger with Coke"
            },
            {
              "type": "sourceIncludes",
              "value": "drink=\"Coke\"",
              "message": "Create the default"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Burger with Coke"
          ]
        },
        {
          "id": "u4t12p04",
          "kind": "code",
          "title": "Override default",
          "brief": "Call the same function with Pizza and Water.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Pizza with Water"
            },
            {
              "type": "sourceIncludes",
              "value": "\"Water\"",
              "message": "Override the default"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Pizza with Water"
          ]
        },
        {
          "id": "u4t12p05",
          "kind": "code",
          "title": "Billing function",
          "brief": "Define calculate_bill(total,tip=5), return total+tip, and print 105 then 120 on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "105\n120"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "def calculate_bill(total, tip=5)",
              "message": "Define a default tip"
            },
            {
              "type": "sourceIncludes",
              "value": "return",
              "message": "Return the total"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 105"
          ]
        }
      ]
    },
    {
      "id": "u4t13",
      "title": "Functions - Return Values and Multiple Results",
      "summary": "Build fruitful functions whose outputs can be stored and composed.",
      "notebookLM": "",
      "notes": "\n<h4>Functions Part 3 - Returning Values</h4>\n<p>The source compares void and fruitful functions, explains return, unreachable code after return, and packing multiple results into a tuple.</p>\n<h4>The real-world analogy: ATM Screen vs Vending Machine</h4>\n<p>A print-only function displays information like an ATM screen. A fruitful function returns a value like a vending machine handing you an item you can reuse.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Fruitful function\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Fruitful function</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">arguments</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">calculate</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">return</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">store</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">reuse</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Void function:</strong> Performs an action and implicitly returns None.</li><li><strong>Fruitful function:</strong> Uses return to hand data back.</li><li><strong>Immediate exit:</strong> Statements below an executed return do not run.</li><li><strong>Multiple values:</strong> Comma-separated returned values form one tuple that can be unpacked.</li></ul>\n<h4>Fruitful addition</h4><pre><code>def add_numbers(x, y):\n    return x + y\nresult = add_numbers(10, 5)</code></pre><h4>Multiple results</h4><pre><code>def stats():\n    return \"Alice\", 99, \"Level 5\"\nname, hp, rank = stats()</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def show_sum(a, b):\n    print(a + b)\nanswer = show_sum(5, 5)\nprint(answer)</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">10 only</button><button data-o=\"1\">10 then None</button><button data-o=\"2\">None then 10</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">print displays 10, but the function returns None.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >return answer</button><button >\n</button><button data-bad>print(\"Finished\")</button></div>\n    <p class=\"w__why\">Code after an executed return is unreachable.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>print</code></button><button data-pair=\"p1\"><code>return</code></button><button data-pair=\"p2\"><code>a, b = result</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">tuple unpacking</button><button data-pair=\"p1\">hand value to program</button><button data-pair=\"p0\">display to human</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is the main difference between print and return?",
          "options": [
            "No difference",
            "Return hands data back; print displays",
            "Print returns; return displays",
            "Return only works on text"
          ],
          "answer": 1,
          "why": "Returned data can be stored and reused."
        },
        {
          "q": "What happens after return executes?",
          "options": [
            "Function continues",
            "Function exits",
            "Function loops",
            "Function asks input"
          ],
          "answer": 1,
          "why": "Return terminates that call."
        },
        {
          "q": "How are several values returned?",
          "options": [
            "Several unrelated objects",
            "Packed into a tuple",
            "A set",
            "A dictionary automatically"
          ],
          "answer": 1,
          "why": "Comma-separated values create a tuple."
        },
        {
          "q": "What does a function with no explicit return yield?",
          "options": [
            "0",
            "False",
            "None",
            "Empty string"
          ],
          "answer": 2,
          "why": "Python returns None implicitly."
        }
      ],
      "tasks": [
        {
          "id": "u4t13p01",
          "kind": "code",
          "title": "Fruitful multiply",
          "brief": "Return a*b and print 42 for multiply(6,7).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "42"
            },
            {
              "type": "sourceIncludes",
              "value": "return a * b",
              "message": "Return the product"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 42"
          ]
        },
        {
          "id": "u4t13p02",
          "kind": "code",
          "title": "Catch the answer",
          "brief": "Store add_numbers(10,5) in result and print The answer is 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "The answer is 15"
            },
            {
              "type": "sourceIncludes",
              "value": "result = add_numbers",
              "message": "Store the return value"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: The answer is 15"
          ]
        },
        {
          "id": "u4t13p03",
          "kind": "code",
          "title": "Multiple returns",
          "brief": "Return 10,20,30 and unpack them, then print 20.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20"
            },
            {
              "type": "sourceIncludes",
              "value": "return 10, 20, 30",
              "message": "Return three values"
            },
            {
              "type": "sourceIncludes",
              "value": "length, width, height",
              "message": "Unpack the tuple"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 20"
          ]
        },
        {
          "id": "u4t13p04",
          "kind": "code",
          "title": "Early-return validator",
          "brief": "Return Invalid when age is below 0, otherwise return Accepted. Test -1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Invalid"
            },
            {
              "type": "sourceIncludes",
              "value": "return \"Invalid\"",
              "message": "Use an early return"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Invalid"
          ]
        },
        {
          "id": "u4t13p05",
          "kind": "code",
          "title": "Mini statistics function",
          "brief": "Define stats(numbers) returning total, minimum and maximum; print 15, 1, 5 on separate lines for [1,2,3,4,5].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15\n1\n5"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "return total, smallest, largest",
              "message": "Return multiple results"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 15"
          ]
        }
      ]
    },
    {
      "id": "u4t14",
      "title": "Functions - Flexible Inputs with *args and **kwargs",
      "summary": "Accept variable numbers of positional and keyword arguments.",
      "notebookLM": "",
      "notes": "\n<h4>Functions Part 4 - Variable-Length Arguments</h4>\n<p>The source explains that *args collects extra positional arguments in a tuple, while **kwargs collects keyword arguments in a dictionary.</p>\n<h4>The real-world analogy: Buffet Plate and Custom Pizza</h4>\n<p>*args is a plate that accepts any number of positional items. **kwargs is a labelled custom-order form containing key-value options.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 241\" role=\"img\" aria-label=\"Flexible argument packing\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Flexible argument packing</text>\n        <rect class=\"box\" x=\"70\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"61\" text-anchor=\"middle\" class=\"mono\">*args</text><path class=\"arrow\" d=\"M270 55 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"61\" text-anchor=\"middle\" class=\"mono\">tuple</text><rect class=\"box\" x=\"70\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"123\" text-anchor=\"middle\" class=\"mono\">**kwargs</text><path class=\"arrow\" d=\"M270 117 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"123\" text-anchor=\"middle\" class=\"mono\">dictionary</text><rect class=\"box\" x=\"70\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"185\" text-anchor=\"middle\" class=\"mono\">items()</text><path class=\"arrow\" d=\"M270 179 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"185\" text-anchor=\"middle\" class=\"mono\">unpack kwargs</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>*args:</strong> Collects positional arguments into a tuple.</li><li><strong>**kwargs:</strong> Collects keyword arguments into a dictionary.</li><li><strong>Conventions:</strong> The names args and kwargs are conventional; the asterisks create the behaviour.</li><li><strong>Iteration:</strong> Loop over args directly and kwargs.items() for labelled values.</li></ul>\n<h4>Flexible sum</h4><pre><code>def add_everything(*args):\n    return sum(args)\nprint(add_everything(1,2,3,4,5))</code></pre><h4>Profile builder</h4><pre><code>def build_profile(**kwargs):\n    for key, value in kwargs.items():\n        print(key, value)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def inspect(*args, **kwargs):\n    print(type(args).__name__, type(kwargs).__name__)\ninspect(1, name=\"A\")</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">list dict</button><button data-o=\"1\">tuple dict</button><button data-o=\"2\">tuple list</button><button data-o=\"3\">set dict</button></div><p class=\"w__why\">Positional extras become a tuple; keyword extras become a dictionary.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def total(</button><button data-bad>**args</button><button >):</button></div>\n    <p class=\"w__why\">Double asterisk is for keyword arguments. Positional extras use *args.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>*args</code></button><button data-pair=\"p1\"><code>**kwargs</code></button><button data-pair=\"p2\"><code>kwargs.items()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">label and value</button><button data-pair=\"p1\">extra keyword data</button><button data-pair=\"p0\">extra positional data</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What type receives *args?",
          "options": [
            "String",
            "List",
            "Tuple",
            "Dictionary"
          ],
          "answer": 2,
          "why": "args is a tuple."
        },
        {
          "q": "What type receives **kwargs?",
          "options": [
            "String",
            "List",
            "Tuple",
            "Dictionary"
          ],
          "answer": 3,
          "why": "kwargs is a dictionary."
        },
        {
          "q": "Why use *args?",
          "options": [
            "Multiplication",
            "Variable positional argument count",
            "Make text bold",
            "Global scope"
          ],
          "answer": 1,
          "why": "It handles any number of positional values."
        },
        {
          "q": "Which loop reads kwargs labels and values?",
          "options": [
            "for x in kwargs",
            "for k,v in kwargs.items()",
            "for x in args.items()",
            "for x in len(kwargs)"
          ],
          "answer": 1,
          "why": "items() exposes both parts."
        }
      ],
      "tasks": [
        {
          "id": "u4t14p01",
          "kind": "code",
          "title": "Name printer",
          "brief": "Define print_names(*args) and print five supplied names on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Alice\nBob\nCharlie\nDavid\nEve"
            },
            {
              "type": "stdoutMinLines",
              "value": 5,
              "message": "Print at least 5 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "*args",
              "message": "Collect names"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Alice"
          ]
        },
        {
          "id": "u4t14p02",
          "kind": "code",
          "title": "Flexible total",
          "brief": "Return the sum of any positional numbers and print 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "*args",
              "message": "Use flexible arguments"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(args)",
              "message": "Sum the tuple"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 15"
          ]
        },
        {
          "id": "u4t14p03",
          "kind": "code",
          "title": "Inspector types",
          "brief": "Print tuple then dict on separate lines for args and kwargs.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "tuple\ndict"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "*args",
              "message": "Collect positional"
            },
            {
              "type": "sourceIncludes",
              "value": "**kwargs",
              "message": "Collect keywords"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: tuple"
          ]
        },
        {
          "id": "u4t14p04",
          "kind": "code",
          "title": "Car builder",
          "brief": "Print make: Ford, model: Mustang and color: Red on three lines using kwargs.items().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "make: Ford\nmodel: Mustang\ncolor: Red"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "**kwargs",
              "message": "Collect car options"
            },
            {
              "type": "sourceIncludes",
              "value": ".items()",
              "message": "Loop through pairs"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: make: Ford"
          ]
        },
        {
          "id": "u4t14p05",
          "kind": "code",
          "title": "Mini order summary",
          "brief": "Define build_order(customer,*items,**options) and print Customer: Mira, Items: 3, priority: high.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Customer: Mira\nItems: 3\npriority: high"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "*items",
              "message": "Collect order items"
            },
            {
              "type": "sourceIncludes",
              "value": "**options",
              "message": "Collect labelled options"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Customer: Mira"
          ]
        }
      ]
    },
    {
      "id": "u4t15",
      "title": "Functions - Local Scope, Global Scope and Namespaces",
      "summary": "Control where variables live and avoid accidental state changes.",
      "notebookLM": "",
      "notes": "\n<h4>Functions Part 5 - Scope and Namespaces</h4>\n<p>The source describes namespaces, local and global scope, local-variable lifetime, and the global keyword for deliberate global modification.</p>\n<h4>The real-world analogy: Different Schools</h4>\n<p>Two schools may each have a John Smith without conflict because each building has its own roster. Function namespaces isolate local names similarly.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 241\" role=\"img\" aria-label=\"Scope boundaries\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Scope boundaries</text>\n        <rect class=\"box\" x=\"70\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"61\" text-anchor=\"middle\" class=\"mono\">global</text><path class=\"arrow\" d=\"M270 55 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"61\" text-anchor=\"middle\" class=\"mono\">visible inward</text><rect class=\"box\" x=\"70\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"123\" text-anchor=\"middle\" class=\"mono\">local</text><path class=\"arrow\" d=\"M270 117 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"123\" text-anchor=\"middle\" class=\"mono\">function only</text><rect class=\"box\" x=\"70\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"185\" text-anchor=\"middle\" class=\"mono\">global keyword</text><path class=\"arrow\" d=\"M270 179 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"185\" text-anchor=\"middle\" class=\"mono\">modify outer value</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Global scope:</strong> Names created at file level can be read inside functions.</li><li><strong>Local scope:</strong> Names created inside a function are unavailable outside it.</li><li><strong>Lifetime:</strong> Local variables disappear when the call ends.</li><li><strong>global keyword:</strong> Allows assignment to a file-level variable from inside a function.</li><li><strong>Best practice:</strong> Prefer returning values over modifying globals when practical.</li></ul>\n<h4>Read a global</h4><pre><code>message = \"Global Hello\"\ndef reader():\n    print(message)</code></pre><h4>Modify deliberately</h4><pre><code>score = 0\ndef win():\n    global score\n    score = 100</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>x = 10\ndef demo():\n    x = 20\n    print(x)\ndemo()\nprint(x)</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">20 then 20</button><button data-o=\"1\">20 then 10</button><button data-o=\"2\">10 then 20</button><button data-o=\"3\">NameError</button></div><p class=\"w__why\">The local x shadows but does not change the global x.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def cheat():</button><button >\n    </button><button data-bad>points = 999</button></div>\n    <p class=\"w__why\">Without global points, this assignment creates a local name.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>global variable</code></button><button data-pair=\"p1\"><code>local variable</code></button><button data-pair=\"p2\"><code>global keyword</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">modify outer name</button><button data-pair=\"p1\">function-only secret</button><button data-pair=\"p0\">file-level billboard</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What happens to a local variable after the call ends?",
          "options": [
            "Saved forever",
            "Becomes global",
            "It is destroyed",
            "It becomes a parameter"
          ],
          "answer": 2,
          "why": "Local call state is released."
        },
        {
          "q": "Can a function read a global variable?",
          "options": [
            "Yes",
            "No",
            "Only numbers",
            "Only after import"
          ],
          "answer": 0,
          "why": "Name lookup can reach outward."
        },
        {
          "q": "What does global enable?",
          "options": [
            "Internet access",
            "Modification of a global binding",
            "Translation",
            "Local creation"
          ],
          "answer": 1,
          "why": "It tells assignment to target the global name."
        },
        {
          "q": "Which design is usually easier to test?",
          "options": [
            "Many globals",
            "Return values from functions",
            "No functions",
            "Alias every variable"
          ],
          "answer": 1,
          "why": "Explicit inputs and outputs reduce hidden state."
        }
      ],
      "tasks": [
        {
          "id": "u4t15p01",
          "kind": "code",
          "title": "Read the billboard",
          "brief": "Create global message and print it inside reader().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Global Hello"
            },
            {
              "type": "sourceIncludes",
              "value": "def reader",
              "message": "Create the function"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Global Hello"
          ]
        },
        {
          "id": "u4t15p02",
          "kind": "code",
          "title": "Local shadow",
          "brief": "Print 20 inside demo and 10 outside.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "20\n10"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "x = 20",
              "message": "Create local x"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 20"
          ]
        },
        {
          "id": "u4t15p03",
          "kind": "code",
          "title": "Global score changer",
          "brief": "Use global points to change 50 to 999 and print 999 outside.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "999"
            },
            {
              "type": "sourceIncludes",
              "value": "global points",
              "message": "Declare global modification"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 999"
          ]
        },
        {
          "id": "u4t15p04",
          "kind": "code",
          "title": "Return instead of global",
          "brief": "Write increment(value) returning value+1, update score outside, and print 6.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "6"
            },
            {
              "type": "sourceIncludes",
              "value": "return value + 1",
              "message": "Return the new value"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 6"
          ]
        },
        {
          "id": "u4t15p05",
          "kind": "code",
          "title": "Mini counter factory",
          "brief": "Define add_points(current,earned) with no global statement and print 125 for 100+25.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "125"
            },
            {
              "type": "sourceIncludes",
              "value": "def add_points",
              "message": "Define the function"
            },
            {
              "type": "sourceIncludes",
              "value": "return",
              "message": "Return updated state"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 125"
          ]
        }
      ]
    },
    {
      "id": "u4t16",
      "title": "Functions - Built-ins, Composition and Higher-Order Functions",
      "summary": "Chain fruitful functions and pass functions as values.",
      "notebookLM": "",
      "notes": "\n<h4>Functions Part 6 - Advanced Concepts and Built-ins</h4>\n<p>The source reframes int, float, str, abs, max, min and math.sqrt as functions, explains function composition, and introduces passing functions as arguments.</p>\n<h4>The real-world analogy: Factory Assembly Line</h4>\n<p>The output of one machine feeds directly into the next. In code, an inner function returns a value consumed immediately by the outer function.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Function composition\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Function composition</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">input</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">int</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">abs</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">sqrt</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">print</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Built-ins:</strong> Conversion and maths tools are pre-written fruitful functions.</li><li><strong>Composition:</strong> Use one return value directly as another call's argument.</li><li><strong>Inside-out evaluation:</strong> The innermost call runs first.</li><li><strong>Functions are objects:</strong> A function can be stored or passed without calling it.</li><li><strong>Higher-order function:</strong> Accepts another function or returns one.</li></ul>\n<h4>Composition</h4><pre><code>import math\nprint(math.sqrt(abs(-25)))</code></pre><h4>Pass a function</h4><pre><code>def shout(text):\n    return text.upper()\ndef execute(func, message):\n    return func(message)\nprint(execute(shout, \"hello\"))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>print(max(abs(-3), abs(-8)))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">-8</button><button data-o=\"1\">3</button><button data-o=\"2\">8</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">abs produces 3 and 8; max returns 8.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >execute_tool(</button><button data-bad>shout()</button><button >, \"hello\")</button></div>\n    <p class=\"w__why\">Pass shout without parentheses; shout() would call it immediately without an argument.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>abs(-5)</code></button><button data-pair=\"p1\"><code>max(2,9)</code></button><button data-pair=\"p2\"><code>func(message)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">call passed function</button><button data-pair=\"p1\">9</button><button data-pair=\"p0\">5</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is int('5')?",
          "options": [
            "Keyword use",
            "Calling a built-in function",
            "Implicit coercion",
            "A lambda"
          ],
          "answer": 1,
          "why": "int is a callable conversion function."
        },
        {
          "q": "What is function composition?",
          "options": [
            "Delete functions",
            "Feed one return value into another call",
            "Tuple packing",
            "Global scope"
          ],
          "answer": 1,
          "why": "Composed calls form a pipeline."
        },
        {
          "q": "Can a function be passed as an argument?",
          "options": [
            "No",
            "Yes",
            "Only void functions",
            "Only lambdas"
          ],
          "answer": 1,
          "why": "Functions are objects."
        },
        {
          "q": "How do you pass shout itself?",
          "options": [
            "shout()",
            "shout",
            "'shout'",
            "def shout"
          ],
          "answer": 1,
          "why": "Omit parentheses to pass the function object."
        }
      ],
      "tasks": [
        {
          "id": "u4t16p01",
          "kind": "code",
          "title": "Built-in length",
          "brief": "Save len('Programming') and print 11.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "11"
            },
            {
              "type": "sourceIncludes",
              "value": "len(",
              "message": "Call len"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 11"
          ]
        },
        {
          "id": "u4t16p02",
          "kind": "code",
          "title": "Composition line",
          "brief": "Print the absolute integer value of input '-42' without temporary variables; use a fixed string instead of interactive input.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "42"
            },
            {
              "type": "sourceIncludes",
              "value": "abs(int(",
              "message": "Compose int inside abs"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 42"
          ]
        },
        {
          "id": "u4t16p03",
          "kind": "code",
          "title": "Square-root pipeline",
          "brief": "Import math and print 5.0 from math.sqrt(abs(-25)).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5.0"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sqrt(abs(-25))",
              "message": "Compose functions"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 5.0"
          ]
        },
        {
          "id": "u4t16p04",
          "kind": "code",
          "title": "Pass the machine",
          "brief": "Define add_ten and apply_machine, then print 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "machine(num)",
              "message": "Call the passed function"
            },
            {
              "type": "sourceIncludes",
              "value": "apply_machine(add_ten, 5)",
              "message": "Pass add_ten without calling it"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 15"
          ]
        },
        {
          "id": "u4t16p05",
          "kind": "code",
          "title": "Mini transformation router",
          "brief": "Create upper(text), lower(text), apply(tool,text); print PYTHON then python.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "PYTHON\npython"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "tool(text)",
              "message": "Call the selected function"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: PYTHON"
          ]
        }
      ]
    },
    {
      "id": "u4t17",
      "title": "Functional Programming - Lambda Expressions",
      "summary": "Write small anonymous one-expression functions.",
      "notebookLM": "",
      "notes": "\n<h4>Functional Programming Basics Part 1 - Lambda Expressions</h4>\n<p>The source introduces anonymous functions, lambda syntax, automatic return and the one-expression restriction.</p>\n<h4>The real-world analogy: Sticky Note Function</h4>\n<p>A def function is an official filed document. A lambda is a quick sticky note for one compact transformation used briefly.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Lambda anatomy\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Lambda anatomy</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">lambda</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">arguments</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">:</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">expression</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Anonymous:</strong> A lambda does not require a declared name.</li><li><strong>Syntax:</strong> <code>lambda arguments: expression</code>.</li><li><strong>Single expression:</strong> No multi-line statement block.</li><li><strong>Automatic return:</strong> The expression's value is returned.</li><li><strong>Best fit:</strong> Short transformations for sorted, map or filter.</li></ul>\n<h4>Two arguments</h4><pre><code>multiply = lambda x, y: x * y\nprint(multiply(5, 4))</code></pre><h4>Boolean result</h4><pre><code>is_even = lambda x: x % 2 == 0</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>func = lambda x: x ** 2\nprint(func(3))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">6</button><button data-o=\"1\">9</button><button data-o=\"2\">x 2</button><button data-o=\"3\">Error</button></div><p class=\"w__why\">The expression squares 3.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >lambda x:</button><button >\n    </button><button data-bad>return x + 1</button></div>\n    <p class=\"w__why\">A lambda cannot contain a return statement or multi-line block.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>lambda</code></button><button data-pair=\"p1\"><code>:</code></button><button data-pair=\"p2\"><code>x % 2 == 0</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Boolean expression</button><button data-pair=\"p1\">separates inputs and expression</button><button data-pair=\"p0\">anonymous function</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is an anonymous function?",
          "options": [
            "Hacker function",
            "Unnamed lambda function",
            "Function without arguments",
            "Hidden module"
          ],
          "answer": 1,
          "why": "Lambda creates a function expression without def."
        },
        {
          "q": "How many expressions may a lambda contain?",
          "options": [
            "One",
            "Two",
            "Unlimited",
            "Zero only"
          ],
          "answer": 0,
          "why": "Lambda is limited to one expression."
        },
        {
          "q": "Does lambda require return?",
          "options": [
            "Yes",
            "No",
            "Only for strings",
            "Only with map"
          ],
          "answer": 1,
          "why": "The expression is returned automatically."
        },
        {
          "q": "What does lambda x: x**2 return for 4?",
          "options": [
            "8",
            "16",
            "4",
            "Error"
          ],
          "answer": 1,
          "why": "Four squared is sixteen."
        }
      ],
      "tasks": [
        {
          "id": "u4t17p01",
          "kind": "code",
          "title": "Add fifteen",
          "brief": "Create add_15 lambda and print 25 for 10.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "25"
            },
            {
              "type": "sourceIncludes",
              "value": "lambda a: a + 15",
              "message": "Write the lambda"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 25"
          ]
        },
        {
          "id": "u4t17p02",
          "kind": "code",
          "title": "Subtract",
          "brief": "Create lambda x,y: x-y and print 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "lambda x, y: x - y",
              "message": "Use two arguments"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 15"
          ]
        },
        {
          "id": "u4t17p03",
          "kind": "code",
          "title": "Password check",
          "brief": "Create check_pass lambda and print False for hello.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": "lambda password: password == \"secret123\"",
              "message": "Return a Boolean"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: False"
          ]
        },
        {
          "id": "u4t17p04",
          "kind": "code",
          "title": "Lambda greeter",
          "brief": "Create a lambda returning Hello, Alice! and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hello, Alice!"
            },
            {
              "type": "sourceIncludes",
              "value": "lambda name:",
              "message": "Accept the name"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hello, Alice!"
          ]
        },
        {
          "id": "u4t17p05",
          "kind": "code",
          "title": "Mini price rule",
          "brief": "Use a lambda to add 18% tax to 100 and print 118.0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "118.0"
            },
            {
              "type": "sourceIncludes",
              "value": "lambda price: price * 1.18",
              "message": "Create the tax transformation"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 118.0"
          ]
        }
      ]
    },
    {
      "id": "u4t18",
      "title": "Functional Programming - map() and filter()",
      "summary": "Transform or select every item without writing an explicit loop.",
      "notebookLM": "",
      "notes": "\n<h4>Functional Programming Basics Part 2 - map and filter</h4>\n<p>The source explains map as a transformation applied to every item and filter as a Boolean selection gate. Both return lazy iterator objects in Python 3.</p>\n<h4>The real-world analogy: Assembly Arm and VIP Bouncer</h4>\n<p>map paints every car on the line. filter asks each person a True/False admission question and keeps only those who pass.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Functional data pipeline\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Functional data pipeline</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">list</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">map/filter</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">iterator</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">list()</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">result</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>map(function, iterable):</strong> Transforms every item.</li><li><strong>filter(function, iterable):</strong> Keeps items for which the function returns truthy.</li><li><strong>Iterator result:</strong> Wrap with list() for a reusable displayed list.</li><li><strong>No original mutation:</strong> These tools create a new result stream.</li></ul>\n<h4>Map</h4><pre><code>numbers = [1,2,3]\ndoubled = list(map(lambda x: x*2, numbers))</code></pre><h4>Filter</h4><pre><code>ages = [12,18,25]\nadults = list(filter(lambda age: age &gt;= 18, ages))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>data=[1,2,3,4]\nresult=list(filter(lambda x:x&gt;2,data))\nprint(result)</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">[1,2]</button><button data-o=\"1\">[3,4]</button><button data-o=\"2\">[2,3,4]</button><button data-o=\"3\">Iterator</button></div><p class=\"w__why\">Only values greater than 2 are kept.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >doubled = </button><button data-bad>map(lambda x: x*2, numbers)</button><button >\nprint(doubled)</button></div>\n    <p class=\"w__why\">map returns an iterator representation; wrap it in list() for the expected list display.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>map</code></button><button data-pair=\"p1\"><code>filter</code></button><button data-pair=\"p2\"><code>list(...)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">materialise iterator</button><button data-pair=\"p1\">keep passing items</button><button data-pair=\"p0\">transform each item</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does map primarily do?",
          "options": [
            "Sort",
            "Transform every item",
            "Delete items",
            "Find directions"
          ],
          "answer": 1,
          "why": "map applies a function across the iterable."
        },
        {
          "q": "What must a filter predicate decide?",
          "options": [
            "A displayed string",
            "Truthiness for keep/discard",
            "A sort key only",
            "A dictionary key"
          ],
          "answer": 1,
          "why": "filter retains truthy items."
        },
        {
          "q": "Why wrap map/filter with list?",
          "options": [
            "To materialise the iterator",
            "Because strings fail",
            "To avoid all errors",
            "To shuffle"
          ],
          "answer": 0,
          "why": "The iterator is consumed into a list."
        },
        {
          "q": "Does map change the original list?",
          "options": [
            "Yes",
            "No",
            "Only numbers",
            "Only lambdas"
          ],
          "answer": 1,
          "why": "It produces a separate iterator."
        }
      ],
      "tasks": [
        {
          "id": "u4t18p01",
          "kind": "code",
          "title": "Upper-caser",
          "brief": "Map upper() over three words and print the resulting list.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['HELLO', 'WORLD', 'PYTHON']"
            },
            {
              "type": "sourceIncludes",
              "value": "map(",
              "message": "Use map"
            },
            {
              "type": "sourceIncludes",
              "value": ".upper()",
              "message": "Transform each word"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['HELLO', 'WORLD', 'PYTHON']"
          ]
        },
        {
          "id": "u4t18p02",
          "kind": "code",
          "title": "Tax calculator",
          "brief": "Map 1.10 over [10.0,20.0,50.0] and print [11.0,22.0,55.0].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[11.0, 22.0, 55.0]"
            },
            {
              "type": "sourceIncludes",
              "value": "map(",
              "message": "Use map"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [11.0, 22.0, 55.0]"
          ]
        },
        {
          "id": "u4t18p03",
          "kind": "code",
          "title": "Evens only",
          "brief": "Filter even numbers from 1..8.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[2, 4, 6, 8]"
            },
            {
              "type": "sourceIncludes",
              "value": "filter(",
              "message": "Use filter"
            },
            {
              "type": "sourceIncludes",
              "value": "x % 2 == 0",
              "message": "Write the predicate"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [2, 4, 6, 8]"
          ]
        },
        {
          "id": "u4t18p04",
          "kind": "code",
          "title": "Long animals",
          "brief": "Keep animal names longer than 4.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['elephant', 'hippopotamus']"
            },
            {
              "type": "sourceIncludes",
              "value": "filter(",
              "message": "Use filter"
            },
            {
              "type": "sourceIncludes",
              "value": "len(x) > 4",
              "message": "Filter by length"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['elephant', 'hippopotamus']"
          ]
        },
        {
          "id": "u4t18p05",
          "kind": "code",
          "title": "Filter then map",
          "brief": "From [1,2,3,4], keep >2 then multiply by 10; print [30,40].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[30, 40]"
            },
            {
              "type": "sourceIncludes",
              "value": "filter(",
              "message": "First filter"
            },
            {
              "type": "sourceIncludes",
              "value": "map(",
              "message": "Then map"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [30, 40]"
          ]
        }
      ]
    },
    {
      "id": "u4t19",
      "title": "Functional Programming - sorted(), reduce() and Best Practices",
      "summary": "Provide custom sort keys and combine sequences into one result.",
      "notebookLM": "",
      "notes": "\n<h4>Functional Programming Basics Part 3 - Advanced Tools and Best Practices</h4>\n<p>The source uses lambda as a key for sorting complex records, introduces functools.reduce, and explains when a normal def function is clearer.</p>\n<h4>The real-world analogy: Library Rule and Rolling Snowball</h4>\n<p>A sort key tells the librarian which field matters. reduce rolls values together one by one until only a single accumulated result remains.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Reduce accumulation\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Reduce accumulation</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">1+2</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">3+3</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">6+4</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">10+5</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">15</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>sorted(..., key=...):</strong> The key function extracts the comparison value.</li><li><strong>reduce(function, iterable):</strong> Combines items into one accumulated result.</li><li><strong>Two-argument reducer:</strong> Receives running result and next item.</li><li><strong>Use def for complexity:</strong> Choose a named function when logic is reused or hard to read.</li></ul>\n<h4>Sort by grade</h4><pre><code>students = [(\"Alice\",85),(\"Bob\",99),(\"Charlie\",72)]\nprint(sorted(students, key=lambda x: x[1]))</code></pre><h4>Reduce</h4><pre><code>from functools import reduce\nprint(reduce(lambda total,n: total+n, [1,2,3,4,5]))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>from functools import reduce\nprint(reduce(lambda a,b:a*b,[2,3,4]))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">9</button><button data-o=\"1\">24</button><button data-o=\"2\">10</button><button data-o=\"3\">[2,3,4]</button></div><p class=\"w__why\">The running product is 2×3×4 = 24.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >greet = </button><button data-bad>lambda name: print(f\"Welcome {name}\")</button></div>\n    <p class=\"w__why\">A reusable named operation should normally use def for readability.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>key=lambda x:x[1]</code></button><button data-pair=\"p1\"><code>reduce</code></button><button data-pair=\"p2\"><code>def</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">complex reusable logic</button><button data-pair=\"p1\">one accumulated result</button><button data-pair=\"p0\">sort by second field</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What does sorted key= control?",
          "options": [
            "Password",
            "Comparison field",
            "List locking",
            "Automatic reverse"
          ],
          "answer": 1,
          "why": "The key function supplies the sort criterion."
        },
        {
          "q": "What is reduce used for?",
          "options": [
            "Create many lists",
            "Accumulate to one result",
            "Filter only",
            "Import modules"
          ],
          "answer": 1,
          "why": "reduce rolls a sequence into one value."
        },
        {
          "q": "How many arguments does a standard reducer lambda take?",
          "options": [
            "One",
            "Two",
            "Three",
            "Unlimited only"
          ],
          "answer": 1,
          "why": "It receives accumulator and next item."
        },
        {
          "q": "When should def replace lambda?",
          "options": [
            "Complex reusable logic",
            "Every map call",
            "Simple throwaway key",
            "Never"
          ],
          "answer": 0,
          "why": "Named functions improve clarity for nontrivial work."
        }
      ],
      "tasks": [
        {
          "id": "u4t19p01",
          "kind": "code",
          "title": "Sort by age",
          "brief": "Sort the supplied people tuples by index 1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[('Zack', 22), ('Alice', 30), ('John', 45)]"
            },
            {
              "type": "sourceIncludes",
              "value": "key=lambda x: x[1]",
              "message": "Sort by age"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [('Zack', 22), ('Alice', 30), ('John', 45)]"
          ]
        },
        {
          "id": "u4t19p02",
          "kind": "code",
          "title": "Sort by last letter",
          "brief": "Sort banana, apple, cherry by final character.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['banana', 'apple', 'cherry']"
            },
            {
              "type": "sourceIncludes",
              "value": "key=lambda x: x[-1]",
              "message": "Use the last letter"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['banana', 'apple', 'cherry']"
          ]
        },
        {
          "id": "u4t19p03",
          "kind": "code",
          "title": "Reduce product",
          "brief": "Multiply [2,3,4] with reduce and print 24.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "24"
            },
            {
              "type": "sourceIncludes",
              "value": "from functools import reduce",
              "message": "Import reduce"
            },
            {
              "type": "sourceIncludes",
              "value": "reduce(",
              "message": "Use reduce"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 24"
          ]
        },
        {
          "id": "u4t19p04",
          "kind": "code",
          "title": "Reduce maximum",
          "brief": "Use reduce to find 50 in [10,50,20,5].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "50"
            },
            {
              "type": "sourceIncludes",
              "value": "a if a > b else b",
              "message": "Use a conditional expression"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 50"
          ]
        },
        {
          "id": "u4t19p05",
          "kind": "code",
          "title": "Refactor lambda",
          "brief": "Replace a reusable greet lambda with def greet(name), then print Welcome to the system, Mira!",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Welcome to the system, Mira!"
            },
            {
              "type": "sourceIncludes",
              "value": "def greet(name):",
              "message": "Use def for reusable logic"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Welcome to the system, Mira!"
          ]
        }
      ]
    },
    {
      "id": "u4t20",
      "title": "Revision Checkpoint 3 - Function Workshop",
      "summary": "Combine parameters, returns, flexible inputs, scope and functional tools.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint - Functions and Functional Programming</h4>\n<p>This checkpoint asks students to design clean function interfaces, return reusable values, accept flexible arguments, compose transformations and choose lambda or def appropriately.</p>\n<h4>The real-world analogy: Tool Workshop</h4>\n<p>Each tool has labelled inputs and a predictable output. The workshop supervisor chooses the correct tool, passes the right materials and avoids hidden global state.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Function workshop\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Function workshop</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">inputs</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">function</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">return</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">compose</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">report</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Clear contract:</strong> Give each function one purpose.</li><li><strong>Explicit inputs:</strong> Prefer parameters over hidden global dependencies.</li><li><strong>Reusable outputs:</strong> Return values rather than only printing.</li><li><strong>Functional tools:</strong> Use lambda/map/filter/sorted for simple transformations.</li><li><strong>Readability first:</strong> Use def when logic deserves a name.</li></ul>\n<h4>Workshop example</h4><pre><code>def average(*scores):\n    return sum(scores) / len(scores)\nprint(average(80, 90, 100))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def f(x=2):\n    return x*3\nprint(f())</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">2</button><button data-o=\"1\">3</button><button data-o=\"2\">6</button><button data-o=\"3\">None</button></div><p class=\"w__why\">The default x is 2 and the returned result is 6.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def total(*args):</button><button data-bad>\n    print(sum(args))</button><button >\nresult = total(1,2,3)</button></div>\n    <p class=\"w__why\">Printing makes result None; return the sum when the caller needs it.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>*args</code></button><button data-pair=\"p1\"><code>return</code></button><button data-pair=\"p2\"><code>map</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">transform sequence</button><button data-pair=\"p1\">reusable output</button><button data-pair=\"p0\">tuple of positional extras</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which function design exposes reusable output?",
          "options": [
            "Only print",
            "Return value",
            "Global mutation",
            "No parameters"
          ],
          "answer": 1,
          "why": "Return values can be stored and composed."
        },
        {
          "q": "What type is *args?",
          "options": [
            "List",
            "Tuple",
            "Dictionary",
            "Set"
          ],
          "answer": 1,
          "why": "Positional extras are packed into a tuple."
        },
        {
          "q": "What is a good lambda use?",
          "options": [
            "Long menu system",
            "Simple sorted key",
            "Complex recursion",
            "Reusable class"
          ],
          "answer": 1,
          "why": "A small throwaway transformation is suitable."
        },
        {
          "q": "What reduces hidden state?",
          "options": [
            "More globals",
            "Explicit parameters and returns",
            "Aliasing",
            "No functions"
          ],
          "answer": 1,
          "why": "Explicit data flow is easier to reason about."
        }
      ],
      "tasks": [
        {
          "id": "u4t20p01",
          "kind": "code",
          "title": "Flexible average",
          "brief": "Define average(*scores) and print 90.0 for 80,90,100.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "90.0"
            },
            {
              "type": "sourceIncludes",
              "value": "*scores",
              "message": "Collect scores"
            },
            {
              "type": "sourceIncludes",
              "value": "return",
              "message": "Return the average"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 90.0"
          ]
        },
        {
          "id": "u4t20p02",
          "kind": "code",
          "title": "Keyword profile",
          "brief": "Use **kwargs to print name=Mira and role=student on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "name=Mira\nrole=student"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "**kwargs",
              "message": "Collect labelled data"
            },
            {
              "type": "sourceIncludes",
              "value": ".items()",
              "message": "Loop through it"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: name=Mira"
          ]
        },
        {
          "id": "u4t20p03",
          "kind": "code",
          "title": "Functional score boost",
          "brief": "Map +5 over [70,80,90] and print [75,85,95].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[75, 85, 95]"
            },
            {
              "type": "sourceIncludes",
              "value": "map(",
              "message": "Use map"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [75, 85, 95]"
          ]
        },
        {
          "id": "u4t20p04",
          "kind": "code",
          "title": "Passing a validator",
          "brief": "Define is_even and apply_test(test,value); print True for 8.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "test(value)",
              "message": "Call the passed test"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ]
        },
        {
          "id": "u4t20p05",
          "kind": "code",
          "title": "Workshop pipeline",
          "brief": "Filter passing scores >=70, sort descending, print [95,88,72].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[95, 88, 72]"
            },
            {
              "type": "sourceIncludes",
              "value": "filter(",
              "message": "Filter scores"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort result"
            },
            {
              "type": "sourceIncludes",
              "value": "reverse=True",
              "message": "Descending order"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [95, 88, 72]"
          ]
        }
      ]
    },
    {
      "id": "u4t21",
      "title": "Recursion - Base Cases, Recursive Cases and the Call Stack",
      "summary": "Understand self-calling functions and prevent infinite recursion.",
      "notebookLM": "",
      "notes": "\n<h4>Recursion Part 1 - The Core Concept</h4>\n<p>The source defines recursion as a function calling itself on a smaller version of the same problem. Every recursive solution needs a base case and recursive case, and paused calls live on the call stack.</p>\n<h4>The real-world analogy: Russian Nesting Doll</h4>\n<p>Open one doll, then repeat the same action on a smaller doll until the candy-containing smallest doll supplies the stopping condition.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 260\" role=\"img\" aria-label=\"Recursive call stack\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Recursive call stack</text>\n        <rect class=\"box\" x=\"235\" y=\"205\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"226\" text-anchor=\"middle\" class=\"mono\">countdown(3)</text><rect class=\"box\" x=\"235\" y=\"167\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"188\" text-anchor=\"middle\" class=\"mono\">countdown(2)</text><rect class=\"box\" x=\"235\" y=\"129\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"mono\">countdown(1)</text><rect class=\"box\" x=\"235\" y=\"91\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"112\" text-anchor=\"middle\" class=\"mono\">countdown(0)</text>\n        <path class=\"accent\" d=\"M500 220 C570 180 570 80 500 45\" fill=\"none\"><animate attributeName=\"stroke-dashoffset\" values=\"0;45\" dur=\"2s\" repeatCount=\"indefinite\"/></path>\n        <text x=\"580\" y=\"135\" text-anchor=\"middle\" class=\"lbl\">calls / resumes</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Base case:</strong> Stops further self-calls.</li><li><strong>Recursive case:</strong> Performs work and calls the function with smaller input.</li><li><strong>Progress:</strong> Each call must move toward the base case.</li><li><strong>Call stack:</strong> Paused calls wait in last-in, first-out order.</li><li><strong>Missing base case:</strong> Eventually raises RecursionError.</li></ul>\n<h4>Countdown</h4><pre><code>def countdown(n):\n    if n &lt;= 0:\n        print(\"Blastoff!\")\n    else:\n        print(n)\n        countdown(n-1)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def echo(n):\n    if n&lt;=0: print(\"Stop\")\n    else:\n        print(\"Echo\")\n        echo(n-1)\necho(2)</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">Echo Echo Stop</button><button data-o=\"1\">Stop Echo Echo</button><button data-o=\"2\">Echo Stop</button><button data-o=\"3\">Infinite</button></div><p class=\"w__why\">Two recursive cases print Echo, then the base case prints Stop.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def count_up(n):</button><button >\n    print(n)</button><button data-bad>\n    count_up(n+1)</button></div>\n    <p class=\"w__why\">The function never reaches a base case.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>base case</code></button><button data-pair=\"p1\"><code>recursive case</code></button><button data-pair=\"p2\"><code>call stack</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">paused calls</button><button data-pair=\"p1\">self-call</button><button data-pair=\"p0\">stop condition</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is recursion?",
          "options": [
            "A while loop",
            "A function calling itself",
            "An imported function",
            "An unstoppable function"
          ],
          "answer": 1,
          "why": "Self-calls define recursion."
        },
        {
          "q": "What is essential to stop recursion?",
          "options": [
            "Print",
            "Base case",
            "Break only",
            "Global"
          ],
          "answer": 1,
          "why": "The base case anchors the process."
        },
        {
          "q": "Where do paused calls wait?",
          "options": [
            "Set",
            "Call stack",
            "Dictionary",
            "File"
          ],
          "answer": 1,
          "why": "Each call frame is stacked."
        },
        {
          "q": "What must recursive input do?",
          "options": [
            "Grow forever",
            "Move toward the base case",
            "Stay identical",
            "Become a string"
          ],
          "answer": 1,
          "why": "Progress guarantees termination."
        }
      ],
      "tasks": [
        {
          "id": "u4t21p01",
          "kind": "code",
          "title": "Recursive echo",
          "brief": "Print Echo three times then Silence....",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Echo!\nEcho!\nEcho!\nSilence..."
            },
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print at least 4 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "echo(times - 1)",
              "message": "Move toward the base case"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Echo!"
          ]
        },
        {
          "id": "u4t21p02",
          "kind": "code",
          "title": "Countdown",
          "brief": "Print 3,2,1,Blastoff! recursively.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n2\n1\nBlastoff!"
            },
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print at least 4 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "countdown(n - 1)",
              "message": "Recursive countdown"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ]
        },
        {
          "id": "u4t21p03",
          "kind": "code",
          "title": "Open the doll",
          "brief": "Print Opening doll size 3, size 2, then Found the candy!.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Opening doll size 3\nOpening doll size 2\nFound the candy!"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "open_doll(size - 1)",
              "message": "Use a smaller doll"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Opening doll size 3"
          ]
        },
        {
          "id": "u4t21p04",
          "kind": "code",
          "title": "Fix broken recursion",
          "brief": "Write count_down with a valid base case and print Done after 2,1.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2\n1\nDone"
            },
            {
              "type": "sourceIncludes",
              "value": "if n <= 0",
              "message": "Add a base case"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ]
        },
        {
          "id": "u4t21p05",
          "kind": "code",
          "title": "Mini recursive sum",
          "brief": "Return 15 from sum_up_to(5).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "return n + sum_up_to(n - 1)",
              "message": "Use the recursive relation"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 15"
          ]
        }
      ]
    },
    {
      "id": "u4t22",
      "title": "Recursion - Factorial, Fibonacci, Power and String Reversal",
      "summary": "Implement classic recursive relations and trace their return flow.",
      "notebookLM": "",
      "notes": "\n<h4>Recursion Part 2 - Classic Implementations</h4>\n<p>The source applies recursion to factorial and Fibonacci, then practises summation, powers and recursive string reversal.</p>\n<h4>The real-world analogy: Mathematical Self-Similarity</h4>\n<p>Factorial n contains factorial n-1. Fibonacci n depends on two smaller Fibonacci positions. These definitions naturally call themselves.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 260\" role=\"img\" aria-label=\"Factorial 4 call stack\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Factorial 4 call stack</text>\n        <rect class=\"box\" x=\"235\" y=\"205\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"226\" text-anchor=\"middle\" class=\"mono\">4 × fact(3)</text><rect class=\"box\" x=\"235\" y=\"167\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"188\" text-anchor=\"middle\" class=\"mono\">3 × fact(2)</text><rect class=\"box\" x=\"235\" y=\"129\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"150\" text-anchor=\"middle\" class=\"mono\">2 × fact(1)</text><rect class=\"box\" x=\"235\" y=\"91\" width=\"230\" height=\"32\" rx=\"8\"/><text x=\"350\" y=\"112\" text-anchor=\"middle\" class=\"mono\">1</text>\n        <path class=\"accent\" d=\"M500 220 C570 180 570 80 500 45\" fill=\"none\"><animate attributeName=\"stroke-dashoffset\" values=\"0;45\" dur=\"2s\" repeatCount=\"indefinite\"/></path>\n        <text x=\"580\" y=\"135\" text-anchor=\"middle\" class=\"lbl\">calls / resumes</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Factorial base:</strong> 0! and 1! return 1.</li><li><strong>Factorial relation:</strong> <code>n * factorial(n-1)</code>.</li><li><strong>Fibonacci bases:</strong> Position 0 returns 0; position 1 returns 1.</li><li><strong>Fibonacci relation:</strong> <code>fib(n-1) + fib(n-2)</code>.</li><li><strong>Branching cost:</strong> Naive Fibonacci repeats many calls.</li></ul>\n<h4>Factorial</h4><pre><code>def factorial(n):\n    if n in (0,1): return 1\n    return n * factorial(n-1)</code></pre><h4>Fibonacci</h4><pre><code>def fibonacci(n):\n    if n &lt;= 0: return 0\n    if n == 1: return 1\n    return fibonacci(n-1)+fibonacci(n-2)</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def power(b,e):\n    if e==0:return 1\n    return b*power(b,e-1)\nprint(power(2,3))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">6</button><button data-o=\"1\">8</button><button data-o=\"2\">9</button><button data-o=\"3\">1</button></div><p class=\"w__why\">The recursive multiplication computes 2×2×2.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def factorial(n):</button><button data-bad>\n    if n == 0: return 0</button></div>\n    <p class=\"w__why\">Zero factorial is 1, not 0.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>factorial</code></button><button data-pair=\"p1\"><code>fibonacci</code></button><button data-pair=\"p2\"><code>power</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">base × smaller exponent</button><button data-pair=\"p1\">two previous positions</button><button data-pair=\"p0\">n × smaller factorial</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What should factorial(1) return?",
          "options": [
            "0",
            "1",
            "2",
            "None"
          ],
          "answer": 1,
          "why": "One factorial is one."
        },
        {
          "q": "Why does Fibonacci need two base cases?",
          "options": [
            "Python requires elif",
            "The recurrence uses two previous values",
            "For speed only",
            "It does not"
          ],
          "answer": 1,
          "why": "Positions 0 and 1 seed the sequence."
        },
        {
          "q": "What happens at n * factorial(n-1)?",
          "options": [
            "n returns immediately",
            "The call pauses for the smaller result",
            "A loop starts",
            "It prints n"
          ],
          "answer": 1,
          "why": "The current frame waits."
        },
        {
          "q": "Why is naive recursive Fibonacci slow?",
          "options": [
            "Strings",
            "Repeated subproblems",
            "No base case",
            "Uses sets"
          ],
          "answer": 1,
          "why": "The same positions are recalculated."
        }
      ],
      "tasks": [
        {
          "id": "u4t22p01",
          "kind": "code",
          "title": "Recursive factorial",
          "brief": "Print 120 for factorial(5).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "120"
            },
            {
              "type": "sourceIncludes",
              "value": "return n * factorial(n - 1)",
              "message": "Use the factorial relation"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 120"
          ]
        },
        {
          "id": "u4t22p02",
          "kind": "code",
          "title": "Recursive Fibonacci",
          "brief": "Print 8 for fibonacci(6).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "8"
            },
            {
              "type": "sourceIncludes",
              "value": "fibonacci(n - 1) + fibonacci(n - 2)",
              "message": "Use the Fibonacci relation"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 8"
          ]
        },
        {
          "id": "u4t22p03",
          "kind": "code",
          "title": "Recursive power",
          "brief": "Print 8 for power(2,3).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "8"
            },
            {
              "type": "sourceIncludes",
              "value": "return base * power(base, exp - 1)",
              "message": "Reduce the exponent"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 8"
          ]
        },
        {
          "id": "u4t22p04",
          "kind": "code",
          "title": "Recursive reverse",
          "brief": "Print tac from reverse_str('cat').",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "tac"
            },
            {
              "type": "sourceIncludes",
              "value": "text[-1] + reverse_str(text[:-1])",
              "message": "Move the last character first"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: tac"
          ]
        },
        {
          "id": "u4t22p05",
          "kind": "code",
          "title": "Factorial input guard",
          "brief": "Return Invalid for -2, otherwise factorial; test -2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Invalid"
            },
            {
              "type": "sourceIncludes",
              "value": "if n < 0",
              "message": "Validate negative input"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Invalid"
          ]
        }
      ]
    },
    {
      "id": "u4t23",
      "title": "Recursion - Limitations and Iterative Alternatives",
      "summary": "Choose recursion deliberately and translate recursive logic into loops.",
      "notebookLM": "",
      "notes": "\n<h4>Recursion Part 3 - Advantages, Limitations and Iteration</h4>\n<p>The source compares recursion with iteration, covering elegance, readability, call-stack memory, RecursionError, speed and the recommendation to use loops for routine repetition.</p>\n<h4>The real-world analogy: Digging a Hole</h4>\n<p>Iteration reuses one worker. Recursion hires a new paused worker for every scoop and later unwinds the whole chain.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Iteration reuses state\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Iteration reuses state</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">start</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">loop</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">update</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">condition</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">finish</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Advantages:</strong> Elegant for trees, nested structures and recursive mathematical definitions.</li><li><strong>Memory cost:</strong> Every paused call stores a frame.</li><li><strong>Stack depth:</strong> Deep or endless recursion raises RecursionError.</li><li><strong>Iteration:</strong> Loops usually use less memory and run faster.</li><li><strong>Decision rule:</strong> Use the clearest safe approach for the problem.</li></ul>\n<h4>Iterative factorial</h4><pre><code>def iter_fact(n):\n    total=1\n    for x in range(1,n+1):\n        total*=x\n    return total</code></pre><h4>Iterative countdown</h4><pre><code>while n &gt; 0:\n    print(n)\n    n -= 1</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>total=0\nfor x in range(1,6):\n    total+=x\nprint(total)</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">10</button><button data-o=\"1\">15</button><button data-o=\"2\">20</button><button data-o=\"3\">RecursionError</button></div><p class=\"w__why\">Iteration adds one through five.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def crash():</button><button data-bad>\n    return crash()</button></div>\n    <p class=\"w__why\">There is no base case, so the stack grows until RecursionError.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>iteration</code></button><button data-pair=\"p1\"><code>recursion</code></button><button data-pair=\"p2\"><code>RecursionError</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">stack depth exceeded</button><button data-pair=\"p1\">self-calls</button><button data-pair=\"p0\">loop repetition</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is a major recursion disadvantage?",
          "options": [
            "Cannot do maths",
            "Call-stack memory use",
            "Longer syntax always",
            "Python 2 only"
          ],
          "answer": 1,
          "why": "Each call frame consumes memory."
        },
        {
          "q": "What commonly causes RecursionError?",
          "options": [
            "A correct for loop",
            "Too many self-calls",
            "Large integer only",
            "Using float"
          ],
          "answer": 1,
          "why": "The maximum call depth is exceeded."
        },
        {
          "q": "What does iteration mean?",
          "options": [
            "Functions only",
            "Loops",
            "Deletion",
            "Importing"
          ],
          "answer": 1,
          "why": "Iteration repeats with for or while."
        },
        {
          "q": "Which is better for counting to one million?",
          "options": [
            "Deep recursion",
            "A loop",
            "Nested lambdas",
            "Frozenset"
          ],
          "answer": 1,
          "why": "A loop avoids a million call frames."
        }
      ],
      "tasks": [
        {
          "id": "u4t23p01",
          "kind": "code",
          "title": "Iterative factorial",
          "brief": "Use a loop to print 120 for iter_fact(5).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "120"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Use iteration"
            },
            {
              "type": "sourceIncludes",
              "value": "total *= ",
              "message": "Accumulate the product"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 120"
          ]
        },
        {
          "id": "u4t23p02",
          "kind": "code",
          "title": "Iterative summation",
          "brief": "Print 15 for iter_sum(5).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Use a loop"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 15"
          ]
        },
        {
          "id": "u4t23p03",
          "kind": "code",
          "title": "Translate say_hi",
          "brief": "Use while to print Hi three times.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hi\nHi\nHi"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "while ",
              "message": "Translate recursion to iteration"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hi"
          ]
        },
        {
          "id": "u4t23p04",
          "kind": "code",
          "title": "Safe iterative countdown",
          "brief": "Print 3,2,1,Blastoff! using while.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n2\n1\nBlastoff!"
            },
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print at least 4 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "while n > 0",
              "message": "Use a loop"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ]
        },
        {
          "id": "u4t23p05",
          "kind": "code",
          "title": "Compare results",
          "brief": "Define recursive and iterative sum functions and print True for both producing 15.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "recursive_sum",
              "message": "Create recursive version"
            },
            {
              "type": "sourceIncludes",
              "value": "iterative_sum",
              "message": "Create iterative version"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ]
        }
      ]
    },
    {
      "id": "u4t24",
      "title": "Generators - yield, next() and Lazy State",
      "summary": "Produce values one at a time while preserving function state.",
      "notebookLM": "",
      "notes": "\n<h4>Generators and Comprehensions Part 1 - Introduction and yield</h4>\n<p>The source compares generators with lists, defines generator functions, explains yield as a bookmark, and contrasts return with yield.</p>\n<h4>The real-world analogy: Water Faucet vs Bathtub</h4>\n<p>A list fills the entire bathtub in memory. A generator releases one requested drop at a time and remembers where it paused.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Generator lifecycle\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Generator lifecycle</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">create</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">next()</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">yield</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">pause</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">resume</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Generator function:</strong> Any function containing yield.</li><li><strong>yield:</strong> Produces a value and pauses with local state preserved.</li><li><strong>next():</strong> Requests the next yielded value.</li><li><strong>for loop:</strong> Automatically requests values until exhaustion.</li><li><strong>return vs yield:</strong> Return terminates; yield pauses.</li></ul>\n<h4>Simple generator</h4><pre><code>def simple_generator():\n    yield 1\n    yield 2\n    yield 3\ng = simple_generator()\nprint(next(g))</code></pre><h4>Infinite evens</h4><pre><code>def generate_evens():\n    n=0\n    while True:\n        yield n\n        n += 2</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>def g():\n    yield \"A\"\n    yield \"B\"\nx=g()\nprint(next(x))\nprint(next(x))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">A B</button><button data-o=\"1\">B A</button><button data-o=\"2\">generator object</button><button data-o=\"3\">StopIteration first</button></div><p class=\"w__why\">Each next resumes at the following yield.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def numbers():</button><button data-bad>\n    return 1</button><button >\n    return 2</button></div>\n    <p class=\"w__why\">return ends the function. Use yield to produce a sequence over time.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>yield</code></button><button data-pair=\"p1\"><code>next</code></button><button data-pair=\"p2\"><code>return</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">produce and terminate</button><button data-pair=\"p1\">request next value</button><button data-pair=\"p0\">produce and pause</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which keyword creates generator behaviour?",
          "options": [
            "return",
            "generate",
            "yield",
            "pause"
          ],
          "answer": 2,
          "why": "yield turns the function into a generator."
        },
        {
          "q": "What happens after yield?",
          "options": [
            "Function dies",
            "Function pauses with state",
            "Program crashes",
            "Next line runs immediately"
          ],
          "answer": 1,
          "why": "State is preserved until resumed."
        },
        {
          "q": "What requests one value?",
          "options": [
            "len",
            "next",
            "yield",
            "map"
          ],
          "answer": 1,
          "why": "next advances the iterator."
        },
        {
          "q": "Why are generators memory efficient?",
          "options": [
            "They sort data",
            "They create values lazily",
            "They delete variables",
            "They use sets"
          ],
          "answer": 1,
          "why": "Only current state/value is held."
        }
      ],
      "tasks": [
        {
          "id": "u4t24p01",
          "kind": "code",
          "title": "Three-step countdown",
          "brief": "Yield 3,2,1 and print them with next().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n2\n1"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "yield 3",
              "message": "Yield first value"
            },
            {
              "type": "sourceIncludes",
              "value": "next(",
              "message": "Request values"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ]
        },
        {
          "id": "u4t24p02",
          "kind": "code",
          "title": "Generator trace",
          "brief": "Yield A then B, printing Middle between next calls.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A\nMiddle\nB"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "yield \"A\"",
              "message": "First yield"
            },
            {
              "type": "sourceIncludes",
              "value": "yield \"B\"",
              "message": "Second yield"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: A"
          ]
        },
        {
          "id": "u4t24p03",
          "kind": "code",
          "title": "First four evens",
          "brief": "Use an infinite generator and print 0,2,4,6.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0\n2\n4\n6"
            },
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print at least 4 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "while True",
              "message": "Create an infinite sequence"
            },
            {
              "type": "sourceIncludes",
              "value": "yield num",
              "message": "Yield one value"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 0"
          ]
        },
        {
          "id": "u4t24p04",
          "kind": "code",
          "title": "Generator for loop",
          "brief": "Yield 1..3 from a loop and print them with for.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n2\n3"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "yield i",
              "message": "Yield each item"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 1"
          ]
        },
        {
          "id": "u4t24p05",
          "kind": "code",
          "title": "Mini ID stream",
          "brief": "Generate IDs ID-001, ID-002, ID-003 lazily and print them.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ID-001\nID-002\nID-003"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "yield",
              "message": "Produce IDs lazily"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ID-001"
          ]
        }
      ]
    },
    {
      "id": "u4t25",
      "title": "Comprehensions and Generator Expressions",
      "summary": "Build lists, dictionaries, sets and lazy streams with concise expressions.",
      "notebookLM": "",
      "notes": "\n<h4>Generators and Comprehensions Part 2 - Comprehensions and Memory Benefits</h4>\n<p>The source reviews list comprehensions, introduces generator expressions, dictionary and set comprehensions, and explains why generators are essential for massive datasets.</p>\n<h4>The real-world analogy: Recipe vs Cake</h4>\n<p>A list comprehension bakes the whole cake immediately. A generator expression stores the recipe and makes each slice only when requested.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 303\" role=\"img\" aria-label=\"Comprehension delimiters\">\n        <text x=\"350\" y=\"24\" text-anchor=\"middle\" class=\"lbl\">Comprehension delimiters</text>\n        <rect class=\"box\" x=\"70\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"61\" text-anchor=\"middle\" class=\"mono\">[...]</text><path class=\"arrow\" d=\"M270 55 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"31\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"61\" text-anchor=\"middle\" class=\"mono\">list</text><rect class=\"box\" x=\"70\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"123\" text-anchor=\"middle\" class=\"mono\">(...)</text><path class=\"arrow\" d=\"M270 117 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"93\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"123\" text-anchor=\"middle\" class=\"mono\">generator</text><rect class=\"box\" x=\"70\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"185\" text-anchor=\"middle\" class=\"mono\">{k:v ...}</text><path class=\"arrow\" d=\"M270 179 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"155\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"185\" text-anchor=\"middle\" class=\"mono\">dictionary</text><rect class=\"box\" x=\"70\" y=\"217\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"165\" y=\"247\" text-anchor=\"middle\" class=\"mono\">{x ...}</text><path class=\"arrow\" d=\"M270 241 H420\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"440\" y=\"217\" width=\"190\" height=\"48\" rx=\"12\"/><text x=\"535\" y=\"247\" text-anchor=\"middle\" class=\"mono\">set</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>List comprehension:</strong> Builds a complete list eagerly.</li><li><strong>Generator expression:</strong> Uses parentheses and evaluates lazily.</li><li><strong>Dictionary comprehension:</strong> Uses braces with a colon between key and value.</li><li><strong>Set comprehension:</strong> Uses braces without a colon and removes duplicates.</li><li><strong>Memory rule:</strong> Prefer generators for huge or infinite data streams.</li></ul>\n<h4>Squared evens</h4><pre><code>squared = [x**2 for x in range(1,6) if x%2==0]</code></pre><h4>Generator expression</h4><pre><code>gen = (x*10 for x in range(1000))</code></pre><h4>Dictionary and set</h4><pre><code>cubes = {x:x**3 for x in range(1,4)}\nletters = {w[0] for w in [\"apple\",\"ant\",\"bat\"]}</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"2\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>data = {x: x*2 for x in [1,2]}\nprint(data)</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">{2,4}</button><button data-o=\"1\">[2,4]</button><button data-o=\"2\">{1:2, 2:4}</button><button data-o=\"3\">generator</button></div><p class=\"w__why\">The colon makes it a dictionary comprehension.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >gen = </button><button data-bad>[x*x for x in range(1000000)]</button></div>\n    <p class=\"w__why\">Square brackets build the entire list. Parentheses create a lazy generator expression.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>[x for x in data]</code></button><button data-pair=\"p1\"><code>(x for x in data)</code></button><button data-pair=\"p2\"><code>{x:x*x for x in data}</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">dictionary comprehension</button><button data-pair=\"p1\">generator expression</button><button data-pair=\"p0\">list comprehension</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "Which delimiters create a generator expression?",
          "options": [
            "[]",
            "()",
            "{}",
            "<>"
          ],
          "answer": 1,
          "why": "Parentheses make a lazy generator expression."
        },
        {
          "q": "What does {x: x*2 for x in data} build?",
          "options": [
            "Set",
            "List",
            "Dictionary",
            "Tuple"
          ],
          "answer": 2,
          "why": "The colon identifies key-value pairs."
        },
        {
          "q": "What is the main generator benefit?",
          "options": [
            "Automatic sorting",
            "Low memory through lazy evaluation",
            "Duplicate removal",
            "Immutability"
          ],
          "answer": 1,
          "why": "Values are produced on demand."
        },
        {
          "q": "What does a set comprehension do with duplicate results?",
          "options": [
            "Keeps all",
            "Removes duplicates",
            "Raises error",
            "Turns them into keys"
          ],
          "answer": 1,
          "why": "Set uniqueness still applies."
        }
      ],
      "tasks": [
        {
          "id": "u4t25p01",
          "kind": "code",
          "title": "Lazy squares",
          "brief": "Create gen=(x*x for x in range(1,100)) and print next twice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "1\n4"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "(x * x for x in range(1, 100))",
              "message": "Use a generator expression"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 1"
          ]
        },
        {
          "id": "u4t25p02",
          "kind": "code",
          "title": "Name lengths",
          "brief": "Create {'Alice':5,'Bob':3} with a dictionary comprehension.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{'Alice': 5, 'Bob': 3}"
            },
            {
              "type": "sourceRegex",
              "pattern": "\\{\\s*name\\s*:\\s*len\\(name\\)\\s+for\\s+name\\s+in\\s+names\\s*\\}",
              "message": "Use a dictionary comprehension"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: {'Alice': 5, 'Bob': 3}"
          ]
        },
        {
          "id": "u4t25p03",
          "kind": "code",
          "title": "Unique lengths",
          "brief": "Use a set comprehension and print [3,4].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[3, 4]"
            },
            {
              "type": "sourceIncludes",
              "value": "{len(x) for x in words}",
              "message": "Use a set comprehension"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort output"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [3, 4]"
          ]
        },
        {
          "id": "u4t25p04",
          "kind": "code",
          "title": "Squared evens",
          "brief": "Use a list comprehension to print [4,16].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[4, 16]"
            },
            {
              "type": "sourceIncludes",
              "value": "[x ** 2 for x in numbers if x % 2 == 0]",
              "message": "Use a conditional list comprehension"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [4, 16]"
          ]
        },
        {
          "id": "u4t25p05",
          "kind": "code",
          "title": "Lazy filtered stream",
          "brief": "Create a generator of even squares from 1..10 and print [4,16,36,64,100].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[4, 16, 36, 64, 100]"
            },
            {
              "type": "sourceIncludes",
              "value": "(x ** 2 for x in range(1, 11) if x % 2 == 0)",
              "message": "Use a conditional generator expression"
            },
            {
              "type": "sourceIncludes",
              "value": "list(",
              "message": "Materialise for display"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [4, 16, 36, 64, 100]"
          ]
        }
      ]
    },
    {
      "id": "u4t26",
      "title": "Revision Checkpoint 4 - Recursive and Lazy Systems",
      "summary": "Choose between recursion, iteration, generators and comprehensions.",
      "notebookLM": "",
      "notes": "\n<h4>Revision Checkpoint - Recursion, Generators and Comprehensions</h4>\n<p>This checkpoint combines termination reasoning, call-stack cost, iterative alternatives, yield-based streams and eager versus lazy comprehensions.</p>\n<h4>The real-world analogy: Route Planner</h4>\n<p>Some routes branch naturally and suit recursion. Long straight roads suit iteration. Endless sensor readings need a generator that releases one observation at a time.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Choose the execution model\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Choose the execution model</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">problem</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">branch?</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">huge?</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">loop/recursion</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">generator</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Use recursion:</strong> For naturally recursive branching structures with safe depth.</li><li><strong>Use iteration:</strong> For routine long repetition.</li><li><strong>Use generators:</strong> For huge or infinite streams.</li><li><strong>Use comprehensions:</strong> For concise finite transformations.</li><li><strong>Always validate termination:</strong> Base cases and loop conditions must be reachable.</li></ul>\n<h4>Choice example</h4><pre><code>def first_n_evens(n):\n    return [x for x in range(0, n*2, 2)]</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>g=(x for x in range(3))\nprint(next(g), next(g))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">0 1</button><button data-o=\"1\">1 2</button><button data-o=\"2\">0 2</button><button data-o=\"3\">generator</button></div><p class=\"w__why\">The generator yields range values in order.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def recurse(n):</button><button data-bad>\n    return recurse(n+1)</button></div>\n    <p class=\"w__why\">The input moves away from any plausible stopping point.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>loop</code></button><button data-pair=\"p1\"><code>recursion</code></button><button data-pair=\"p2\"><code>generator</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">large lazy stream</button><button data-pair=\"p1\">branching self-similar problem</button><button data-pair=\"p0\">long routine repetition</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What prevents infinite recursion?",
          "options": [
            "yield",
            "Base case",
            "sorted",
            "kwargs"
          ],
          "answer": 1,
          "why": "The base case stops self-calls."
        },
        {
          "q": "What is best for an infinite sequence?",
          "options": [
            "List",
            "Generator",
            "Deep recursion",
            "Dictionary only"
          ],
          "answer": 1,
          "why": "Generators produce values on demand."
        },
        {
          "q": "What is eager?",
          "options": [
            "Generator expression",
            "List comprehension",
            "yield",
            "next"
          ],
          "answer": 1,
          "why": "A list comprehension builds all results immediately."
        },
        {
          "q": "What is usually best for one million counter steps?",
          "options": [
            "Loop",
            "Recursion",
            "Lambda nesting",
            "Frozenset"
          ],
          "answer": 0,
          "why": "Iteration avoids stack growth."
        }
      ],
      "tasks": [
        {
          "id": "u4t26p01",
          "kind": "code",
          "title": "Recursive vs iterative parity",
          "brief": "Implement both sum methods for 5 and print True.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "recursive_sum",
              "message": "Recursive version"
            },
            {
              "type": "sourceIncludes",
              "value": "iterative_sum",
              "message": "Iterative version"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ]
        },
        {
          "id": "u4t26p02",
          "kind": "code",
          "title": "Lazy first values",
          "brief": "Generate squares lazily and print 0,1,4.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "0\n1\n4"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "(x ** 2 for x in range(10))",
              "message": "Use a generator expression"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 0"
          ]
        },
        {
          "id": "u4t26p03",
          "kind": "code",
          "title": "Safe recursive depth",
          "brief": "Recursively count down from 3 and print Done.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3\n2\n1\nDone"
            },
            {
              "type": "sourceIncludes",
              "value": "if n <= 0",
              "message": "Add the stopping condition"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ]
        },
        {
          "id": "u4t26p04",
          "kind": "code",
          "title": "Iterative replacement",
          "brief": "Replace recursive repeated Hi with a for loop that prints four lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hi\nHi\nHi\nHi"
            },
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print at least 4 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "for ",
              "message": "Use iteration"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hi"
          ]
        },
        {
          "id": "u4t26p05",
          "kind": "code",
          "title": "Lazy data pipeline",
          "brief": "Generate 1..10 lazily, keep evens with a generator expression, print [2,4,6,8,10].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[2, 4, 6, 8, 10]"
            },
            {
              "type": "sourceIncludes",
              "value": "(x for x in range(1, 11) if x % 2 == 0)",
              "message": "Use a lazy filtered expression"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [2, 4, 6, 8, 10]"
          ]
        }
      ]
    },
    {
      "id": "u4t27",
      "title": "Practical Programs - Word Frequency, Student Records and Contacts",
      "summary": "Combine dictionaries and functions into small applications.",
      "notebookLM": "",
      "notes": "\n<h4>Unit 4 Practical Programs - Applications 1</h4>\n<p>The source provides step-by-step programs for a word-frequency counter, nested student-record system and interactive contact book.</p>\n<h4>The real-world analogy: Mini Database</h4>\n<p>Each application uses meaningful keys for fast lookup, functions for reusable actions and validation before changing records.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Application architecture\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Application architecture</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">input</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">clean</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">validate</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">update</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">report</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Word frequency:</strong> Lowercase, split, count each word in a dictionary.</li><li><strong>Student records:</strong> Use a dictionary of nested profiles with a grades list.</li><li><strong>Contact book:</strong> Map names to phone numbers and search with get().</li><li><strong>Validation:</strong> Check existence before updates and protect division by zero.</li></ul>\n<h4>Word frequency</h4><pre><code>def count_words(text):\n    counts={}\n    for word in text.lower().split():\n        counts[word]=counts.get(word,0)+1\n    return counts</code></pre><h4>Contact lookup</h4><pre><code>contacts={\"Mom\":\"555-1234\"}\nprint(contacts.get(\"Bob\",\"Contact not found.\"))</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"1\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>text=\"apple banana apple\"\ncounts={}\nfor w in text.split(): counts[w]=counts.get(w,0)+1\nprint(counts[\"apple\"])</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">1</button><button data-o=\"1\">2</button><button data-o=\"2\">3</button><button data-o=\"3\">KeyError</button></div><p class=\"w__why\">apple appears twice.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >avg = </button><button data-bad>sum(grades) / len(grades)</button></div>\n    <p class=\"w__why\">Check that grades is non-empty before dividing.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>split()</code></button><button data-pair=\"p1\"><code>nested dictionary</code></button><button data-pair=\"p2\"><code>.get()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">safe contact lookup</button><button data-pair=\"p1\">student profiles</button><button data-pair=\"p0\">words list</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What is a good word-frequency key?",
          "options": [
            "Index",
            "The word",
            "The sentence length",
            "A list"
          ],
          "answer": 1,
          "why": "Each unique word identifies its count."
        },
        {
          "q": "Why lowercase before counting?",
          "options": [
            "For sorting only",
            "To treat Apple and apple together",
            "To remove spaces",
            "To create a set"
          ],
          "answer": 1,
          "why": "Normalisation prevents case-split counts."
        },
        {
          "q": "What structure stores grades inside a student profile?",
          "options": [
            "List",
            "Frozenset only",
            "Generator only",
            "String"
          ],
          "answer": 0,
          "why": "A list can grow as grades are added."
        },
        {
          "q": "What prevents contact lookup KeyError?",
          "options": [
            "index",
            "get",
            "find",
            "remove"
          ],
          "answer": 1,
          "why": "get provides a fallback."
        }
      ],
      "tasks": [
        {
          "id": "u4t27p01",
          "kind": "code",
          "title": "Word-frequency counter",
          "brief": "Count 'the cat in the hat saw a cat' and print 2 for cat.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": ".lower().split()",
              "message": "Clean and split"
            },
            {
              "type": "sourceIncludes",
              "value": ".get(word, 0) + 1",
              "message": "Increment safely"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ]
        },
        {
          "id": "u4t27p02",
          "kind": "code",
          "title": "Whole frequency report",
          "brief": "Print {'apple': 2, 'banana': 1} for apple banana apple.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{'apple': 2, 'banana': 1}"
            },
            {
              "type": "sourceIncludes",
              "value": "counts",
              "message": "Store tallies"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: {'apple': 2, 'banana': 1}"
          ]
        },
        {
          "id": "u4t27p03",
          "kind": "code",
          "title": "Student average",
          "brief": "Create Alice age 20 with grades 85,92 and print 88.5.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "88.5"
            },
            {
              "type": "sourceIncludes",
              "value": "students_db[\"Alice\"]",
              "message": "Create nested profile"
            },
            {
              "type": "sourceIncludes",
              "value": "sum(",
              "message": "Calculate average"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 88.5"
          ]
        },
        {
          "id": "u4t27p04",
          "kind": "code",
          "title": "Safe contact lookup",
          "brief": "Print Contact not found. for Bob.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Contact not found."
            },
            {
              "type": "sourceIncludes",
              "value": ".get(",
              "message": "Use a fallback"
            }
          ],
          "level": "Level 3 - Fix or Apply",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Contact not found."
          ]
        },
        {
          "id": "u4t27p05",
          "kind": "code",
          "title": "Mini student report",
          "brief": "Print Name: Alice, Age: 20, Grades: [85, 92], Average: 88.5 on four lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Name: Alice\nAge: 20\nGrades: [85, 92]\nAverage: 88.5"
            },
            {
              "type": "stdoutMinLines",
              "value": 4,
              "message": "Print at least 4 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "print_report",
              "message": "Create a report function"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Name: Alice"
          ]
        },
        {
          "id": "u4t27p06",
          "kind": "code",
          "title": "Shopping-cart total",
          "brief": "Use the supplied price dictionary and cart list to print 6.0.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "6.0"
            },
            {
              "type": "sourceIncludes",
              "value": "for item in cart",
              "message": "Loop through the cart"
            },
            {
              "type": "sourceIncludes",
              "value": "prices[item]",
              "message": "Look up each price"
            },
            {
              "type": "sourceIncludes",
              "value": "total_cost",
              "message": "Accumulate the total"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 6.0"
          ]
        }
      ]
    },
    {
      "id": "u4t28",
      "title": "Practical Programs - Inventory, Calculator, Recursion and Streams",
      "summary": "Integrate dictionaries, sets, functions, recursion and generators in practical tools.",
      "notebookLM": "",
      "notes": "\n<h4>Unit 4 Practical Programs - Applications 2</h4>\n<p>The source includes inventory management, duplicate removal, a routed calculator, recursive factorial and Fibonacci, an even-number generator and sparse-matrix storage.</p>\n<h4>The real-world analogy: Application Toolbelt</h4>\n<p>Different problems need different tools: dictionaries for stock, sets for deduplication, helper functions for calculations, recursion for self-similar maths and generators for endless streams.</p>\n<svg class=\"fig\" viewBox=\"0 0 700 190\" role=\"img\" aria-label=\"Select the right tool\">\n        <text x=\"350\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Select the right tool</text>\n        <rect class=\"box\" x=\"25\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" class=\"mono\">dictionary</text><path class=\"arrow\" d=\"M140 108 H150\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"155\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"210\" y=\"113\" text-anchor=\"middle\" class=\"mono\">set</text><path class=\"arrow\" d=\"M270 108 H290\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"295\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"350\" y=\"113\" text-anchor=\"middle\" class=\"mono\">function</text><path class=\"arrow\" d=\"M410 108 H430\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"435\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"490\" y=\"113\" text-anchor=\"middle\" class=\"mono\">recursion</text><path class=\"arrow\" d=\"M550 108 H560\"><animate attributeName=\"stroke-dashoffset\" values=\"0;26\" dur=\"1.5s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"565\" y=\"80\" width=\"110\" height=\"56\" rx=\"14\"/><text x=\"620\" y=\"113\" text-anchor=\"middle\" class=\"mono\">generator</text>\n        </svg>\n<h4>Core ideas</h4>\n<ul><li><strong>Inventory:</strong> Track item quantities and delete out-of-stock keys.</li><li><strong>Duplicate remover:</strong> Convert list to set, optionally back to list.</li><li><strong>Calculator router:</strong> Delegate operators to small helper functions.</li><li><strong>Recursive maths:</strong> Use explicit base cases.</li><li><strong>Even stream:</strong> Yield one number, then preserve the next state.</li><li><strong>Sparse matrix:</strong> Store only non-zero coordinates.</li></ul>\n<h4>Calculator router</h4><pre><code>def add(a,b): return a+b\ndef calculate(a,b,op):\n    if op=='+': return add(a,b)\n    return 'Invalid Operator'</code></pre><h4>Even generator</h4><pre><code>def evens():\n    n=0\n    while True:\n        yield n\n        n+=2</code></pre>\n<div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why it worked before moving ahead.</div>\n<div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span>\n    <p class=\"w__q\">Choose before running the code.</p><pre><code>inventory={\"Milk\":2}\ninventory[\"Milk\"]-=2\nif inventory[\"Milk\"]==0: del inventory[\"Milk\"]\nprint(len(inventory))</code></pre>\n    <div class=\"w-guess__opts\"><button data-o=\"0\">0</button><button data-o=\"1\">1</button><button data-o=\"2\">2</button><button data-o=\"3\">KeyError</button></div><p class=\"w__why\">The zero-stock key is deleted.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the mistake</span>\n    <p class=\"w__q\">Tap the part that causes the problem.</p><div class=\"w-spot__line\"><button >def div(a,b):</button><button data-bad>\n    return a/b</button></div>\n    <p class=\"w__why\">Check b == 0 before division.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span>\n    <p class=\"w__q\">Connect each Python idea to its meaning.</p>\n    <div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>dictionary</code></button><button data-pair=\"p1\"><code>set</code></button><button data-pair=\"p2\"><code>generator</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">infinite evens</button><button data-pair=\"p1\">duplicate removal</button><button data-pair=\"p0\">inventory</button></div></div>\n    <p class=\"w__why\">Matching the syntax to its purpose builds fast recall.</p></div>\n",
      "mcqs": [
        {
          "q": "What should happen when inventory reaches zero?",
          "options": [
            "Duplicate key",
            "Delete the item pair",
            "Create a tuple",
            "Freeze it"
          ],
          "answer": 1,
          "why": "The source removes empty stock entries."
        },
        {
          "q": "What protects division?",
          "options": [
            "Set membership",
            "b == 0 check",
            "deepcopy",
            "yield"
          ],
          "answer": 1,
          "why": "Validate before dividing."
        },
        {
          "q": "What is factorial's base result for 0 or 1?",
          "options": [
            "0",
            "1",
            "None",
            "-1"
          ],
          "answer": 1,
          "why": "Both return one."
        },
        {
          "q": "What is the best structure for endless evens?",
          "options": [
            "Complete list",
            "Generator",
            "Deep recursion",
            "Dictionary view"
          ],
          "answer": 1,
          "why": "A generator can be infinite without storing all values."
        }
      ],
      "tasks": [
        {
          "id": "u4t28p01",
          "kind": "code",
          "title": "Inventory sale",
          "brief": "Sell 2 Milk from stock 2, delete it, and print False for 'Milk' in inventory.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": "del inventory[item_name]",
              "message": "Delete zero stock"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: False"
          ]
        },
        {
          "id": "u4t28p02",
          "kind": "code",
          "title": "Duplicate remover",
          "brief": "Clean the supplied fruit list and print ['apple','banana','cherry'].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['apple', 'banana', 'cherry']"
            },
            {
              "type": "sourceIncludes",
              "value": "set(messy_list)",
              "message": "Remove duplicates"
            },
            {
              "type": "sourceIncludes",
              "value": "sorted(",
              "message": "Sort output"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['apple', 'banana', 'cherry']"
          ]
        },
        {
          "id": "u4t28p03",
          "kind": "code",
          "title": "Calculator router",
          "brief": "Print 15 and 2.0 for 10+5 and 10/5.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "15\n2.0"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "def calculate",
              "message": "Create the router"
            },
            {
              "type": "sourceIncludes",
              "value": "if b == 0",
              "message": "Protect division"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 15"
          ]
        },
        {
          "id": "u4t28p04",
          "kind": "code",
          "title": "Recursive pair",
          "brief": "Print 120 then 8 using factorial(5) and fibonacci(6).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "120\n8"
            },
            {
              "type": "stdoutMinLines",
              "value": 2,
              "message": "Print at least 2 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "factorial(n - 1)",
              "message": "Recursive factorial"
            },
            {
              "type": "sourceIncludes",
              "value": "fibonacci(n - 1) + fibonacci(n - 2)",
              "message": "Recursive Fibonacci"
            }
          ],
          "level": "Level 4 - Challenge",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 120"
          ]
        },
        {
          "id": "u4t28p05",
          "kind": "code",
          "title": "Integrated data engine",
          "brief": "Print Unique IDs: 4, Factorial: 24, Evens: [0, 2, 4, 6] on three lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Unique IDs: 4\nFactorial: 24\nEvens: [0, 2, 4, 6]"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": "set(",
              "message": "Deduplicate IDs"
            },
            {
              "type": "sourceIncludes",
              "value": "yield",
              "message": "Generate evens"
            },
            {
              "type": "sourceIncludes",
              "value": "factorial",
              "message": "Use factorial"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Unique IDs: 4"
          ]
        },
        {
          "id": "u4t28p06",
          "kind": "code",
          "title": "Sparse matrix reader",
          "brief": "Store values at (0,5), (10,10), (99,99), then safely print 100, 0 and 1 on separate lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "100\n0\n1"
            },
            {
              "type": "stdoutMinLines",
              "value": 3,
              "message": "Print at least 3 lines"
            },
            {
              "type": "sourceIncludes",
              "value": ".get((row, col), 0)",
              "message": "Use a safe coordinate lookup"
            },
            {
              "type": "sourceIncludes",
              "value": "(0, 5)",
              "message": "Store a tuple coordinate"
            }
          ],
          "level": "Level 5 - Mini Build",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 100"
          ]
        }
      ]
    }
  ],
  "test": {
    "title": "Unit 4 Final Test - Advanced Data Structures and Functions",
    "marksPerQuestion": 2,
    "durationMinutes": 75,
    "questions": [
      {
        "q": "Which symbols create a dictionary?",
        "options": [
          "[]",
          "()",
          "{}",
          "<>"
        ],
        "answer": 2
      },
      {
        "q": "How is dictionary data organised?",
        "options": [
          "Indexes only",
          "Key-value pairs",
          "Alphabetically only",
          "Rows and columns"
        ],
        "answer": 1
      },
      {
        "q": "What happens when d['score'] = 100 uses a new key?",
        "options": [
          "KeyError",
          "A new pair is added",
          "Nothing",
          "The dictionary is deleted"
        ],
        "answer": 1
      },
      {
        "q": "Which method empties a dictionary?",
        "options": [
          "pop",
          "delete",
          "clear",
          "remove"
        ],
        "answer": 2
      },
      {
        "q": "Which method returns key-value tuple pairs?",
        "options": [
          "keys",
          "values",
          "items",
          "pairs"
        ],
        "answer": 2
      },
      {
        "q": "What does a plain for loop over a dictionary produce?",
        "options": [
          "Keys",
          "Values",
          "Pairs",
          "Indexes"
        ],
        "answer": 0
      },
      {
        "q": "What does {x: x**2 for x in range(3)} create?",
        "options": [
          "Set",
          "List",
          "Dictionary",
          "Generator"
        ],
        "answer": 2
      },
      {
        "q": "What happens after d2 = d1 and d2 changes?",
        "options": [
          "Only d2 changes",
          "d1 also changes",
          "A copy is created",
          "An error occurs"
        ],
        "answer": 1
      },
      {
        "q": "Which method is safest for an optional key?",
        "options": [
          "Bracket lookup",
          "get",
          "index",
          "find"
        ],
        "answer": 1
      },
      {
        "q": "Which view is best for key and value together?",
        "options": [
          "keys",
          "values",
          "items",
          "len"
        ],
        "answer": 2
      },
      {
        "q": "What is the defining rule of a set?",
        "options": [
          "Sorted",
          "Unique items",
          "Indexed",
          "Strings only"
        ],
        "answer": 1
      },
      {
        "q": "What does {} create?",
        "options": [
          "Empty set",
          "Empty dictionary",
          "Empty list",
          "SyntaxError"
        ],
        "answer": 1
      },
      {
        "q": "What is the difference between remove and discard?",
        "options": [
          "No difference",
          "remove raises if absent; discard does not",
          "discard clears all",
          "remove adds"
        ],
        "answer": 1
      },
      {
        "q": "What does pop remove from a set?",
        "options": [
          "First item",
          "Last item",
          "An arbitrary item",
          "Largest item"
        ],
        "answer": 2
      },
      {
        "q": "What does A | B produce?",
        "options": [
          "Shared items only",
          "All unique items",
          "A only",
          "Exactly one set"
        ],
        "answer": 1
      },
      {
        "q": "Which operator finds shared items?",
        "options": [
          "|",
          "&",
          "-",
          "^"
        ],
        "answer": 1
      },
      {
        "q": "What is a frozenset?",
        "options": [
          "Sorted set",
          "Immutable set",
          "Nested set",
          "Empty set"
        ],
        "answer": 1
      },
      {
        "q": "Which operation finds mutual friends?",
        "options": [
          "Union",
          "Intersection",
          "Difference",
          "Clear"
        ],
        "answer": 1
      },
      {
        "q": "Which operation removes duplicates?",
        "options": [
          "list",
          "set",
          "tuple",
          "dict.items"
        ],
        "answer": 1
      },
      {
        "q": "Which removal is safe for a missing item?",
        "options": [
          "remove",
          "discard",
          "pop",
          "clear"
        ],
        "answer": 1
      },
      {
        "q": "Which keyword defines a function?",
        "options": [
          "function",
          "create",
          "def",
          "make"
        ],
        "answer": 2
      },
      {
        "q": "Why does a def body not run immediately?",
        "options": [
          "It is invalid",
          "The function must be called",
          "Print is missing",
          "Python skips functions forever"
        ],
        "answer": 1
      },
      {
        "q": "What is a parameter?",
        "options": [
          "Real call data",
          "Variable in the definition",
          "Return value",
          "Global variable"
        ],
        "answer": 1
      },
      {
        "q": "What is a keyword argument?",
        "options": [
          "Matched by explicit parameter name",
          "Always a string",
          "A default only",
          "An error"
        ],
        "answer": 0
      },
      {
        "q": "What is the main difference between print and return?",
        "options": [
          "No difference",
          "Return hands data back; print displays",
          "Print returns; return displays",
          "Return only works on text"
        ],
        "answer": 1
      },
      {
        "q": "What happens after return executes?",
        "options": [
          "Function continues",
          "Function exits",
          "Function loops",
          "Function asks input"
        ],
        "answer": 1
      },
      {
        "q": "What type receives *args?",
        "options": [
          "String",
          "List",
          "Tuple",
          "Dictionary"
        ],
        "answer": 2
      },
      {
        "q": "What type receives **kwargs?",
        "options": [
          "String",
          "List",
          "Tuple",
          "Dictionary"
        ],
        "answer": 3
      },
      {
        "q": "What happens to a local variable after the call ends?",
        "options": [
          "Saved forever",
          "Becomes global",
          "It is destroyed",
          "It becomes a parameter"
        ],
        "answer": 2
      },
      {
        "q": "Can a function read a global variable?",
        "options": [
          "Yes",
          "No",
          "Only numbers",
          "Only after import"
        ],
        "answer": 0
      },
      {
        "q": "What is int('5')?",
        "options": [
          "Keyword use",
          "Calling a built-in function",
          "Implicit coercion",
          "A lambda"
        ],
        "answer": 1
      },
      {
        "q": "What is function composition?",
        "options": [
          "Delete functions",
          "Feed one return value into another call",
          "Tuple packing",
          "Global scope"
        ],
        "answer": 1
      },
      {
        "q": "What is an anonymous function?",
        "options": [
          "Hacker function",
          "Unnamed lambda function",
          "Function without arguments",
          "Hidden module"
        ],
        "answer": 1
      },
      {
        "q": "How many expressions may a lambda contain?",
        "options": [
          "One",
          "Two",
          "Unlimited",
          "Zero only"
        ],
        "answer": 0
      },
      {
        "q": "What does map primarily do?",
        "options": [
          "Sort",
          "Transform every item",
          "Delete items",
          "Find directions"
        ],
        "answer": 1
      },
      {
        "q": "What must a filter predicate decide?",
        "options": [
          "A displayed string",
          "Truthiness for keep/discard",
          "A sort key only",
          "A dictionary key"
        ],
        "answer": 1
      },
      {
        "q": "What does sorted key= control?",
        "options": [
          "Password",
          "Comparison field",
          "List locking",
          "Automatic reverse"
        ],
        "answer": 1
      },
      {
        "q": "What is reduce used for?",
        "options": [
          "Create many lists",
          "Accumulate to one result",
          "Filter only",
          "Import modules"
        ],
        "answer": 1
      },
      {
        "q": "Which function design exposes reusable output?",
        "options": [
          "Only print",
          "Return value",
          "Global mutation",
          "No parameters"
        ],
        "answer": 1
      },
      {
        "q": "What type is *args?",
        "options": [
          "List",
          "Tuple",
          "Dictionary",
          "Set"
        ],
        "answer": 1
      },
      {
        "q": "What is recursion?",
        "options": [
          "A while loop",
          "A function calling itself",
          "An imported function",
          "An unstoppable function"
        ],
        "answer": 1
      },
      {
        "q": "What is essential to stop recursion?",
        "options": [
          "Print",
          "Base case",
          "Break only",
          "Global"
        ],
        "answer": 1
      },
      {
        "q": "What should factorial(1) return?",
        "options": [
          "0",
          "1",
          "2",
          "None"
        ],
        "answer": 1
      },
      {
        "q": "Why does Fibonacci need two base cases?",
        "options": [
          "Python requires elif",
          "The recurrence uses two previous values",
          "For speed only",
          "It does not"
        ],
        "answer": 1
      },
      {
        "q": "What is a major recursion disadvantage?",
        "options": [
          "Cannot do maths",
          "Call-stack memory use",
          "Longer syntax always",
          "Python 2 only"
        ],
        "answer": 1
      },
      {
        "q": "What commonly causes RecursionError?",
        "options": [
          "A correct for loop",
          "Too many self-calls",
          "Large integer only",
          "Using float"
        ],
        "answer": 1
      },
      {
        "q": "Which keyword creates generator behaviour?",
        "options": [
          "return",
          "generate",
          "yield",
          "pause"
        ],
        "answer": 2
      },
      {
        "q": "What happens after yield?",
        "options": [
          "Function dies",
          "Function pauses with state",
          "Program crashes",
          "Next line runs immediately"
        ],
        "answer": 1
      },
      {
        "q": "Which delimiters create a generator expression?",
        "options": [
          "[]",
          "()",
          "{}",
          "<>"
        ],
        "answer": 1
      },
      {
        "q": "What does {x: x*2 for x in data} build?",
        "options": [
          "Set",
          "List",
          "Dictionary",
          "Tuple"
        ],
        "answer": 2
      },
      {
        "q": "What prevents infinite recursion?",
        "options": [
          "yield",
          "Base case",
          "sorted",
          "kwargs"
        ],
        "answer": 1
      },
      {
        "q": "What is best for an infinite sequence?",
        "options": [
          "List",
          "Generator",
          "Deep recursion",
          "Dictionary only"
        ],
        "answer": 1
      },
      {
        "q": "What is a good word-frequency key?",
        "options": [
          "Index",
          "The word",
          "The sentence length",
          "A list"
        ],
        "answer": 1
      },
      {
        "q": "Why lowercase before counting?",
        "options": [
          "For sorting only",
          "To treat Apple and apple together",
          "To remove spaces",
          "To create a set"
        ],
        "answer": 1
      },
      {
        "q": "What should happen when inventory reaches zero?",
        "options": [
          "Duplicate key",
          "Delete the item pair",
          "Create a tuple",
          "Freeze it"
        ],
        "answer": 1
      },
      {
        "q": "What protects division?",
        "options": [
          "Set membership",
          "b == 0 check",
          "deepcopy",
          "yield"
        ],
        "answer": 1
      },
      {
        "q": "When is deepcopy needed?",
        "options": [
          "Simple string value",
          "Nested mutable structures",
          "Empty dictionary only",
          "Integer keys"
        ],
        "answer": 1
      },
      {
        "q": "How do you find missing job skills?",
        "options": [
          "skills - requirements",
          "requirements - skills",
          "requirements | skills",
          "requirements & skills"
        ],
        "answer": 1
      },
      {
        "q": "How many arguments does a standard reducer lambda take?",
        "options": [
          "One",
          "Two",
          "Three",
          "Unlimited only"
        ],
        "answer": 1
      },
      {
        "q": "What is the main generator benefit?",
        "options": [
          "Automatic sorting",
          "Low memory through lazy evaluation",
          "Duplicate removal",
          "Immutability"
        ],
        "answer": 1
      }
    ]
  },
  "project": {
    "title": "Unit 4 Project - AbhyasLab Learning Data Manager",
    "summary": "Build a complete learning-data application using dictionaries, sets, functions, functional programming, recursion and generators.",
    "brief": "\n<h4>Your mission</h4>\n<p>Build a menu-driven terminal application named <strong>AbhyasLab Learning Data Manager</strong>. It must combine dictionaries, sets, reusable functions, functional tools, recursion and generators.</p>\n\n<h4>Main menu</h4>\n<pre><code>========================================\nABHYASLAB LEARNING DATA MANAGER\n1. Register or update a student\n2. Record marks and show a report\n3. Compare student skill sets\n4. Analyse text and word frequency\n5. Run calculator utilities\n6. Generate learning IDs\n7. Backup and restore records\n8. Quit\n========================================</code></pre>\n\n<h4>Required features</h4>\n<ol>\n  <li>Store student profiles in a nested dictionary keyed by a unique student ID.</li>\n  <li>Use <code>.get()</code>, membership checks and validation to avoid KeyError and division-by-zero failures.</li>\n  <li>Store each student's skills as a set and provide union, intersection, difference and missing-skill reports.</li>\n  <li>Use named functions with parameters, defaults, return values, <code>*args</code> and <code>**kwargs</code>.</li>\n  <li>Use at least one higher-order function and one clear use of <code>map()</code>, <code>filter()</code> or <code>sorted(key=...)</code>.</li>\n  <li>Create a recursive factorial or summation utility with a correct base case and input validation.</li>\n  <li>Create a generator that yields unique learning IDs such as <code>LAB-0001</code>, <code>LAB-0002</code>, and so on.</li>\n  <li>Create an independent nested-data backup using <code>copy.deepcopy()</code>.</li>\n  <li>Use at least one dictionary comprehension and one set comprehension.</li>\n  <li>Keep the application running until Quit and handle invalid menu choices safely.</li>\n</ol>\n\n<h4>Suggested architecture</h4>\n<pre><code>students_db = {}\n\ndef register_student(...):\n    ...\n\ndef add_marks(...):\n    ...\n\ndef calculate_average(...):\n    ...\n\ndef compare_skills(...):\n    ...\n\ndef word_frequency(...):\n    ...\n\ndef learning_id_stream():\n    ...\n\ndef main():\n    ...\n</code></pre>\n\n<h4>Submission package</h4>\n<ul>\n  <li><code>learning_data_manager.py</code></li>\n  <li><code>README.md</code> explaining every feature and data-structure decision</li>\n  <li>At least eight sample runs, including missing records, invalid numbers and a divide-by-zero attempt</li>\n  <li>A public GitHub repository or public Google Drive link</li>\n</ul>\n\n<h4>Quality checklist</h4>\n<ul>\n  <li>Meaningful function and variable names</li>\n  <li>No unnecessary global modification</li>\n  <li>No aliasing bug in backups</li>\n  <li>Every recursive function has a reachable base case</li>\n  <li>Generators are consumed only as far as needed</li>\n  <li>Readable reports with consistent labels</li>\n  <li>Comments explain decisions rather than restating obvious syntax</li>\n</ul>\n"
  }
};

/* ==========================================================================
   AbhyasLab - UNIT 6
   Files, Exceptions, Regular Expressions and Modules - Practice Edition.

   Built from the supplied 91-page Unit 6 PDF. The source organisation and
   terminology are preserved, then expanded with inline SVG diagrams, small
   animations, prediction games, matching interactions, staged coding tasks,
   revision checkpoints, practical-program missions, a final test and project.
   ========================================================================== */

const UNIT_6 = {
  "unit": "Unit 6",
  "unitTitle": "Files, Exceptions, Regular Expressions and Modules - Practice Edition",
  "topics": [
    {
      "id": "u6t01",
      "title": "File Handling Foundations and Access Modes",
      "summary": "Understand why programs need permanent storage, distinguish text and binary files, and choose safe open modes.",
      "notebookLM": "",
      "notes": "<h4>File Handling Foundations and Access Modes</h4><p>Understand why programs need permanent storage, distinguish text and binary files, and choose safe open modes.</p><h4>The real-world analogy</h4><p>A filing cabinet must be opened, used for reading or writing, and closed after the work is finished.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Choose file</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Select mode</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Process safely</text></svg><h4>Core ideas</h4><ul><li>Text files are human-readable; binary files contain raw bytes.</li><li>Mode &#x27;r&#x27; reads, &#x27;w&#x27; replaces content, and &#x27;a&#x27; adds at the end.</li><li>Opening in read mode fails when the file does not exist.</li><li>A file object is the bridge between Python and storage.</li></ul><h4>Worked example</h4><pre><code>with open(&quot;notes.txt&quot;, &quot;w&quot;) as file:\n    file.write(&quot;Unit 6&quot;)\nwith open(&quot;notes.txt&quot;, &quot;r&quot;) as file:\n    print(file.read())</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>with open(&quot;notes.txt&quot;, &quot;w&quot;) as file:\n    file.write(&quot;Unit 6&quot;)\nwith open(&quot;notes.txt&quot;, &quot;r&quot;) as file:\n    print(file.read())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Unit 6</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>file = open(&quot;diary.txt&quot;, &quot;w&quot;)</code></pre><p class=\"w__why\">Write mode immediately truncates an existing file. Use append mode when old data must remain.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>r</code></button><button data-pair=\"p1\"><code>w</code></button><button data-pair=\"p2\"><code>a</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Append without erasing</button><button data-pair=\"p1\">Replace or create data</button><button data-pair=\"p0\">Read existing data</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which sequence describes manual file handling?",
          "options": [
            "Open, process, close",
            "Import, run, delete",
            "Read, compile, upload",
            "Create, rename, exit"
          ],
          "answer": 0,
          "why": "A manually opened file must be processed and then closed."
        },
        {
          "q": "Which mode preserves old content and adds new text?",
          "options": [
            "r",
            "w",
            "a",
            "b"
          ],
          "answer": 2,
          "why": "Append mode places the cursor at the end."
        },
        {
          "q": "What can happen when 'r' opens a missing file?",
          "options": [
            "Blank file is created",
            "FileNotFoundError",
            "Mode changes to w",
            "Nothing"
          ],
          "answer": 1,
          "why": "Read mode requires the target to exist."
        },
        {
          "q": "Which is normally a binary file?",
          "options": [
            "notes.txt",
            "data.csv",
            "photo.jpg",
            "page.html"
          ],
          "answer": 2,
          "why": "JPEG files contain encoded binary data."
        },
        {
          "q": "What does 'b' add to a mode?",
          "options": [
            "Backup",
            "Binary byte handling",
            "Browser access",
            "Buffer deletion"
          ],
          "answer": 1,
          "why": "Modes such as rb and wb operate on bytes."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Create and Read a File",
          "brief": "Write Unit 6 to notes.txt, then read and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Unit 6"
            },
            {
              "type": "sourceIncludes",
              "value": "with open",
              "message": "Use with open"
            },
            {
              "type": "sourceIncludes",
              "value": "\"w\"",
              "message": "Use \"w\""
            },
            {
              "type": "sourceIncludes",
              "value": "\"r\"",
              "message": "Use \"r\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Unit 6"
          ],
          "id": "u6t01p01"
        },
        {
          "kind": "code",
          "title": "Append Without Erasing",
          "brief": "Create log.txt with Start, append Ready, then print both lines.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Start\nReady"
            },
            {
              "type": "sourceIncludes",
              "value": "\"a\"",
              "message": "Use \"a\""
            },
            {
              "type": "sourceIncludes",
              "value": "file.write",
              "message": "Use file.write"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Start"
          ],
          "id": "u6t01p02"
        }
      ]
    },
    {
      "id": "u6t02",
      "title": "Reading Files: read, readline and Iteration",
      "summary": "Read complete documents, individual lines, lists of lines and very large files using memory-efficient iteration.",
      "notebookLM": "",
      "notes": "<h4>Reading Files: read, readline and Iteration</h4><p>Read complete documents, individual lines, lists of lines and very large files using memory-efficient iteration.</p><h4>The real-world analogy</h4><p>A reader can take the whole book, one page, or one line at a time depending on the size of the document.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Open for reading</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Move cursor</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Return text</text></svg><h4>Core ideas</h4><ul><li>read() returns the remaining content as one string.</li><li>readline() returns one line and advances the cursor.</li><li>readlines() returns a list of line strings.</li><li>Iterating over the file object loads one line at a time and is best for large files.</li></ul><h4>Worked example</h4><pre><code>with open(&quot;poem.txt&quot;, &quot;w&quot;) as file:\n    file.write(&quot;Roses\\nViolets\\n&quot;)\nwith open(&quot;poem.txt&quot;, &quot;r&quot;) as file:\n    for line in file:\n        print(line.strip())</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>with open(&quot;poem.txt&quot;, &quot;w&quot;) as file:\n    file.write(&quot;Roses\\nViolets\\n&quot;)\nwith open(&quot;poem.txt&quot;, &quot;r&quot;) as file:\n    for line in file:\n        print(line.strip())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Roses</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>data = open(&quot;huge.log&quot;).read()</code></pre><p class=\"w__why\">Loading a huge file completely may exhaust memory. Iterate line by line instead.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>read()</code></button><button data-pair=\"p1\"><code>readline()</code></button><button data-pair=\"p2\"><code>readlines()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">List of lines</button><button data-pair=\"p1\">One line</button><button data-pair=\"p0\">One string</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does read() return?",
          "options": [
            "One string",
            "One integer",
            "A dictionary",
            "A file path"
          ],
          "answer": 0,
          "why": "read() returns text from the current cursor to the end."
        },
        {
          "q": "What does readlines() return?",
          "options": [
            "Tuple",
            "List of strings",
            "Boolean",
            "Set"
          ],
          "answer": 1,
          "why": "Each list element corresponds to one line."
        },
        {
          "q": "Which method advances one line per call?",
          "options": [
            "write()",
            "readline()",
            "tell()",
            "seek()"
          ],
          "answer": 1,
          "why": "readline() consumes the next line."
        },
        {
          "q": "What is safest for a 10 GB log?",
          "options": [
            "read()",
            "readlines()",
            "for line in file",
            "Convert to JSON"
          ],
          "answer": 2,
          "why": "Direct iteration is lazy and memory-efficient."
        },
        {
          "q": "Why is strip() often used while reading lines?",
          "options": [
            "To delete the file",
            "To remove surrounding whitespace such as newline characters",
            "To sort text",
            "To rewind"
          ],
          "answer": 1,
          "why": "strip() removes leading and trailing whitespace."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Read Line by Line",
          "brief": "Create two lines and print them without blank spacing.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Roses\nViolets"
            },
            {
              "type": "sourceIncludes",
              "value": "for line in file",
              "message": "Use for line in file"
            },
            {
              "type": "sourceIncludes",
              "value": ".strip()",
              "message": "Use .strip()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Roses"
          ],
          "id": "u6t02p01"
        },
        {
          "kind": "code",
          "title": "Compare Reading Methods",
          "brief": "Read the first line with readline and the remaining lines with read.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A\nBC"
            },
            {
              "type": "sourceIncludes",
              "value": "readline()",
              "message": "Use readline()"
            },
            {
              "type": "sourceIncludes",
              "value": "read()",
              "message": "Use read()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: A"
          ],
          "id": "u6t02p02"
        }
      ]
    },
    {
      "id": "u6t03",
      "title": "Writing, Appending and Newline Control",
      "summary": "Create reports and logs with write mode, convert non-string values, and control line breaks explicitly.",
      "notebookLM": "",
      "notes": "<h4>Writing, Appending and Newline Control</h4><p>Create reports and logs with write mode, convert non-string values, and control line breaks explicitly.</p><h4>The real-world analogy</h4><p>A pen does not press Enter automatically; the writer must decide where each new line begins.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Prepare string</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">write()</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Persist data</text></svg><h4>Core ideas</h4><ul><li>write() accepts strings and returns the number of characters written.</li><li>Unlike print(), write() does not add a newline automatically.</li><li>Convert numbers with str() or f-strings before writing.</li><li>Append mode is appropriate for logs and history files.</li></ul><h4>Worked example</h4><pre><code>score = 9950\nwith open(&quot;score.txt&quot;, &quot;w&quot;) as file:\n    file.write(f&quot;Score: {score}\\n&quot;)\nwith open(&quot;score.txt&quot;) as file:\n    print(file.read(), end=&quot;&quot;)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>score = 9950\nwith open(&quot;score.txt&quot;, &quot;w&quot;) as file:\n    file.write(f&quot;Score: {score}\\n&quot;)\nwith open(&quot;score.txt&quot;) as file:\n    print(file.read(), end=&quot;&quot;)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Score: 9950</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>file.write(500)</code></pre><p class=\"w__why\">write() requires a string or bytes-like data depending on mode. Convert the integer first.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>\\n</code></button><button data-pair=\"p1\"><code>str(value)</code></button><button data-pair=\"p2\"><code>append</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Keep existing history</button><button data-pair=\"p1\">Convert data to text</button><button data-pair=\"p0\">Explicit line break</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does write() not add automatically?",
          "options": [
            "A filename",
            "A newline",
            "A file object",
            "A string"
          ],
          "answer": 1,
          "why": "Newlines must be included explicitly."
        },
        {
          "q": "What happens with file.write(500) in text mode?",
          "options": [
            "Writes 500",
            "TypeError",
            "Creates 500 files",
            "Returns False"
          ],
          "answer": 1,
          "why": "Text write expects a string."
        },
        {
          "q": "Which is a modern way to write an integer?",
          "options": [
            "file.write(score)",
            "file.write(f\"{score}\")",
            "file.print(score)",
            "file.add(score)"
          ],
          "answer": 1,
          "why": "An f-string produces text."
        },
        {
          "q": "Which mode is best for an audit log?",
          "options": [
            "w",
            "a",
            "r",
            "rb"
          ],
          "answer": 1,
          "why": "Append keeps previous entries."
        },
        {
          "q": "What does opening an existing file with 'w' do?",
          "options": [
            "Protects it",
            "Truncates it",
            "Moves to the end",
            "Reads only"
          ],
          "answer": 1,
          "why": "Write mode replaces the old content."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Write Numeric Data",
          "brief": "Write Score: 9950 to a file using an f-string, then print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Score: 9950"
            },
            {
              "type": "sourceIncludes",
              "value": "f\"Score:",
              "message": "Use f\"Score:"
            },
            {
              "type": "sourceIncludes",
              "value": "file.write",
              "message": "Use file.write"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Score: 9950"
          ],
          "id": "u6t03p01"
        },
        {
          "kind": "code",
          "title": "Build a Running Log",
          "brief": "Write two log entries using append mode and print the history.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Login\nLogout"
            },
            {
              "type": "sourceIncludes",
              "value": "\"a\"",
              "message": "Use \"a\""
            },
            {
              "type": "sourceIncludes",
              "value": "\\n",
              "message": "Use \\n"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Login"
          ],
          "id": "u6t03p02"
        }
      ]
    },
    {
      "id": "u6t04",
      "title": "Context Managers: The Safe with Statement",
      "summary": "Use with open(...) to guarantee resource cleanup even when an exception interrupts file processing.",
      "notebookLM": "",
      "notes": "<h4>Context Managers: The Safe with Statement</h4><p>Use with open(...) to guarantee resource cleanup even when an exception interrupts file processing.</p><h4>The real-world analogy</h4><p>An automatic door closes as soon as you leave its area, even when something unexpected happens.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Enter context</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Use resource</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Automatic cleanup</text></svg><h4>Core ideas</h4><ul><li>The with statement creates a context manager.</li><li>The file closes when execution leaves the indented block.</li><li>Cleanup still occurs when an exception is raised inside the block.</li><li>Use with for almost all ordinary file handling.</li></ul><h4>Worked example</h4><pre><code>with open(&quot;message.txt&quot;, &quot;w&quot;) as doc:\n    doc.write(&quot;Safely closed&quot;)\nprint(doc.closed)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>with open(&quot;message.txt&quot;, &quot;w&quot;) as doc:\n    doc.write(&quot;Safely closed&quot;)\nprint(doc.closed)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>f = open(&quot;data.txt&quot;)\nvalue = 10 / 0\nf.close()</code></pre><p class=\"w__why\">The exception prevents close() from running. A context manager avoids this leak.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>with</code></button><button data-pair=\"p1\"><code>as</code></button><button data-pair=\"p2\"><code>dedent</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Leave and close</button><button data-pair=\"p1\">Name the resource</button><button data-pair=\"p0\">Enter managed context</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What is the main benefit of with open?",
          "options": [
            "Faster internet",
            "Automatic closing",
            "Automatic encryption",
            "Automatic sorting"
          ],
          "answer": 1,
          "why": "The context manager handles cleanup."
        },
        {
          "q": "When is the file normally closed?",
          "options": [
            "After five seconds",
            "When the with block is exited",
            "Only at shutdown",
            "After read()"
          ],
          "answer": 1,
          "why": "Leaving the indented block triggers cleanup."
        },
        {
          "q": "Does the file close if an exception occurs inside the block?",
          "options": [
            "No",
            "Yes",
            "Only on Windows",
            "Only in read mode"
          ],
          "answer": 1,
          "why": "Context management guarantees teardown."
        },
        {
          "q": "Which syntax is correct?",
          "options": [
            "with open(\"a.txt\") as f:",
            "with file open a.txt",
            "open with a.txt",
            "context file()"
          ],
          "answer": 0,
          "why": "This is the standard context-manager form."
        },
        {
          "q": "What happens when reading a closed file?",
          "options": [
            "It reopens",
            "ValueError",
            "Returns None",
            "Creates a copy"
          ],
          "answer": 1,
          "why": "I/O operations on a closed file are invalid."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Prove Automatic Closing",
          "brief": "Write a file in a with block and print whether it is closed afterward.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "with open",
              "message": "Use with open"
            },
            {
              "type": "sourceIncludes",
              "value": ".closed",
              "message": "Use .closed"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t04p01"
        },
        {
          "kind": "code",
          "title": "Handle an Error Safely",
          "brief": "Raise and catch an error inside file processing, then prove the file closed.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "try:",
              "message": "Use try:"
            },
            {
              "type": "sourceIncludes",
              "value": "with open",
              "message": "Use with open"
            },
            {
              "type": "sourceIncludes",
              "value": "except ValueError",
              "message": "Use except ValueError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t04p02"
        }
      ]
    },
    {
      "id": "u6t05",
      "title": "File Cursor Positions: tell and seek",
      "summary": "Track and reposition the invisible file cursor to reread selected sections of a document.",
      "notebookLM": "",
      "notes": "<h4>File Cursor Positions: tell and seek</h4><p>Track and reposition the invisible file cursor to reread selected sections of a document.</p><h4>The real-world analogy</h4><p>A cassette player has a current position and a rewind button.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Read bytes</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">tell position</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">seek target</text></svg><h4>Core ideas</h4><ul><li>The cursor starts at the beginning in read and write modes.</li><li>Append mode positions writes at the end.</li><li>tell() reports the current stream position.</li><li>seek(0) rewinds to the beginning.</li></ul><h4>Worked example</h4><pre><code>with open(&quot;alphabet.txt&quot;, &quot;w&quot;) as file:\n    file.write(&quot;ABCDEFGHIJ&quot;)\nwith open(&quot;alphabet.txt&quot;, &quot;r&quot;) as file:\n    print(file.read(5))\n    print(file.tell())\n    file.seek(0)\n    print(file.read(2))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>with open(&quot;alphabet.txt&quot;, &quot;w&quot;) as file:\n    file.write(&quot;ABCDEFGHIJ&quot;)\nwith open(&quot;alphabet.txt&quot;, &quot;r&quot;) as file:\n    print(file.read(5))\n    print(file.tell())\n    file.seek(0)\n    print(file.read(2))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">ABCDE</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>print(file.read())\nprint(file.read())</code></pre><p class=\"w__why\">The second read returns an empty string because the cursor is already at the end.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>tell()</code></button><button data-pair=\"p1\"><code>seek(0)</code></button><button data-pair=\"p2\"><code>read(5)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Consume five characters</button><button data-pair=\"p1\">Rewind</button><button data-pair=\"p0\">Report position</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Where does the cursor begin in read mode?",
          "options": [
            "End",
            "Index 0",
            "Random location",
            "Index 1"
          ],
          "answer": 1,
          "why": "Read mode begins at the start."
        },
        {
          "q": "Where is the append cursor positioned for writing?",
          "options": [
            "Beginning",
            "End",
            "Middle",
            "It has no cursor"
          ],
          "answer": 1,
          "why": "Append writes after existing content."
        },
        {
          "q": "What does tell() return?",
          "options": [
            "File text",
            "Current stream position",
            "Filename",
            "Mode"
          ],
          "answer": 1,
          "why": "tell() reports the current offset."
        },
        {
          "q": "What does seek(0) do?",
          "options": [
            "Deletes text",
            "Moves to the start",
            "Closes the file",
            "Moves to the end"
          ],
          "answer": 1,
          "why": "Offset zero is the beginning."
        },
        {
          "q": "Why can a second read() be empty?",
          "options": [
            "File disappeared",
            "Cursor is at end-of-file",
            "Mode changed",
            "String is binary"
          ],
          "answer": 1,
          "why": "read() consumes data and advances the cursor."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Track and Rewind",
          "brief": "Read five characters, print the position, rewind and read two.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ABCDE\n5\nAB"
            },
            {
              "type": "sourceIncludes",
              "value": "tell()",
              "message": "Use tell()"
            },
            {
              "type": "sourceIncludes",
              "value": "seek(0)",
              "message": "Use seek(0)"
            },
            {
              "type": "sourceIncludes",
              "value": "read(5)",
              "message": "Use read(5)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ABCDE"
          ],
          "id": "u6t05p01"
        },
        {
          "kind": "code",
          "title": "Jump to a Character",
          "brief": "Write 0123456789, seek to index 7 and print the remaining text.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "789"
            },
            {
              "type": "sourceIncludes",
              "value": "seek(7)",
              "message": "Use seek(7)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 789"
          ],
          "id": "u6t05p02"
        }
      ]
    },
    {
      "id": "u6t06",
      "title": "Directories and Paths with os and pathlib",
      "summary": "Navigate folders, check file existence and use modern Path objects that work across operating systems.",
      "notebookLM": "",
      "notes": "<h4>Directories and Paths with os and pathlib</h4><p>Navigate folders, check file existence and use modern Path objects that work across operating systems.</p><h4>The real-world analogy</h4><p>A map tells a traveller where they are, what is nearby and whether a destination exists.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Build path</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Check existence</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Read or create</text></svg><h4>Core ideas</h4><ul><li>os.getcwd() reports the current working directory.</li><li>os.listdir() lists entries in a directory.</li><li>os.path.exists() prevents operations on missing paths.</li><li>pathlib.Path offers object-oriented path operations.</li></ul><h4>Worked example</h4><pre><code>from pathlib import Path\nreport = Path(&quot;reports&quot;) / &quot;summary.txt&quot;\nprint(report.name)\nprint(report.suffix)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>from pathlib import Path\nreport = Path(&quot;reports&quot;) / &quot;summary.txt&quot;\nprint(report.name)\nprint(report.suffix)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">summary.txt</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>open(&quot;missing/final.txt&quot;)</code></pre><p class=\"w__why\">A path should be checked or its failure handled before opening it.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>os.getcwd()</code></button><button data-pair=\"p1\"><code>os.path.exists()</code></button><button data-pair=\"p2\"><code>Path.suffix</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">File extension</button><button data-pair=\"p1\">Existence check</button><button data-pair=\"p0\">Current folder</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which module interacts with folders and the OS?",
          "options": [
            "math",
            "os",
            "csv",
            "re"
          ],
          "answer": 1,
          "why": "os exposes operating-system services."
        },
        {
          "q": "What does os.path.exists return?",
          "options": [
            "A path object",
            "True or False",
            "File text",
            "A list"
          ],
          "answer": 1,
          "why": "It checks whether a path exists."
        },
        {
          "q": "Which is the modern object-oriented path API?",
          "options": [
            "pathlib",
            "calendar",
            "pickle",
            "statistics"
          ],
          "answer": 0,
          "why": "pathlib represents paths as objects."
        },
        {
          "q": "What does Path(\"report.txt\").suffix return?",
          "options": [
            "report",
            ".txt",
            "txt/report",
            "True"
          ],
          "answer": 1,
          "why": "suffix includes the extension dot."
        },
        {
          "q": "What does the / operator do between Path objects and names?",
          "options": [
            "Division",
            "Joins path components",
            "Deletes a folder",
            "Reads text"
          ],
          "answer": 1,
          "why": "Path overloads / for clean joining."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Inspect a Path",
          "brief": "Create reports/summary.txt as a Path and print its name and suffix.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "summary.txt\n.txt"
            },
            {
              "type": "sourceIncludes",
              "value": "from pathlib import Path",
              "message": "Use from pathlib import Path"
            },
            {
              "type": "sourceIncludes",
              "value": ".suffix",
              "message": "Use .suffix"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: summary.txt"
          ],
          "id": "u6t06p01"
        },
        {
          "kind": "code",
          "title": "Create and Check a File",
          "brief": "Create data.txt with pathlib and print whether it exists.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nReady"
            },
            {
              "type": "sourceIncludes",
              "value": "Path(",
              "message": "Use Path("
            },
            {
              "type": "sourceIncludes",
              "value": ".exists()",
              "message": "Use .exists()"
            },
            {
              "type": "sourceIncludes",
              "value": ".write_text",
              "message": "Use .write_text"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t06p02"
        }
      ]
    },
    {
      "id": "u6t07",
      "title": "Revision Checkpoint 1 - Safe File Operations",
      "summary": "Combine access modes, efficient reading, context managers, cursor movement and modern paths in one mission.",
      "notebookLM": "",
      "notes": "<h4>Revision Checkpoint 1 - Safe File Operations</h4><p>Combine access modes, efficient reading, context managers, cursor movement and modern paths in one mission.</p><h4>The real-world analogy</h4><p>A document controller checks the path, opens the correct drawer, edits safely and records the result.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Locate</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Process</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Verify</text></svg><h4>Core ideas</h4><ul><li>Choose modes intentionally.</li><li>Prefer context managers.</li><li>Use lazy iteration for large files.</li><li>Check paths and cursor position when behaviour is unexpected.</li></ul><h4>Worked example</h4><pre><code>from pathlib import Path\npath = Path(&quot;mission.txt&quot;)\npath.write_text(&quot;alpha\\nbeta\\n&quot;)\nwith path.open() as file:\n    print(sum(1 for _ in file))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>from pathlib import Path\npath = Path(&quot;mission.txt&quot;)\npath.write_text(&quot;alpha\\nbeta\\n&quot;)\nwith path.open() as file:\n    print(sum(1 for _ in file))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">2</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>open(&quot;history.txt&quot;, &quot;w&quot;).write(&quot;new&quot;)</code></pre><p class=\"w__why\">This both truncates old history and leaves resource lifetime implicit. Use with and append when appropriate.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>mode</code></button><button data-pair=\"p1\"><code>context manager</code></button><button data-pair=\"p2\"><code>cursor</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Current position</button><button data-pair=\"p1\">Cleanup</button><button data-pair=\"p0\">Intention</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which combination is safest for a growing log?",
          "options": [
            "with + append mode",
            "read + no close",
            "write mode every event",
            "binary mode only"
          ],
          "answer": 0,
          "why": "Append preserves history and with closes safely."
        },
        {
          "q": "Which technique reads a large file lazily?",
          "options": [
            "readlines()",
            "for line in file",
            "read()",
            "str(file)"
          ],
          "answer": 1,
          "why": "File iteration processes one line at a time."
        },
        {
          "q": "Which method rewinds a stream?",
          "options": [
            "tell(0)",
            "seek(0)",
            "read(0)",
            "reset()"
          ],
          "answer": 1,
          "why": "seek changes the cursor."
        },
        {
          "q": "Which object can directly read_text and write_text?",
          "options": [
            "Path",
            "csv.reader",
            "Exception",
            "Match"
          ],
          "answer": 0,
          "why": "pathlib Path offers convenience methods."
        },
        {
          "q": "Which mode is destructive to existing text?",
          "options": [
            "a",
            "r",
            "w",
            "rb"
          ],
          "answer": 2,
          "why": "Write mode truncates existing content."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Count File Lines",
          "brief": "Create two lines using Path, iterate over the file and print the line count.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2"
            },
            {
              "type": "sourceIncludes",
              "value": "Path(",
              "message": "Use Path("
            },
            {
              "type": "sourceIncludes",
              "value": "with path.open",
              "message": "Use with path.open"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2"
          ],
          "id": "u6t07p01"
        },
        {
          "kind": "code",
          "title": "Append and Rewind",
          "brief": "Create AB, append CD, read two characters, rewind and print all.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "AB\nABCD"
            },
            {
              "type": "sourceIncludes",
              "value": "\"a\"",
              "message": "Use \"a\""
            },
            {
              "type": "sourceIncludes",
              "value": "seek(0)",
              "message": "Use seek(0)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: AB"
          ],
          "id": "u6t07p02"
        },
        {
          "kind": "code",
          "title": "Safe Missing-File Check",
          "brief": "Use Path.exists to print Missing when absent.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Missing"
            },
            {
              "type": "sourceIncludes",
              "value": ".exists()",
              "message": "Use .exists()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Missing"
          ],
          "id": "u6t07p03"
        }
      ]
    },
    {
      "id": "u6t08",
      "title": "CSV Files: Rows, Columns, Readers and Writers",
      "summary": "Store flat tabular data using the csv module, read rows as lists and write clean spreadsheets.",
      "notebookLM": "",
      "notes": "<h4>CSV Files: Rows, Columns, Readers and Writers</h4><p>Store flat tabular data using the csv module, read rows as lists and write clean spreadsheets.</p><h4>The real-world analogy</h4><p>A CSV file is a barebones spreadsheet: each line is a row and commas separate columns.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Open CSV</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Reader or writer</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Process rows</text></svg><h4>Core ideas</h4><ul><li>CSV means Comma-Separated Values.</li><li>csv.reader returns each row as a list of strings.</li><li>csv.writer writes rows with correct quoting.</li><li>Use newline=&#x27;&#x27; while writing CSV files, especially on Windows.</li></ul><h4>Worked example</h4><pre><code>import csv\nrows = [[&quot;Name&quot;, &quot;Score&quot;], [&quot;Asha&quot;, 91]]\nwith open(&quot;scores.csv&quot;, &quot;w&quot;, newline=&quot;&quot;) as file:\n    csv.writer(file).writerows(rows)\nwith open(&quot;scores.csv&quot;) as file:\n    for row in csv.reader(file):\n        print(&quot; | &quot;.join(row))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import csv\nrows = [[&quot;Name&quot;, &quot;Score&quot;], [&quot;Asha&quot;, 91]]\nwith open(&quot;scores.csv&quot;, &quot;w&quot;, newline=&quot;&quot;) as file:\n    csv.writer(file).writerows(rows)\nwith open(&quot;scores.csv&quot;, &quot;r&quot;, newline=&quot;&quot;) as file:\n    for row in csv.reader(file):\n        print(&quot; | &quot;.join(row))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Name | Score</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>with open(&quot;scores.csv&quot;, &quot;w&quot;) as file:\n    csv.writer(file).writerows(rows)</code></pre><p class=\"w__why\">On some platforms, omitting newline=&#x27;&#x27; can create unwanted blank rows.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>csv.reader</code></button><button data-pair=\"p1\"><code>writerow</code></button><button data-pair=\"p2\"><code>writerows</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Many rows</button><button data-pair=\"p1\">One row</button><button data-pair=\"p0\">Rows as lists</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does CSV stand for?",
          "options": [
            "Computer Saved Variables",
            "Comma-Separated Values",
            "Coded String View",
            "Column Storage Version"
          ],
          "answer": 1,
          "why": "CSV represents tabular values separated by delimiters."
        },
        {
          "q": "What type is one row returned by csv.reader?",
          "options": [
            "Dictionary",
            "List",
            "Set",
            "Integer"
          ],
          "answer": 1,
          "why": "The basic reader returns a list of string fields."
        },
        {
          "q": "Which method writes several rows?",
          "options": [
            "writerows()",
            "readlines()",
            "dump()",
            "appendrows()"
          ],
          "answer": 0,
          "why": "writerows accepts an iterable of rows."
        },
        {
          "q": "Why use newline='' while writing CSV?",
          "options": [
            "Encrypt data",
            "Prevent unwanted blank rows",
            "Convert to JSON",
            "Sort fields"
          ],
          "answer": 1,
          "why": "It lets the csv module control line endings."
        },
        {
          "q": "Which data best fits CSV?",
          "options": [
            "Deeply nested game inventory",
            "Flat student score table",
            "Image bytes",
            "Python class object"
          ],
          "answer": 1,
          "why": "CSV is designed for rows and columns."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Write and Read CSV",
          "brief": "Write a header and one student row, then print both rows with separators.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Name | Score\nAsha | 91"
            },
            {
              "type": "sourceIncludes",
              "value": "import csv",
              "message": "Use import csv"
            },
            {
              "type": "sourceIncludes",
              "value": "writerows",
              "message": "Use writerows"
            },
            {
              "type": "sourceIncludes",
              "value": "csv.reader",
              "message": "Use csv.reader"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Name | Score"
          ],
          "id": "u6t08p01"
        },
        {
          "kind": "code",
          "title": "Add a CSV Row",
          "brief": "Create a CSV, append one new record with writerow, then print the final record count.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": "writerow",
              "message": "Use writerow"
            },
            {
              "type": "sourceIncludes",
              "value": "\"a\"",
              "message": "Use \"a\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ],
          "id": "u6t08p02"
        }
      ]
    },
    {
      "id": "u6t09",
      "title": "JSON: The Universal Structured Data Language",
      "summary": "Convert between Python dictionaries and JSON strings or files using dumps, loads, dump and load.",
      "notebookLM": "",
      "notes": "<h4>JSON: The Universal Structured Data Language</h4><p>Convert between Python dictionaries and JSON strings or files using dumps, loads, dump and load.</p><h4>The real-world analogy</h4><p>JSON is a universal translator used when programs written in different languages exchange structured data.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Python data</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">JSON text</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Python data</text></svg><h4>Core ideas</h4><ul><li>JSON resembles nested Python dictionaries and lists.</li><li>dumps converts Python data to a JSON string; loads reverses it.</li><li>dump writes JSON to a file; load reads JSON from a file.</li><li>JSON supports strings, numbers, booleans, arrays, objects and null.</li></ul><h4>Worked example</h4><pre><code>import json\nprofile = {&quot;name&quot;: &quot;Asha&quot;, &quot;active&quot;: True}\ntext = json.dumps(profile)\nrestored = json.loads(text)\nprint(restored[&quot;name&quot;])</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import json\nprofile = {&quot;name&quot;: &quot;Asha&quot;, &quot;active&quot;: True}\ntext = json.dumps(profile)\nrestored = json.loads(text)\nprint(restored[&quot;name&quot;])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Asha</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>json.dump(profile)</code></pre><p class=\"w__why\">json.dump requires both the data and an open file object. Use dumps when a string is needed.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>dumps</code></button><button data-pair=\"p1\"><code>loads</code></button><button data-pair=\"p2\"><code>dump/load</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Work with files</button><button data-pair=\"p1\">JSON string to Python</button><button data-pair=\"p0\">Python to JSON string</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does JSON stand for?",
          "options": [
            "JavaScript Object Notation",
            "Joined System Object Network",
            "Java Source Output Name",
            "JSON Standard Object Node"
          ],
          "answer": 0,
          "why": "JSON originated from JavaScript object notation."
        },
        {
          "q": "Which Python structure most resembles a JSON object?",
          "options": [
            "Set",
            "Dictionary",
            "Tuple",
            "Generator"
          ],
          "answer": 1,
          "why": "Both use key-value pairs."
        },
        {
          "q": "Which function returns a JSON string?",
          "options": [
            "json.dump",
            "json.dumps",
            "json.load",
            "json.loads_file"
          ],
          "answer": 1,
          "why": "The s indicates string."
        },
        {
          "q": "Which function reads from an open JSON file?",
          "options": [
            "json.load",
            "json.loads",
            "json.reader",
            "json.open"
          ],
          "answer": 0,
          "why": "load consumes a file object."
        },
        {
          "q": "What happens to Python True in JSON text?",
          "options": [
            "It remains True",
            "It becomes true",
            "It becomes 1 only",
            "It is deleted"
          ],
          "answer": 1,
          "why": "JSON booleans use lowercase true and false."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Round-Trip a JSON String",
          "brief": "Convert a dictionary to JSON text and back, then print the restored name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha"
            },
            {
              "type": "sourceIncludes",
              "value": "json.dumps",
              "message": "Use json.dumps"
            },
            {
              "type": "sourceIncludes",
              "value": "json.loads",
              "message": "Use json.loads"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Asha"
          ],
          "id": "u6t09p01"
        },
        {
          "kind": "code",
          "title": "Save and Load JSON",
          "brief": "Save a nested game state with indent=4, load it and print the level and first item.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5\nsword"
            },
            {
              "type": "sourceIncludes",
              "value": "json.dump",
              "message": "Use json.dump"
            },
            {
              "type": "sourceIncludes",
              "value": "json.load",
              "message": "Use json.load"
            },
            {
              "type": "sourceIncludes",
              "value": "indent=4",
              "message": "Use indent=4"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 5"
          ],
          "id": "u6t09p02"
        }
      ]
    },
    {
      "id": "u6t10",
      "title": "Choosing CSV or JSON",
      "summary": "Select the right structured format based on shape, interoperability, nesting and the intended consumer.",
      "notebookLM": "",
      "notes": "<h4>Choosing CSV or JSON</h4><p>Select the right structured format based on shape, interoperability, nesting and the intended consumer.</p><h4>The real-world analogy</h4><p>CSV is a flat spreadsheet, while JSON is a labelled tree with branches and nested containers.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Inspect structure</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Choose format</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Exchange data</text></svg><h4>Core ideas</h4><ul><li>CSV is compact and ideal for flat rows and columns.</li><li>JSON is suited to APIs, configuration and nested structures.</li><li>CSV fields are read as text unless converted.</li><li>JSON preserves basic data types and hierarchy.</li></ul><h4>Worked example</h4><pre><code>record = {&quot;name&quot;: &quot;Asha&quot;, &quot;projects&quot;: [{&quot;title&quot;: &quot;Bot&quot;, &quot;tasks&quot;: 4}]}\nprint(&quot;JSON&quot; if isinstance(record[&quot;projects&quot;], list) else &quot;CSV&quot;)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>record = {&quot;name&quot;: &quot;Asha&quot;, &quot;projects&quot;: [{&quot;title&quot;: &quot;Bot&quot;, &quot;tasks&quot;: 4}]}\nprint(&quot;JSON&quot; if isinstance(record[&quot;projects&quot;], list) else &quot;CSV&quot;)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">JSON</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>inventory = &quot;sword,potion,{damage: 10}&quot;</code></pre><p class=\"w__why\">Flattening nested data into one CSV cell becomes ambiguous. JSON represents nested structures clearly.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>CSV</code></button><button data-pair=\"p1\"><code>JSON</code></button><button data-pair=\"p2\"><code>header</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">CSV column names</button><button data-pair=\"p1\">Nested API payload</button><button data-pair=\"p0\">Flat analytical table</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which format is standard for one million stock-price rows?",
          "options": [
            "JSON",
            "CSV",
            "Pickle",
            "PNG"
          ],
          "answer": 1,
          "why": "Flat analytical data fits CSV."
        },
        {
          "q": "Which format is common for web APIs?",
          "options": [
            "CSV only",
            "JSON",
            "JPEG",
            "Python bytecode"
          ],
          "answer": 1,
          "why": "JSON is language-independent and supports nested data."
        },
        {
          "q": "Which handles nested inventories more naturally?",
          "options": [
            "CSV",
            "JSON",
            "Plain integer",
            "Binary image"
          ],
          "answer": 1,
          "why": "JSON supports arrays and objects inside each other."
        },
        {
          "q": "Which opens naturally in spreadsheet software?",
          "options": [
            "CSV",
            "Pickle",
            "Regex",
            "Module"
          ],
          "answer": 0,
          "why": "CSV maps directly to rows and columns."
        },
        {
          "q": "Which statement is accurate?",
          "options": [
            "CSV preserves every Python type automatically",
            "JSON can represent booleans and null",
            "JSON cannot contain lists",
            "CSV is always smaller regardless of data"
          ],
          "answer": 1,
          "why": "JSON has explicit basic data types."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Choose the Nested Format",
          "brief": "Inspect a nested project record and print JSON.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "JSON"
            },
            {
              "type": "sourceIncludes",
              "value": "isinstance",
              "message": "Use isinstance"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: JSON"
          ],
          "id": "u6t10p01"
        },
        {
          "kind": "code",
          "title": "Convert CSV Fields",
          "brief": "Read a numeric CSV field, convert it to int and print the increased score.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha\n95"
            },
            {
              "type": "sourceIncludes",
              "value": "int(score)",
              "message": "Use int(score)"
            },
            {
              "type": "sourceIncludes",
              "value": "csv.reader",
              "message": "Use csv.reader"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Asha"
          ],
          "id": "u6t10p02"
        }
      ]
    },
    {
      "id": "u6t11",
      "title": "Binary Files and Byte Strings",
      "summary": "Read and write raw byte data using rb, wb and ab modes, then encode or decode text deliberately.",
      "notebookLM": "",
      "notes": "<h4>Binary Files and Byte Strings</h4><p>Read and write raw byte data using rb, wb and ab modes, then encode or decode text deliberately.</p><h4>The real-world analogy</h4><p>Text mode asks Python to translate symbols; binary mode handles the sealed raw package exactly as stored.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Encode text</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Write bytes</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Decode bytes</text></svg><h4>Core ideas</h4><ul><li>Binary modes add b to the access mode.</li><li>A byte string can be written as b&quot;text&quot;.</li><li>Reading in rb mode returns a bytes object.</li><li>decode converts known text bytes to a Unicode string.</li></ul><h4>Worked example</h4><pre><code>with open(&quot;data.bin&quot;, &quot;wb&quot;) as file:\n    file.write(&quot;Python&quot;.encode(&quot;utf-8&quot;))\nwith open(&quot;data.bin&quot;, &quot;rb&quot;) as file:\n    raw = file.read()\nprint(raw.decode(&quot;utf-8&quot;))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>with open(&quot;data.bin&quot;, &quot;wb&quot;) as file:\n    file.write(&quot;Python&quot;.encode(&quot;utf-8&quot;))\nwith open(&quot;data.bin&quot;, &quot;rb&quot;) as file:\n    raw = file.read()\nprint(raw.decode(&quot;utf-8&quot;))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Python</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>with open(&quot;image.jpg&quot;, &quot;r&quot;) as file:\n    data = file.read()</code></pre><p class=\"w__why\">Images should be opened in binary mode because their bytes are not ordinary text.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>wb</code></button><button data-pair=\"p1\"><code>rb</code></button><button data-pair=\"p2\"><code>decode</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Bytes to text</button><button data-pair=\"p1\">Read bytes</button><button data-pair=\"p0\">Write bytes</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which mode reads an image?",
          "options": [
            "r",
            "rb",
            "w",
            "a"
          ],
          "answer": 1,
          "why": "Images require binary mode."
        },
        {
          "q": "What does b\"Secret\" create?",
          "options": [
            "Boolean",
            "Byte string",
            "Backup",
            "Binary file automatically"
          ],
          "answer": 1,
          "why": "The b prefix creates bytes."
        },
        {
          "q": "What type does rb read return?",
          "options": [
            "str",
            "bytes",
            "dict",
            "float"
          ],
          "answer": 1,
          "why": "Binary reads produce bytes."
        },
        {
          "q": "Which converts bytes containing UTF-8 text to str?",
          "options": [
            "encode",
            "decode",
            "dump",
            "loads"
          ],
          "answer": 1,
          "why": "Decoding interprets bytes using an encoding."
        },
        {
          "q": "Which mode appends raw bytes?",
          "options": [
            "ab",
            "ba",
            "rw",
            "ra"
          ],
          "answer": 0,
          "why": "ab means append binary."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Write and Decode Bytes",
          "brief": "Write Python as UTF-8 bytes and decode it after reading.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Python"
            },
            {
              "type": "sourceIncludes",
              "value": "\"wb\"",
              "message": "Use \"wb\""
            },
            {
              "type": "sourceIncludes",
              "value": "\"rb\"",
              "message": "Use \"rb\""
            },
            {
              "type": "sourceIncludes",
              "value": ".decode",
              "message": "Use .decode"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Python"
          ],
          "id": "u6t11p01"
        },
        {
          "kind": "code",
          "title": "Append Binary Data",
          "brief": "Write AB, append CD in binary mode and print the decoded result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ABCD"
            },
            {
              "type": "sourceIncludes",
              "value": "b\"AB\"",
              "message": "Use b\"AB\""
            },
            {
              "type": "sourceIncludes",
              "value": "\"ab\"",
              "message": "Use \"ab\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ABCD"
          ],
          "id": "u6t11p02"
        }
      ]
    },
    {
      "id": "u6t12",
      "title": "Object Serialization with pickle and Its Security Boundary",
      "summary": "Serialize Python objects to binary files, restore them, and understand why untrusted pickle data must never be loaded.",
      "notebookLM": "",
      "notes": "<h4>Object Serialization with pickle and Its Security Boundary</h4><p>Serialize Python objects to binary files, restore them, and understand why untrusted pickle data must never be loaded.</p><h4>The real-world analogy</h4><p>Serialization freezes a complex object for storage; deserialization thaws it back into a live object.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Live object</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">pickle bytes</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Restored object</text></svg><h4>Core ideas</h4><ul><li>pickle.dump serializes an object into a binary file.</li><li>pickle.load reconstructs the object.</li><li>Pickle is Python-specific and can preserve complex objects.</li><li>Loading untrusted pickle can execute malicious code.</li></ul><h4>Worked example</h4><pre><code>import pickle\nstate = {&quot;level&quot;: 42, &quot;items&quot;: [&quot;sword&quot;, &quot;shield&quot;]}\nwith open(&quot;state.pkl&quot;, &quot;wb&quot;) as file:\n    pickle.dump(state, file)\nwith open(&quot;state.pkl&quot;, &quot;rb&quot;) as file:\n    restored = pickle.load(file)\nprint(restored[&quot;level&quot;])</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import pickle\nstate = {&quot;level&quot;: 42, &quot;items&quot;: [&quot;sword&quot;, &quot;shield&quot;]}\nwith open(&quot;state.pkl&quot;, &quot;wb&quot;) as file:\n    pickle.dump(state, file)\nwith open(&quot;state.pkl&quot;, &quot;rb&quot;) as file:\n    restored = pickle.load(file)\nprint(restored[&quot;level&quot;])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">42</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>with open(downloaded_file, &quot;rb&quot;) as file:\n    data = pickle.load(file)</code></pre><p class=\"w__why\">Never unpickle data from an untrusted or unauthenticated source because loading may execute code.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>serialization</code></button><button data-pair=\"p1\"><code>deserialization</code></button><button data-pair=\"p2\"><code>JSON</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Safer interchange format</button><button data-pair=\"p1\">Bytes to object</button><button data-pair=\"p0\">Object to bytes</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What is serialization?",
          "options": [
            "Sorting data",
            "Converting an object to storable bytes",
            "Deleting memory",
            "Reading HTML"
          ],
          "answer": 1,
          "why": "Serialization creates a transferable representation."
        },
        {
          "q": "Which module serializes Python objects?",
          "options": [
            "pickle",
            "calendar",
            "re",
            "pathlib"
          ],
          "answer": 0,
          "why": "pickle is built for Python object serialization."
        },
        {
          "q": "Which modes are used with pickle files?",
          "options": [
            "r and w",
            "rb and wb",
            "a only",
            "text only"
          ],
          "answer": 1,
          "why": "Pickle works with binary streams."
        },
        {
          "q": "What is the major risk?",
          "options": [
            "Slow printing",
            "Untrusted pickle can execute code",
            "Cannot hold lists",
            "Only works with strings"
          ],
          "answer": 1,
          "why": "pickle.load trusts reconstruction instructions."
        },
        {
          "q": "Which is preferred for exchanging ordinary data across systems?",
          "options": [
            "Untrusted pickle",
            "JSON",
            "Memory addresses",
            "Python repr only"
          ],
          "answer": 1,
          "why": "JSON is language-neutral and safer for data interchange."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Pickle a Game State",
          "brief": "Serialize a dictionary and print its level after loading.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "42"
            },
            {
              "type": "sourceIncludes",
              "value": "import pickle",
              "message": "Use import pickle"
            },
            {
              "type": "sourceIncludes",
              "value": "pickle.dump",
              "message": "Use pickle.dump"
            },
            {
              "type": "sourceIncludes",
              "value": "pickle.load",
              "message": "Use pickle.load"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 42"
          ],
          "id": "u6t12p01"
        },
        {
          "kind": "code",
          "title": "Preserve a Custom List",
          "brief": "Pickle a movie list, restore it and print its first item.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Arrival"
            },
            {
              "type": "sourceIncludes",
              "value": "\"wb\"",
              "message": "Use \"wb\""
            },
            {
              "type": "sourceIncludes",
              "value": "\"rb\"",
              "message": "Use \"rb\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Arrival"
          ],
          "id": "u6t12p02"
        }
      ]
    },
    {
      "id": "u6t13",
      "title": "Revision Checkpoint 2 - Structured and Binary Data",
      "summary": "Choose CSV, JSON, bytes or pickle based on data shape, portability and trust boundaries.",
      "notebookLM": "",
      "notes": "<h4>Revision Checkpoint 2 - Structured and Binary Data</h4><p>Choose CSV, JSON, bytes or pickle based on data shape, portability and trust boundaries.</p><h4>The real-world analogy</h4><p>A logistics team selects a spreadsheet, labelled package, raw container or frozen Python object for each delivery.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Inspect data</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Choose format</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Validate trust</text></svg><h4>Core ideas</h4><ul><li>CSV handles flat rows.</li><li>JSON handles portable nested records.</li><li>Binary mode preserves raw bytes.</li><li>Pickle is powerful but restricted to trusted sources.</li></ul><h4>Worked example</h4><pre><code>import json\ndata = {&quot;student&quot;: &quot;Asha&quot;, &quot;scores&quot;: [90, 95]}\ntext = json.dumps(data)\nprint(json.loads(text)[&quot;scores&quot;][1])</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import json\ndata = {&quot;student&quot;: &quot;Asha&quot;, &quot;scores&quot;: [90, 95]}\ntext = json.dumps(data)\nprint(json.loads(text)[&quot;scores&quot;][1])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">95</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>pickle.load(open(&quot;email_attachment.pkl&quot;, &quot;rb&quot;))</code></pre><p class=\"w__why\">The source is untrusted. Do not load it with pickle.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>CSV</code></button><button data-pair=\"p1\"><code>JSON</code></button><button data-pair=\"p2\"><code>pickle</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Trusted Python object</button><button data-pair=\"p1\">Portable tree</button><button data-pair=\"p0\">Flat table</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which format should carry a nested API response?",
          "options": [
            "CSV",
            "JSON",
            "Raw JPEG",
            "Plain module"
          ],
          "answer": 1,
          "why": "JSON preserves nested key-value data."
        },
        {
          "q": "Which mode is required for pickle.dump?",
          "options": [
            "w",
            "wb",
            "r",
            "a"
          ],
          "answer": 1,
          "why": "Pickle writes bytes."
        },
        {
          "q": "What does csv.reader produce per row?",
          "options": [
            "List of strings",
            "Class instance",
            "Bytes only",
            "JSON object"
          ],
          "answer": 0,
          "why": "Basic CSV fields are strings."
        },
        {
          "q": "Which function converts JSON text to Python?",
          "options": [
            "dumps",
            "loads",
            "writerow",
            "decode only"
          ],
          "answer": 1,
          "why": "loads parses a string."
        },
        {
          "q": "Which source is safe to unpickle?",
          "options": [
            "Unknown email attachment",
            "A file you created and controlled",
            "Random website download",
            "Public chat upload"
          ],
          "answer": 1,
          "why": "Only trusted pickle sources should be loaded."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "JSON Nested Score",
          "brief": "Round-trip a nested score record and print the second score.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "95"
            },
            {
              "type": "sourceIncludes",
              "value": "json.dumps",
              "message": "Use json.dumps"
            },
            {
              "type": "sourceIncludes",
              "value": "json.loads",
              "message": "Use json.loads"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 95"
          ],
          "id": "u6t13p01"
        },
        {
          "kind": "code",
          "title": "CSV Summary",
          "brief": "Write two student rows and print the total of their scores.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "170"
            },
            {
              "type": "sourceIncludes",
              "value": "csv.writer",
              "message": "Use csv.writer"
            },
            {
              "type": "sourceIncludes",
              "value": "next(reader)",
              "message": "Use next(reader)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 170"
          ],
          "id": "u6t13p02"
        },
        {
          "kind": "code",
          "title": "Binary Round Trip",
          "brief": "Write a Unicode word as UTF-8 bytes and decode it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Python"
            },
            {
              "type": "sourceIncludes",
              "value": "encode",
              "message": "Use encode"
            },
            {
              "type": "sourceIncludes",
              "value": "decode",
              "message": "Use decode"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Python"
          ],
          "id": "u6t13p03"
        }
      ]
    },
    {
      "id": "u6t14",
      "title": "Error Types and Reading Tracebacks",
      "summary": "Distinguish syntax, runtime and logical errors, then read a traceback from the bottom upward.",
      "notebookLM": "",
      "notes": "<h4>Error Types and Reading Tracebacks</h4><p>Distinguish syntax, runtime and logical errors, then read a traceback from the bottom upward.</p><h4>The real-world analogy</h4><p>Bad grammar stops a recipe before cooking, a broken oven interrupts it, and salt instead of sugar produces a wrong result without a crash.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Classify error</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Read bottom line</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Inspect source line</text></svg><h4>Core ideas</h4><ul><li>Syntax errors break Python grammar before execution.</li><li>Runtime errors, also called exceptions, occur during execution.</li><li>Logical errors run successfully but produce incorrect behaviour.</li><li>The final traceback line normally names the exception and explains it.</li></ul><h4>Worked example</h4><pre><code>numbers = [10, 20]\ntry:\n    print(numbers[5])\nexcept IndexError as error:\n    print(type(error).__name__)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>numbers = [10, 20]\ntry:\n    print(numbers[5])\nexcept IndexError as error:\n    print(type(error).__name__)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">IndexError</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>average = score1 + score2 / 2</code></pre><p class=\"w__why\">This is a logical error when the intended formula is (score1 + score2) / 2.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>SyntaxError</code></button><button data-pair=\"p1\"><code>Exception</code></button><button data-pair=\"p2\"><code>Logical error</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Wrong result</button><button data-pair=\"p1\">Runtime failure</button><button data-pair=\"p0\">Invalid grammar</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "A missing closing quote causes which category?",
          "options": [
            "Logical",
            "Syntax",
            "Runtime only",
            "Network"
          ],
          "answer": 1,
          "why": "Python cannot parse the source."
        },
        {
          "q": "Division by zero is normally what?",
          "options": [
            "Syntax error",
            "Runtime exception",
            "Correct logic",
            "Import alias"
          ],
          "answer": 1,
          "why": "The program starts but fails at the operation."
        },
        {
          "q": "A program returns the wrong average without crashing. What is it?",
          "options": [
            "Logical error",
            "Syntax error",
            "File mode",
            "Decorator"
          ],
          "answer": 0,
          "why": "The underlying logic is wrong."
        },
        {
          "q": "Where should a beginner look first in a traceback?",
          "options": [
            "Only the first line",
            "The final exception line",
            "The file icon",
            "The keyboard"
          ],
          "answer": 1,
          "why": "The bottom identifies the error type and message."
        },
        {
          "q": "What does a traceback line number provide?",
          "options": [
            "Internet speed",
            "A location to inspect",
            "The correct answer",
            "A module download"
          ],
          "answer": 1,
          "why": "It points toward the statement involved in the failure."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Catch and Name an Index Error",
          "brief": "Trigger an out-of-range access safely and print the exception class name.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "IndexError"
            },
            {
              "type": "sourceIncludes",
              "value": "except IndexError",
              "message": "Use except IndexError"
            },
            {
              "type": "sourceIncludes",
              "value": "type(error).__name__",
              "message": "Use type(error).__name__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: IndexError"
          ],
          "id": "u6t14p01"
        },
        {
          "kind": "code",
          "title": "Repair the Average",
          "brief": "Calculate the correct average of 80 and 100 and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "90.0"
            },
            {
              "type": "sourceIncludes",
              "value": "(score1 + score2) / 2",
              "message": "Use (score1 + score2) / 2"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 90.0"
          ],
          "id": "u6t14p02"
        }
      ]
    },
    {
      "id": "u6t15",
      "title": "Debugging with Print Statements and Breakpoints",
      "summary": "Trace values with diagnostic output and understand how a visual debugger pauses execution for inspection.",
      "notebookLM": "",
      "notes": "<h4>Debugging with Print Statements and Breakpoints</h4><p>Trace values with diagnostic output and understand how a visual debugger pauses execution for inspection.</p><h4>The real-world analogy</h4><p>A detective follows breadcrumbs and pauses a video frame-by-frame to locate the exact moment something changed.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Set checkpoint</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Inspect values</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Step forward</text></svg><h4>Core ideas</h4><ul><li>Print debugging reveals intermediate values.</li><li>A breakpoint pauses execution before or at a selected line.</li><li>Step Over runs one statement at a time.</li><li>NameError, TypeError, IndexError and KeyError are common beginner clues.</li></ul><h4>Worked example</h4><pre><code>def total_with_tax(price, rate):\n    print(f&quot;DEBUG price={price}&quot;)\n    tax = price * rate\n    print(f&quot;DEBUG tax={tax}&quot;)\n    return price + tax\nprint(total_with_tax(100, 0.05))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>def total_with_tax(price, rate):\n    print(f&quot;DEBUG price={price}&quot;)\n    tax = price * rate\n    print(f&quot;DEBUG tax={tax}&quot;)\n    return price + tax\nprint(total_with_tax(100, 0.05))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">DEBUG price=100</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>except Exception:\n    pass</code></pre><p class=\"w__why\">Silently swallowing every exception hides evidence and makes debugging much harder.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>breadcrumb</code></button><button data-pair=\"p1\"><code>breakpoint</code></button><button data-pair=\"p2\"><code>step over</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Run next line</button><button data-pair=\"p1\">Pause execution</button><button data-pair=\"p0\">Diagnostic print</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What is print debugging?",
          "options": [
            "Printing code on paper",
            "Displaying intermediate values",
            "Installing a module",
            "Deleting errors"
          ],
          "answer": 1,
          "why": "Breadcrumbs show where values change."
        },
        {
          "q": "What is a breakpoint?",
          "options": [
            "A syntax error",
            "A deliberate pause location",
            "A deleted variable",
            "A file mode"
          ],
          "answer": 1,
          "why": "The debugger suspends execution there."
        },
        {
          "q": "What does Step Over do?",
          "options": [
            "Runs the next line",
            "Deletes the next line",
            "Skips all code",
            "Restarts Python"
          ],
          "answer": 0,
          "why": "It advances execution one statement."
        },
        {
          "q": "Which error often signals a misspelled variable?",
          "options": [
            "NameError",
            "FileNotFoundError",
            "ZeroDivisionError",
            "EOFError"
          ],
          "answer": 0,
          "why": "Python cannot resolve the name."
        },
        {
          "q": "Which error indicates a missing dictionary key?",
          "options": [
            "IndexError",
            "KeyError",
            "TypeError",
            "IndentationError"
          ],
          "answer": 1,
          "why": "KeyError is raised for absent keys accessed directly."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Leave Debug Breadcrumbs",
          "brief": "Print the starting price, tax and final total for a 5% tax.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "DEBUG price=100\nDEBUG tax=5.0\n105.0"
            },
            {
              "type": "sourceIncludes",
              "value": "DEBUG",
              "message": "Use DEBUG"
            },
            {
              "type": "sourceIncludes",
              "value": "return price + tax",
              "message": "Use return price + tax"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: DEBUG price=100"
          ],
          "id": "u6t15p01"
        },
        {
          "kind": "code",
          "title": "Diagnose a Dictionary Lookup",
          "brief": "Catch a missing key and print a clear diagnostic message.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "DEBUG missing key: score"
            },
            {
              "type": "sourceIncludes",
              "value": "except KeyError",
              "message": "Use except KeyError"
            },
            {
              "type": "sourceIncludes",
              "value": "error.args",
              "message": "Use error.args"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: DEBUG missing key: score"
          ],
          "id": "u6t15p02"
        }
      ]
    },
    {
      "id": "u6t16",
      "title": "Exception Handling with try and except",
      "summary": "Catch expected runtime failures so the program can respond gracefully instead of terminating.",
      "notebookLM": "",
      "notes": "<h4>Exception Handling with try and except</h4><p>Catch expected runtime failures so the program can respond gracefully instead of terminating.</p><h4>The real-world analogy</h4><p>An airbag does not prevent an accident, but it limits the damage and lets the system respond safely.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Try risky code</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Catch exception</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Continue program</text></svg><h4>Core ideas</h4><ul><li>Place risky operations inside try.</li><li>The matching except block handles the failure.</li><li>Catch specific exception types whenever possible.</li><li>Execution can continue after the handled block.</li></ul><h4>Worked example</h4><pre><code>try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(&quot;Cannot divide by zero&quot;)\nprint(&quot;Program continues&quot;)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(&quot;Cannot divide by zero&quot;)\nprint(&quot;Done&quot;)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Cannot divide by zero</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>try:\n    value = int(text)\nexcept:\n    pass</code></pre><p class=\"w__why\">A bare except with no response hides all failures. Catch a specific type and provide useful feedback.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>try</code></button><button data-pair=\"p1\"><code>except</code></button><button data-pair=\"p2\"><code>exception</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Runtime error object</button><button data-pair=\"p1\">Recovery path</button><button data-pair=\"p0\">Risky operation</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What is the purpose of exception handling?",
          "options": [
            "Make code ten times faster",
            "Prevent expected runtime failures from crashing the program",
            "Fix every logical error",
            "Encrypt files"
          ],
          "answer": 1,
          "why": "Handling provides a recovery path."
        },
        {
          "q": "Which block executes when its matching error occurs?",
          "options": [
            "try again automatically",
            "except",
            "import",
            "class"
          ],
          "answer": 1,
          "why": "except handles the exception."
        },
        {
          "q": "Should try contain the entire program?",
          "options": [
            "Always",
            "Usually only the risky section",
            "Never any code",
            "Only comments"
          ],
          "answer": 1,
          "why": "Small try blocks make failures clearer."
        },
        {
          "q": "Which handler is most precise for 10 / 0?",
          "options": [
            "except Exception only",
            "except ZeroDivisionError",
            "except KeyError",
            "except FileNotFoundError"
          ],
          "answer": 1,
          "why": "It names the exact expected failure."
        },
        {
          "q": "What happens after a handled exception block?",
          "options": [
            "Python must shut down",
            "Execution can continue",
            "The file is deleted",
            "All variables vanish"
          ],
          "answer": 1,
          "why": "Handled exceptions do not necessarily terminate the program."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Safe Division",
          "brief": "Catch division by zero and print a friendly message followed by Done.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Cannot divide by zero\nDone"
            },
            {
              "type": "sourceIncludes",
              "value": "try:",
              "message": "Use try:"
            },
            {
              "type": "sourceIncludes",
              "value": "except ZeroDivisionError",
              "message": "Use except ZeroDivisionError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Cannot divide by zero"
          ],
          "id": "u6t16p01"
        },
        {
          "kind": "code",
          "title": "Safe Integer Conversion",
          "brief": "Convert 42 successfully and handle invalid text separately.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "42\nInvalid integer"
            },
            {
              "type": "sourceIncludes",
              "value": "except ValueError",
              "message": "Use except ValueError"
            },
            {
              "type": "sourceIncludes",
              "value": "int(value)",
              "message": "Use int(value)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 42"
          ],
          "id": "u6t16p02"
        }
      ]
    },
    {
      "id": "u6t17",
      "title": "Multiple Exceptions and Exception Arguments",
      "summary": "Handle different failure types separately and inspect the exception object using as.",
      "notebookLM": "",
      "notes": "<h4>Multiple Exceptions and Exception Arguments</h4><p>Handle different failure types separately and inspect the exception object using as.</p><h4>The real-world analogy</h4><p>A hospital routes burns, fractures and allergies to different specialists while recording the details of each case.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Identify type</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Run matching handler</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Inspect message</text></svg><h4>Core ideas</h4><ul><li>Multiple except blocks can follow one try.</li><li>A tuple can catch several related types together.</li><li>The as keyword binds the exception object.</li><li>Specific handlers should appear before broad handlers.</li></ul><h4>Worked example</h4><pre><code>values = [&quot;0&quot;, &quot;abc&quot;, &quot;4&quot;]\nfor value in values:\n    try:\n        print(20 // int(value))\n    except ZeroDivisionError:\n        print(&quot;zero&quot;)\n    except ValueError as error:\n        print(type(error).__name__)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>values = [&quot;0&quot;, &quot;abc&quot;, &quot;4&quot;]\nfor value in values:\n    try:\n        print(20 // int(value))\n    except ZeroDivisionError:\n        print(&quot;zero&quot;)\n    except ValueError as error:\n        print(type(error).__name__)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">zero</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>except Exception as e:\n    print(&quot;failed&quot;)\nexcept ValueError:\n    print(&quot;bad value&quot;)</code></pre><p class=\"w__why\">The broad handler comes first, so the specific ValueError block can never be reached.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>as e</code></button><button data-pair=\"p1\"><code>specific except</code></button><button data-pair=\"p2\"><code>tuple</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Catch selected types together</button><button data-pair=\"p1\">Target one failure</button><button data-pair=\"p0\">Bind error object</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does int(\"abc\") raise?",
          "options": [
            "TypeError",
            "ValueError",
            "IndexError",
            "KeyError"
          ],
          "answer": 1,
          "why": "The string cannot be interpreted as an integer value."
        },
        {
          "q": "How is an exception object captured?",
          "options": [
            "catch e",
            "as e",
            "into e",
            "with e"
          ],
          "answer": 1,
          "why": "The as keyword binds the object."
        },
        {
          "q": "Which error is raised for a missing file?",
          "options": [
            "FileNotFoundError",
            "ValueError",
            "NameError",
            "RegexError"
          ],
          "answer": 0,
          "why": "The path cannot be opened."
        },
        {
          "q": "Which ordering is recommended?",
          "options": [
            "Broad before specific",
            "Specific before broad",
            "Random order",
            "No handlers"
          ],
          "answer": 1,
          "why": "A broad handler would otherwise swallow specific cases."
        },
        {
          "q": "How can ValueError and TypeError share one handler?",
          "options": [
            "except ValueError and TypeError",
            "except (ValueError, TypeError)",
            "except [ValueError, TypeError]",
            "except all"
          ],
          "answer": 1,
          "why": "Exception tuples group selected classes."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Route Two Error Types",
          "brief": "Process zero, invalid text and a valid number with separate handlers.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "zero\nValueError\n5"
            },
            {
              "type": "sourceIncludes",
              "value": "except ZeroDivisionError",
              "message": "Use except ZeroDivisionError"
            },
            {
              "type": "sourceIncludes",
              "value": "except ValueError as error",
              "message": "Use except ValueError as error"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: zero"
          ],
          "id": "u6t17p01"
        },
        {
          "kind": "code",
          "title": "Catch a Tuple of Errors",
          "brief": "Use one handler for a TypeError and ValueError and print their class names.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "TypeError\nValueError"
            },
            {
              "type": "sourceIncludes",
              "value": "except (TypeError, ValueError)",
              "message": "Use except (TypeError, ValueError)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: TypeError"
          ],
          "id": "u6t17p02"
        }
      ]
    },
    {
      "id": "u6t18",
      "title": "The Full Structure: else, finally and Catch-Alls",
      "summary": "Use else for success-only work, finally for guaranteed cleanup and broad handlers only as a final safety boundary.",
      "notebookLM": "",
      "notes": "<h4>The Full Structure: else, finally and Catch-Alls</h4><p>Use else for success-only work, finally for guaranteed cleanup and broad handlers only as a final safety boundary.</p><h4>The real-world analogy</h4><p>A transaction has a success desk, an emergency desk and a cleanup crew that works in every outcome.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Try operation</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Success or handler</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Always clean up</text></svg><h4>Core ideas</h4><ul><li>else runs only when try completes without an exception.</li><li>finally runs regardless of success, exception or return.</li><li>finally is ideal for resource cleanup.</li><li>except Exception can be a final catch-all but may hide bugs if overused.</li></ul><h4>Worked example</h4><pre><code>try:\n    number = int(&quot;8&quot;)\nexcept ValueError:\n    print(&quot;invalid&quot;)\nelse:\n    print(number * 2)\nfinally:\n    print(&quot;cleanup&quot;)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>try:\n    number = int(&quot;8&quot;)\nexcept ValueError:\n    print(&quot;invalid&quot;)\nelse:\n    print(number * 2)\nfinally:\n    print(&quot;cleanup&quot;)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">16</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>try:\n    risky()\nexcept Exception:\n    print(&quot;Something failed&quot;)</code></pre><p class=\"w__why\">A catch-all with no logging or re-raising can hide the original bug and its context.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>else</code></button><button data-pair=\"p1\"><code>finally</code></button><button data-pair=\"p2\"><code>Exception</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Broad runtime parent</button><button data-pair=\"p1\">Always executes</button><button data-pair=\"p0\">Success only</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "When does else run?",
          "options": [
            "Only after an exception",
            "Only after a successful try",
            "Before try",
            "Never"
          ],
          "answer": 1,
          "why": "else is the success path."
        },
        {
          "q": "When does finally run?",
          "options": [
            "Only on success",
            "Only on failure",
            "In almost every exit path",
            "Only for files"
          ],
          "answer": 2,
          "why": "finally is guaranteed cleanup logic."
        },
        {
          "q": "What is a common finally use?",
          "options": [
            "Sorting a list",
            "Closing a resource",
            "Defining a class",
            "Writing regex"
          ],
          "answer": 1,
          "why": "Cleanup belongs in finally."
        },
        {
          "q": "Why use except Exception carefully?",
          "options": [
            "It is invalid syntax",
            "It can conceal unexpected bugs",
            "It only catches syntax errors",
            "It deletes tracebacks automatically"
          ],
          "answer": 1,
          "why": "Broad handlers reduce diagnostic visibility."
        },
        {
          "q": "Which order is syntactically correct?",
          "options": [
            "try, else, except, finally",
            "try, except, else, finally",
            "except, try, finally",
            "finally, try"
          ],
          "answer": 1,
          "why": "Handlers precede optional else and finally."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Success and Cleanup Paths",
          "brief": "Use else to print 16 and finally to print cleanup.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "16\ncleanup"
            },
            {
              "type": "sourceIncludes",
              "value": "else:",
              "message": "Use else:"
            },
            {
              "type": "sourceIncludes",
              "value": "finally:",
              "message": "Use finally:"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 16"
          ],
          "id": "u6t18p01"
        },
        {
          "kind": "code",
          "title": "Failure and Cleanup Paths",
          "brief": "Trigger a conversion error, print invalid, and always print cleanup.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "invalid\ncleanup"
            },
            {
              "type": "sourceIncludes",
              "value": "except ValueError",
              "message": "Use except ValueError"
            },
            {
              "type": "sourceIncludes",
              "value": "finally:",
              "message": "Use finally:"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: invalid"
          ],
          "id": "u6t18p02"
        }
      ]
    },
    {
      "id": "u6t19",
      "title": "Raising, Custom Exceptions and Assertions",
      "summary": "Enforce application rules with raise, define domain-specific exception classes and use assertions for internal development checks.",
      "notebookLM": "",
      "notes": "<h4>Raising, Custom Exceptions and Assertions</h4><p>Enforce application rules with raise, define domain-specific exception classes and use assertions for internal development checks.</p><h4>The real-world analogy</h4><p>A security guard can reject an invalid request deliberately and issue a precise incident category.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Validate rule</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Raise exception</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Handle meaningfully</text></svg><h4>Core ideas</h4><ul><li>raise manually triggers an exception.</li><li>Custom exceptions inherit from Exception.</li><li>A descriptive custom type communicates domain meaning.</li><li>assert raises AssertionError when a development assumption is false.</li></ul><h4>Worked example</h4><pre><code>class InvalidAgeError(Exception):\n    pass\ndef register(age):\n    if age &lt; 18:\n        raise InvalidAgeError(&quot;Must be 18+&quot;)\n    return &quot;Registered&quot;\ntry:\n    print(register(16))\nexcept InvalidAgeError as error:\n    print(error)</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>class InvalidAgeError(Exception):\n    pass\ndef register(age):\n    if age &lt; 18:\n        raise InvalidAgeError(&quot;Must be 18+&quot;)\n    return &quot;Registered&quot;\ntry:\n    print(register(16))\nexcept InvalidAgeError as error:\n    print(error)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">Must be 18+</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>assert user_input != &quot;&quot;, &quot;Input required&quot;</code></pre><p class=\"w__why\">Assertions can be disabled and should not replace production input validation.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>raise</code></button><button data-pair=\"p1\"><code>custom exception</code></button><button data-pair=\"p2\"><code>assert</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Development sanity check</button><button data-pair=\"p1\">Domain-specific error</button><button data-pair=\"p0\">Trigger failure</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which keyword manually triggers an exception?",
          "options": [
            "throw",
            "raise",
            "push",
            "error"
          ],
          "answer": 1,
          "why": "Python uses raise."
        },
        {
          "q": "What should a custom exception inherit from?",
          "options": [
            "dict",
            "Exception",
            "ABC only",
            "Path"
          ],
          "answer": 1,
          "why": "User-code exceptions normally derive from Exception."
        },
        {
          "q": "What does a failed assert raise?",
          "options": [
            "ValueError",
            "AssertionError",
            "KeyError",
            "ImportError"
          ],
          "answer": 1,
          "why": "assert creates AssertionError."
        },
        {
          "q": "What is the benefit of InvalidAgeError?",
          "options": [
            "Faster arithmetic",
            "Clear domain meaning",
            "Automatic age correction",
            "File encryption"
          ],
          "answer": 1,
          "why": "The type states exactly which business rule failed."
        },
        {
          "q": "Should assert validate hostile user input in production?",
          "options": [
            "Always",
            "No, use explicit validation and raise",
            "Only for email",
            "Only in loops"
          ],
          "answer": 1,
          "why": "Assertions are for internal assumptions and may be disabled."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Create a Custom Age Error",
          "brief": "Raise InvalidAgeError for age 16 and print the message.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Must be 18+"
            },
            {
              "type": "sourceIncludes",
              "value": "class InvalidAgeError(Exception)",
              "message": "Use class InvalidAgeError(Exception)"
            },
            {
              "type": "sourceIncludes",
              "value": "raise InvalidAgeError",
              "message": "Use raise InvalidAgeError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Must be 18+"
          ],
          "id": "u6t19p01"
        },
        {
          "kind": "code",
          "title": "Use an Assertion",
          "brief": "Assert that a discount is between 0 and 1 and catch the failure message.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Discount must be between 0 and 1"
            },
            {
              "type": "sourceIncludes",
              "value": "assert 0 <= discount <= 1",
              "message": "Use assert 0 <= discount <= 1"
            },
            {
              "type": "sourceIncludes",
              "value": "except AssertionError",
              "message": "Use except AssertionError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Discount must be between 0 and 1"
          ],
          "id": "u6t19p02"
        }
      ]
    },
    {
      "id": "u6t20",
      "title": "Revision Checkpoint 3 - Resilient Programs",
      "summary": "Diagnose failures, catch expected exceptions, preserve cleanup and enforce domain rules without hiding bugs.",
      "notebookLM": "",
      "notes": "<h4>Revision Checkpoint 3 - Resilient Programs</h4><p>Diagnose failures, catch expected exceptions, preserve cleanup and enforce domain rules without hiding bugs.</p><h4>The real-world analogy</h4><p>A resilient service records the incident, protects resources, gives useful feedback and keeps valid work running.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Detect</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Recover</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Clean up</text></svg><h4>Core ideas</h4><ul><li>Read tracebacks accurately.</li><li>Catch only expected failures.</li><li>Use else and finally deliberately.</li><li>Raise precise errors for invalid application states.</li></ul><h4>Worked example</h4><pre><code>def divide(text_a, text_b):\n    try:\n        return int(text_a) / int(text_b)\n    except ValueError:\n        return &quot;invalid number&quot;\n    except ZeroDivisionError:\n        return &quot;zero not allowed&quot;\nprint(divide(&quot;10&quot;, &quot;2&quot;))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>def divide(text_a, text_b):\n    try:\n        return int(text_a) / int(text_b)\n    except ValueError:\n        return &quot;invalid number&quot;\n    except ZeroDivisionError:\n        return &quot;zero not allowed&quot;\nprint(divide(&quot;10&quot;, &quot;2&quot;))\nprint(divide(&quot;10&quot;, &quot;0&quot;))\nprint(divide(&quot;x&quot;, &quot;2&quot;))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">5.0</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>except Exception:\n    return None</code></pre><p class=\"w__why\">Returning None for every unknown failure discards diagnostic information and can create later bugs.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>traceback</code></button><button data-pair=\"p1\"><code>specific handler</code></button><button data-pair=\"p2\"><code>finally</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Guaranteed cleanup</button><button data-pair=\"p1\">Expected recovery</button><button data-pair=\"p0\">Failure evidence</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which error should handle int(\"x\")?",
          "options": [
            "ValueError",
            "KeyError",
            "IndexError",
            "FileExistsError"
          ],
          "answer": 0,
          "why": "The text is not a valid integer value."
        },
        {
          "q": "Which clause is best for success-only code?",
          "options": [
            "except",
            "else",
            "finally",
            "raise"
          ],
          "answer": 1,
          "why": "else runs only after a clean try."
        },
        {
          "q": "Which clause guarantees cleanup?",
          "options": [
            "else",
            "finally",
            "match",
            "assert only"
          ],
          "answer": 1,
          "why": "finally runs in success and failure paths."
        },
        {
          "q": "Which error type communicates a business rule best?",
          "options": [
            "A custom Exception subclass",
            "SyntaxError written manually",
            "Bare string",
            "print only"
          ],
          "answer": 0,
          "why": "A custom class provides precise meaning."
        },
        {
          "q": "What should broad Exception handling include?",
          "options": [
            "Silence only",
            "Useful logging and careful placement",
            "No message",
            "Automatic pass"
          ],
          "answer": 1,
          "why": "Broad boundaries need observability."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Build a Resilient Divider",
          "brief": "Handle valid, zero and invalid inputs in one function.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "5.0\nzero not allowed\ninvalid number"
            },
            {
              "type": "sourceIncludes",
              "value": "except ValueError",
              "message": "Use except ValueError"
            },
            {
              "type": "sourceIncludes",
              "value": "except ZeroDivisionError",
              "message": "Use except ZeroDivisionError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 5.0"
          ],
          "id": "u6t20p01"
        },
        {
          "kind": "code",
          "title": "Protect a Resource in finally",
          "brief": "Open a file manually, read it, close it in finally and print its closed state.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Ready\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "finally:",
              "message": "Use finally:"
            },
            {
              "type": "sourceIncludes",
              "value": "file.close()",
              "message": "Use file.close()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Ready"
          ],
          "id": "u6t20p02"
        },
        {
          "kind": "code",
          "title": "Validate with a Custom Error",
          "brief": "Raise ScoreRangeError when score is above 100.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Score must be 0 to 100"
            },
            {
              "type": "sourceIncludes",
              "value": "class ScoreRangeError(Exception)",
              "message": "Use class ScoreRangeError(Exception)"
            },
            {
              "type": "sourceIncludes",
              "value": "raise ScoreRangeError",
              "message": "Use raise ScoreRangeError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Score must be 0 to 100"
          ],
          "id": "u6t20p03"
        }
      ]
    },
    {
      "id": "u6t21",
      "title": "Regular Expressions: Pattern Thinking and the re Module",
      "summary": "Use raw-string patterns with the re module to locate text that follows a rule rather than an exact word.",
      "notebookLM": "",
      "notes": "<h4>Regular Expressions: Pattern Thinking and the re Module</h4><p>Use raw-string patterns with the re module to locate text that follows a rule rather than an exact word.</p><h4>The real-world analogy</h4><p>RegEx is an advanced Find tool that searches for shapes such as phone numbers, dates or emails.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Define pattern</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Search text</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Inspect match</text></svg><h4>Core ideas</h4><ul><li>A regular expression is a search pattern.</li><li>Python provides RegEx through the re module.</li><li>Raw strings such as r&quot;\\d+&quot; keep backslashes literal.</li><li>A Match object exposes found text through group().</li></ul><h4>Worked example</h4><pre><code>import re\ntext = &quot;Order number 4821&quot;\nfound = re.search(r&quot;\\d+&quot;, text)\nprint(found.group())</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\ntext = &quot;Order number 4821&quot;\nfound = re.search(r&quot;\\d+&quot;, text)\nprint(found.group())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">4821</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>pattern = &quot;\\d+&quot;</code></pre><p class=\"w__why\">A normal string may interpret backslash escapes. Raw strings are clearer and safer for RegEx patterns.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>re</code></button><button data-pair=\"p1\"><code>raw string</code></button><button data-pair=\"p2\"><code>group()</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Matched text</button><button data-pair=\"p1\">Literal backslashes</button><button data-pair=\"p0\">Regular-expression module</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What is a regular expression?",
          "options": [
            "A geometry formula",
            "An advanced text pattern",
            "A file mode",
            "A Python class only"
          ],
          "answer": 1,
          "why": "RegEx describes text shapes."
        },
        {
          "q": "Which module provides RegEx?",
          "options": [
            "regex",
            "re",
            "text",
            "match"
          ],
          "answer": 1,
          "why": "Python uses the built-in re module."
        },
        {
          "q": "Why prefix a pattern with r?",
          "options": [
            "Reverse it",
            "Create a raw string",
            "Run it",
            "Read a file"
          ],
          "answer": 1,
          "why": "Raw strings treat backslashes literally."
        },
        {
          "q": "What does group() return on a successful Match object?",
          "options": [
            "The full source file",
            "Matched text",
            "A boolean only",
            "The pattern length"
          ],
          "answer": 1,
          "why": "group() extracts the match."
        },
        {
          "q": "Which is a common RegEx use?",
          "options": [
            "Image rendering",
            "Email validation",
            "Compiling Python",
            "Creating folders"
          ],
          "answer": 1,
          "why": "Patterns can validate structured text."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Find the First Number",
          "brief": "Search Order number 4821 and print the digits.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "4821"
            },
            {
              "type": "sourceIncludes",
              "value": "import re",
              "message": "Use import re"
            },
            {
              "type": "sourceIncludes",
              "value": "re.search",
              "message": "Use re.search"
            },
            {
              "type": "sourceIncludes",
              "value": "r\"\\d+\"",
              "message": "Use r\"\\d+\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 4821"
          ],
          "id": "u6t21p01"
        },
        {
          "kind": "code",
          "title": "Find a Literal Word",
          "brief": "Search for Python inside a sentence and print it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Python"
            },
            {
              "type": "sourceIncludes",
              "value": "re.search",
              "message": "Use re.search"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Python"
          ],
          "id": "u6t21p02"
        }
      ]
    },
    {
      "id": "u6t22",
      "title": "RegEx Language: Sequences, Classes, Quantifiers and Anchors",
      "summary": "Build precise patterns with digit, word and whitespace sequences, custom character classes, repetition rules, anchors and wildcards.",
      "notebookLM": "",
      "notes": "<h4>RegEx Language: Sequences, Classes, Quantifiers and Anchors</h4><p>Build precise patterns with digit, word and whitespace sequences, custom character classes, repetition rules, anchors and wildcards.</p><h4>The real-world analogy</h4><p>Pattern tokens are pieces of a detective kit: categories, counters, boundaries and a wildcard lens.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Choose token</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Set quantity</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Anchor boundary</text></svg><h4>Core ideas</h4><ul><li>\\d matches a digit, \\w a word character and \\s whitespace.</li><li>Square brackets define a custom character class.</li><li>+ means one or more, * zero or more, ? zero or one.</li><li>^ and $ anchor the start and end; . matches almost any character.</li></ul><h4>Worked example</h4><pre><code>import re\nsamples = [&quot;2026&quot;, &quot;26&quot;, &quot;20260&quot;]\npattern = r&quot;^\\d{4}$&quot;\nfor value in samples:\n    print(bool(re.search(pattern, value)))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\nsamples = [&quot;2026&quot;, &quot;26&quot;, &quot;20260&quot;]\npattern = r&quot;^\\d{4}$&quot;\nfor value in samples:\n    print(bool(re.search(pattern, value)))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>pattern = r&quot;\\d{4}&quot;</code></pre><p class=\"w__why\">Without ^ and $, a longer string can still contain four matching digits and pass an intended exact validation.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>\\d</code></button><button data-pair=\"p1\"><code>[A-Z]+</code></button><button data-pair=\"p2\"><code>^...$</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Whole-string boundary</button><button data-pair=\"p1\">One or more capitals</button><button data-pair=\"p0\">One digit</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does \\d match?",
          "options": [
            "Any digit",
            "Any letter",
            "A decimal point only",
            "A directory"
          ],
          "answer": 0,
          "why": "It matches one digit from 0 through 9."
        },
        {
          "q": "What does [aeiou] match?",
          "options": [
            "Any whole word",
            "One listed vowel",
            "Only a digit",
            "A space"
          ],
          "answer": 1,
          "why": "A character class matches one member."
        },
        {
          "q": "What does + mean?",
          "options": [
            "Exactly zero",
            "One or more repetitions",
            "End of string",
            "Literal plus always"
          ],
          "answer": 1,
          "why": "It repeats the previous token one or more times."
        },
        {
          "q": "What does {3,5} mean?",
          "options": [
            "Three to five repetitions",
            "Only character 3 or 5",
            "A dictionary",
            "Start and end"
          ],
          "answer": 0,
          "why": "Curly braces set repetition counts."
        },
        {
          "q": "What do ^ and $ provide together?",
          "options": [
            "Case-insensitivity",
            "Whole-string validation",
            "Grouping",
            "Replacement"
          ],
          "answer": 1,
          "why": "They anchor both boundaries."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Validate Four Digits",
          "brief": "Test 2026, 26 and 20260 against exactly four digits.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "r\"^\\d{4}$\"",
              "message": "Use r\"^\\d{4}$\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t22p01"
        },
        {
          "kind": "code",
          "title": "Extract Uppercase Words",
          "brief": "Find all uppercase words in the sentence.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['API', 'JSON']"
            },
            {
              "type": "sourceIncludes",
              "value": "re.findall",
              "message": "Use re.findall"
            },
            {
              "type": "sourceIncludes",
              "value": "[A-Z]",
              "message": "Use [A-Z]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['API', 'JSON']"
          ],
          "id": "u6t22p02"
        }
      ]
    },
    {
      "id": "u6t23",
      "title": "Searching Text: match, search, findall and finditer",
      "summary": "Choose the correct search function for beginning-only checks, first matches, all matches or memory-efficient iteration.",
      "notebookLM": "",
      "notes": "<h4>Searching Text: match, search, findall and finditer</h4><p>Choose the correct search function for beginning-only checks, first matches, all matches or memory-efficient iteration.</p><h4>The real-world analogy</h4><p>A guard checks the entrance, a detective scans the building, and a search party records every clue.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Select search tool</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Scan text</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Return match data</text></svg><h4>Core ideas</h4><ul><li>re.match checks only the beginning.</li><li>re.search finds the first match anywhere.</li><li>re.findall returns all matched strings in a list.</li><li>re.finditer yields Match objects lazily.</li></ul><h4>Worked example</h4><pre><code>import re\ntext = &quot;User 45, User 99, User 12&quot;\nprint(re.findall(r&quot;\\d+&quot;, text))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\ntext = &quot;User 45, User 99, User 12&quot;\nprint(re.findall(r&quot;\\d+&quot;, text))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[&#x27;45&#x27;, &#x27;99&#x27;, &#x27;12&#x27;]</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>print(re.match(r&quot;\\d+&quot;, &quot;Error 404&quot;).group())</code></pre><p class=\"w__why\">match returns None because digits do not begin the string, so group() raises an error.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>match</code></button><button data-pair=\"p1\"><code>search</code></button><button data-pair=\"p2\"><code>findall</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">All strings</button><button data-pair=\"p1\">First anywhere</button><button data-pair=\"p0\">Beginning only</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which function checks the beginning only?",
          "options": [
            "search",
            "match",
            "findall",
            "sub"
          ],
          "answer": 1,
          "why": "match is anchored to the start."
        },
        {
          "q": "Which scans for the first occurrence anywhere?",
          "options": [
            "search",
            "split",
            "writerow",
            "load"
          ],
          "answer": 0,
          "why": "search scans left to right."
        },
        {
          "q": "Which returns a list of all matches?",
          "options": [
            "findall",
            "match",
            "group",
            "tell"
          ],
          "answer": 0,
          "why": "findall collects matching strings."
        },
        {
          "q": "Which is memory-efficient for millions of Match objects?",
          "options": [
            "read()",
            "finditer",
            "findall always",
            "dumps"
          ],
          "answer": 1,
          "why": "finditer yields matches lazily."
        },
        {
          "q": "What should be checked before calling group()?",
          "options": [
            "Whether the result is not None",
            "File mode",
            "Current date",
            "CSV header"
          ],
          "answer": 0,
          "why": "A failed search returns None."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Extract Every User ID",
          "brief": "Find all numbers in a log string.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['45', '99', '12']"
            },
            {
              "type": "sourceIncludes",
              "value": "re.findall",
              "message": "Use re.findall"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['45', '99', '12']"
          ],
          "id": "u6t23p01"
        },
        {
          "kind": "code",
          "title": "Compare match and search",
          "brief": "Show that match fails but search finds 404.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "None\n404"
            },
            {
              "type": "sourceIncludes",
              "value": "re.match",
              "message": "Use re.match"
            },
            {
              "type": "sourceIncludes",
              "value": "re.search",
              "message": "Use re.search"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: None"
          ],
          "id": "u6t23p02"
        }
      ]
    },
    {
      "id": "u6t24",
      "title": "Advanced RegEx Manipulation: sub, split and Groups",
      "summary": "Replace sensitive patterns, split inconsistent delimiters and extract meaningful subparts with capturing groups.",
      "notebookLM": "",
      "notes": "<h4>Advanced RegEx Manipulation: sub, split and Groups</h4><p>Replace sensitive patterns, split inconsistent delimiters and extract meaningful subparts with capturing groups.</p><h4>The real-world analogy</h4><p>An automated editor can redact values, chop messy lists and place each captured piece into a labelled folder.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Find pattern</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Transform or group</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Return clean data</text></svg><h4>Core ideas</h4><ul><li>re.sub replaces every selected match.</li><li>re.split separates text using a pattern.</li><li>Parentheses create capturing groups.</li><li>group(0) is the full match; numbered groups return captured parts.</li></ul><h4>Worked example</h4><pre><code>import re\ntext = &quot;PIN 8493, backup 1122&quot;\nprint(re.sub(r&quot;\\d{4}&quot;, &quot;****&quot;, text))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\ntext = &quot;PIN 8493, backup 1122&quot;\nprint(re.sub(r&quot;\\d{4}&quot;, &quot;****&quot;, text))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">PIN ****, backup ****</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>re.split(r&quot;-&quot;, &quot;apple-banana_orange&quot;)</code></pre><p class=\"w__why\">Splitting only on dashes leaves the underscore case. Use a class such as [-_].</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>sub</code></button><button data-pair=\"p1\"><code>split</code></button><button data-pair=\"p2\"><code>group(1)</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">First captured part</button><button data-pair=\"p1\">Pattern-based chopping</button><button data-pair=\"p0\">Search and replace</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does re.sub do?",
          "options": [
            "Subtract numbers",
            "Replace pattern matches",
            "Create a module",
            "Move a cursor"
          ],
          "answer": 1,
          "why": "sub means substitute."
        },
        {
          "q": "Why is re.split stronger than str.split for messy delimiters?",
          "options": [
            "It supports patterns",
            "It encrypts results",
            "It reads files",
            "It returns bytes"
          ],
          "answer": 0,
          "why": "A single RegEx can cover several delimiters."
        },
        {
          "q": "What do parentheses create?",
          "options": [
            "A file",
            "Capturing groups",
            "Only optional text",
            "A dictionary"
          ],
          "answer": 1,
          "why": "Groups preserve submatches."
        },
        {
          "q": "What does group(0) return?",
          "options": [
            "First capture only",
            "Full match",
            "No text",
            "Pattern source"
          ],
          "answer": 1,
          "why": "Group zero represents the whole match."
        },
        {
          "q": "Which pattern splits on dash or underscore?",
          "options": [
            "r\"-_\"",
            "r\"[-_]\"",
            "r\"(-_)\" only",
            "r\"dash\""
          ],
          "answer": 1,
          "why": "The character class selects either delimiter."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Redact Four-Digit Secrets",
          "brief": "Replace both PIN-like values with ****.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "PIN ****, backup ****"
            },
            {
              "type": "sourceIncludes",
              "value": "re.sub",
              "message": "Use re.sub"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: PIN ****, backup ****"
          ],
          "id": "u6t24p01"
        },
        {
          "kind": "code",
          "title": "Capture Quantity and Item",
          "brief": "Extract 50 and Apples using two groups.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "50\nApples"
            },
            {
              "type": "sourceIncludes",
              "value": "group(1)",
              "message": "Use group(1)"
            },
            {
              "type": "sourceIncludes",
              "value": "group(2)",
              "message": "Use group(2)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 50"
          ],
          "id": "u6t24p02"
        }
      ]
    },
    {
      "id": "u6t25",
      "title": "Real-World Validation: Phone, Email, ZIP and Date Patterns",
      "summary": "Create anchored validators that accept only complete strings matching a required business format.",
      "notebookLM": "",
      "notes": "<h4>Real-World Validation: Phone, Email, ZIP and Date Patterns</h4><p>Create anchored validators that accept only complete strings matching a required business format.</p><h4>The real-world analogy</h4><p>A form validator is a gatekeeper that checks the entire ID card, not just one valid-looking piece inside it.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Anchor start</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Match required fields</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Anchor end</text></svg><h4>Core ideas</h4><ul><li>Anchors prevent extra prefix or suffix text.</li><li>Literal periods must be escaped as \\.</li><li>Exact repetition validates fixed-size fields.</li><li>Basic patterns are useful but real international formats can be more complex.</li></ul><h4>Worked example</h4><pre><code>import re\nphone = r&quot;^\\d{3}-\\d{3}-\\d{4}$&quot;\nfor value in [&quot;555-123-4567&quot;, &quot;Call 555-123-4567&quot;]:\n    print(bool(re.search(phone, value)))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\nphone = r&quot;^\\d{3}-\\d{3}-\\d{4}$&quot;\nfor value in [&quot;555-123-4567&quot;, &quot;Call 555-123-4567&quot;]:\n    print(bool(re.search(phone, value)))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>email = r&quot;\\w+@\\w+.com&quot;</code></pre><p class=\"w__why\">The period is an unescaped wildcard and the pattern is not anchored, so invalid extra characters can pass.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>^</code></button><button data-pair=\"p1\"><code>\\.</code></button><button data-pair=\"p2\"><code>$</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">End anchor</button><button data-pair=\"p1\">Literal period</button><button data-pair=\"p0\">Start anchor</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Why anchor a phone validator?",
          "options": [
            "To make it colourful",
            "To reject extra text before or after",
            "To convert it to int",
            "To save a file"
          ],
          "answer": 1,
          "why": "Validation should cover the complete input."
        },
        {
          "q": "How is a literal period written?",
          "options": [
            ".",
            "\\.",
            "[dot]",
            "$"
          ],
          "answer": 1,
          "why": "A bare dot is a wildcard."
        },
        {
          "q": "Which validates exactly five digits?",
          "options": [
            "r\"\\d+\"",
            "r\"^\\d{5}$\"",
            "r\"[5]\"",
            "r\"\\w{5}\""
          ],
          "answer": 1,
          "why": "It combines anchors and exact repetition."
        },
        {
          "q": "Which phone value passes ^\\d{3}-\\d{3}-\\d{4}$?",
          "options": [
            "5551234567",
            "555-123-4567",
            "Call 555-123-4567",
            "55-123-4567"
          ],
          "answer": 1,
          "why": "It exactly matches the required shape."
        },
        {
          "q": "Are simple email patterns perfect for every international address?",
          "options": [
            "Yes",
            "No",
            "Only on Windows",
            "Only with JSON"
          ],
          "answer": 1,
          "why": "Real email rules are much broader and more complex."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Validate Phone Numbers",
          "brief": "Print validity for one correct and one prefixed phone number.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "^\\d{3}",
              "message": "Use ^\\d{3}"
            },
            {
              "type": "sourceIncludes",
              "value": "\\d{4}$",
              "message": "Use \\d{4}$"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t25p01"
        },
        {
          "kind": "code",
          "title": "Validate ZIP Codes",
          "brief": "Validate four sample ZIP values with an anchored five-digit pattern.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse\nFalse\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "r\"^\\d{5}$\"",
              "message": "Use r\"^\\d{5}$\""
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t25p02"
        }
      ]
    },
    {
      "id": "u6t26",
      "title": "RegEx for Extraction and Its HTML Limitation",
      "summary": "Extract predictable entities from flat text, but use a dedicated parser for nested HTML or XML structures.",
      "notebookLM": "",
      "notes": "<h4>RegEx for Extraction and Its HTML Limitation</h4><p>Extract predictable entities from flat text, but use a dedicated parser for nested HTML or XML structures.</p><h4>The real-world analogy</h4><p>A metal detector is excellent for finding coins in sand but not for understanding the architecture of a building.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Identify source type</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Use RegEx or parser</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Extract safely</text></svg><h4>Core ideas</h4><ul><li>RegEx is effective for emails, IDs, dates and log lines.</li><li>findall can extract repeated entities.</li><li>HTML is nested and irregular, so complex parsing with RegEx is brittle.</li><li>BeautifulSoup and similar parsers understand document structure.</li></ul><h4>Worked example</h4><pre><code>import re\ntext = &quot;help@company.com and sales@company.com&quot;\nprint(re.findall(r&quot;[\\w.-]+@[\\w.-]+\\.[A-Za-z]{2,}&quot;, text))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\ntext = &quot;help@company.com and sales@company.com&quot;\nprint(re.findall(r&quot;[\\w.-]+@[\\w.-]+\\.[A-Za-z]{2,}&quot;, text))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">[&#x27;help@company.com&#x27;, &#x27;sales@company.com&#x27;]</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>re.findall(r&quot;&lt;div&gt;(.*)&lt;/div&gt;&quot;, complex_html)</code></pre><p class=\"w__why\">Nested, malformed or changing HTML breaks simple RegEx assumptions. Use an HTML parser.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>flat log text</code></button><button data-pair=\"p1\"><code>nested HTML</code></button><button data-pair=\"p2\"><code>findall</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Repeated extraction</button><button data-pair=\"p1\">Parser</button><button data-pair=\"p0\">RegEx</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which is a strong RegEx use case?",
          "options": [
            "Parsing arbitrary nested HTML",
            "Extracting IP addresses from logs",
            "Rendering a browser",
            "Opening images"
          ],
          "answer": 1,
          "why": "Logs are flat predictable text."
        },
        {
          "q": "Why avoid RegEx for complex HTML?",
          "options": [
            "Angle brackets are illegal",
            "HTML is nested and irregular",
            "RegEx cannot read letters",
            "HTML has no text"
          ],
          "answer": 1,
          "why": "Nested structures require a parser."
        },
        {
          "q": "Which tool is designed for HTML structure?",
          "options": [
            "BeautifulSoup",
            "pickle",
            "calendar",
            "csv.writer"
          ],
          "answer": 0,
          "why": "BeautifulSoup parses HTML trees."
        },
        {
          "q": "Which method extracts all email-like matches?",
          "options": [
            "re.findall",
            "re.match only",
            "tell",
            "json.dump"
          ],
          "answer": 0,
          "why": "findall returns every match."
        },
        {
          "q": "Which source should use a parser?",
          "options": [
            "Server log",
            "Date field",
            "Nested product-page HTML",
            "Phone input"
          ],
          "answer": 2,
          "why": "HTML structure is the key concern."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Extract Email Addresses",
          "brief": "Find both company email addresses.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['help@company.com', 'sales@company.com']"
            },
            {
              "type": "sourceIncludes",
              "value": "re.findall",
              "message": "Use re.findall"
            },
            {
              "type": "sourceIncludes",
              "value": "@",
              "message": "Use @"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['help@company.com', 'sales@company.com']"
          ],
          "id": "u6t26p01"
        },
        {
          "kind": "code",
          "title": "Extract Log IPs",
          "brief": "Find all IPv4-like addresses in a flat log line.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['10.0.0.5', '192.168.1.20']"
            },
            {
              "type": "sourceIncludes",
              "value": "re.findall",
              "message": "Use re.findall"
            },
            {
              "type": "sourceIncludes",
              "value": "{3}",
              "message": "Use {3}"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['10.0.0.5', '192.168.1.20']"
          ],
          "id": "u6t26p02"
        }
      ]
    },
    {
      "id": "u6t27",
      "title": "Revision Checkpoint 4 - Pattern Detective",
      "summary": "Combine exact validation, extraction, replacement, grouping and tool selection in one text-cleaning mission.",
      "notebookLM": "",
      "notes": "<h4>Revision Checkpoint 4 - Pattern Detective</h4><p>Combine exact validation, extraction, replacement, grouping and tool selection in one text-cleaning mission.</p><h4>The real-world analogy</h4><p>A pattern detective validates the evidence label, extracts every clue, redacts secrets and knows when to call a specialist.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Validate</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Extract</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Transform</text></svg><h4>Core ideas</h4><ul><li>Use raw strings.</li><li>Anchor full validators.</li><li>Use groups for subfields.</li><li>Use parsers rather than RegEx for nested markup.</li></ul><h4>Worked example</h4><pre><code>import re\nrecord = &quot;ID: AB-2048 | PIN: 8493&quot;\nprint(re.search(r&quot;([A-Z]{2})-(\\d{4})&quot;, record).groups())\nprint(re.sub(r&quot;PIN: \\d{4}&quot;, &quot;PIN: ****&quot;, record))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\nrecord = &quot;ID: AB-2048 | PIN: 8493&quot;\nfound = re.search(r&quot;([A-Z]{2})-(\\d{4})&quot;, record)\nprint(found.groups())\nprint(re.sub(r&quot;PIN: \\d{4}&quot;, &quot;PIN: ****&quot;, record))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">(&#x27;AB&#x27;, &#x27;2048&#x27;)</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>pattern = r&quot;[A-Z]{2}-\\d{4}&quot;\nvalid = bool(re.search(pattern, &quot;xAB-2048y&quot;))</code></pre><p class=\"w__why\">For exact validation, start and end anchors are required.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>validation</code></button><button data-pair=\"p1\"><code>extraction</code></button><button data-pair=\"p2\"><code>redaction</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Replace secrets</button><button data-pair=\"p1\">Matched entities</button><button data-pair=\"p0\">Whole input</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which function is best for redaction?",
          "options": [
            "sub",
            "match",
            "tell",
            "dump"
          ],
          "answer": 0,
          "why": "sub replaces matches."
        },
        {
          "q": "Which method exposes captured groups as a tuple?",
          "options": [
            "groups()",
            "readlines()",
            "writerows()",
            "exists()"
          ],
          "answer": 0,
          "why": "Match.groups returns captures."
        },
        {
          "q": "Which function finds all repeated IDs?",
          "options": [
            "findall",
            "search only",
            "match only",
            "seek"
          ],
          "answer": 0,
          "why": "findall returns all occurrences."
        },
        {
          "q": "Which pattern exactly validates AB-2048?",
          "options": [
            "r\"[A-Z]{2}-\\d{4}\"",
            "r\"^[A-Z]{2}-\\d{4}$\"",
            "r\"AB.*\"",
            "r\"\\w+\""
          ],
          "answer": 1,
          "why": "Anchors ensure no extra text."
        },
        {
          "q": "Which tool should parse a nested table in HTML?",
          "options": [
            "RegEx only",
            "HTML parser",
            "pickle",
            "time"
          ],
          "answer": 1,
          "why": "A parser understands nesting."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Capture and Redact",
          "brief": "Capture the ID pieces and redact the PIN.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "('AB', '2048')\nID: AB-2048 | PIN: ****"
            },
            {
              "type": "sourceIncludes",
              "value": "groups()",
              "message": "Use groups()"
            },
            {
              "type": "sourceIncludes",
              "value": "re.sub",
              "message": "Use re.sub"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ('AB', '2048')"
          ],
          "id": "u6t27p01"
        },
        {
          "kind": "code",
          "title": "Validate a Date",
          "brief": "Validate only YYYY-MM-DD with fixed-size fields.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "^\\d{4}",
              "message": "Use ^\\d{4}"
            },
            {
              "type": "sourceIncludes",
              "value": "\\d{2}$",
              "message": "Use \\d{2}$"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t27p02"
        },
        {
          "kind": "code",
          "title": "Split Mixed Delimiters",
          "brief": "Split names separated by commas, semicolons or spaces.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['Asha', 'Ravi', 'Mina', 'Dev']"
            },
            {
              "type": "sourceIncludes",
              "value": "re.split",
              "message": "Use re.split"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['Asha', 'Ravi', 'Mina', 'Dev']"
          ],
          "id": "u6t27p03"
        }
      ]
    },
    {
      "id": "u6t28",
      "title": "Modules, Import Styles and Aliases",
      "summary": "Split reusable functions, variables and classes into Python module files and import only what each program needs.",
      "notebookLM": "",
      "notes": "<h4>Modules, Import Styles and Aliases</h4><p>Split reusable functions, variables and classes into Python module files and import only what each program needs.</p><h4>The real-world analogy</h4><p>A module is a toolbox file; importing opens the toolbox so another script can use its tools.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Create .py file</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Import tool</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Call with namespace</text></svg><h4>Core ideas</h4><ul><li>A module is a Python file containing reusable definitions.</li><li>import module keeps a clear namespace.</li><li>from module import name imports selected tools directly.</li><li>as creates a short alias; wildcard imports are discouraged.</li></ul><h4>Worked example</h4><pre><code>from pathlib import Path\nPath(&quot;math_tools.py&quot;).write_text(&quot;def double(x):\\n    return x * 2\\n&quot;)\nimport math_tools as mt\nprint(mt.double(5))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>from pathlib import Path\nPath(&quot;math_tools.py&quot;).write_text(&quot;def double(x):\\n    return x * 2\\n&quot;)\nimport math_tools as mt\nprint(mt.double(5))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">10</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>from math_tools import *</code></pre><p class=\"w__why\">Wildcard imports can overwrite existing names and make source dependencies unclear.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>import module</code></button><button data-pair=\"p1\"><code>from ... import</code></button><button data-pair=\"p2\"><code>as</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Alias</button><button data-pair=\"p1\">Selected names</button><button data-pair=\"p0\">Keep namespace</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What is a Python module?",
          "options": [
            "A loop",
            "A reusable .py file",
            "A binary image",
            "A RegEx group"
          ],
          "answer": 1,
          "why": "A module is a source file that can be imported."
        },
        {
          "q": "How is add called after import math_tools?",
          "options": [
            "add()",
            "math_tools.add()",
            "import.add()",
            "math_tools->add()"
          ],
          "answer": 1,
          "why": "The module namespace prefixes the function."
        },
        {
          "q": "How is add called after from math_tools import add?",
          "options": [
            "math_tools.add()",
            "add()",
            "from.add()",
            "import add()"
          ],
          "answer": 1,
          "why": "The selected name is imported directly."
        },
        {
          "q": "What does as do?",
          "options": [
            "Runs as administrator",
            "Creates an alias",
            "Deletes a module",
            "Converts to string"
          ],
          "answer": 1,
          "why": "Aliases shorten or clarify module names."
        },
        {
          "q": "Why avoid import *?",
          "options": [
            "It cannot import functions",
            "It can create name collisions",
            "It only works online",
            "It deletes variables"
          ],
          "answer": 1,
          "why": "Imported names may overwrite each other."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Create and Import a Module",
          "brief": "Create math_tools.py, import it with an alias and print double(5).",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10"
            },
            {
              "type": "sourceIncludes",
              "value": "import math_tools as mt",
              "message": "Use import math_tools as mt"
            },
            {
              "type": "sourceIncludes",
              "value": "mt.double",
              "message": "Use mt.double"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 10"
          ],
          "id": "u6t28p01"
        },
        {
          "kind": "code",
          "title": "Import a Specific Function",
          "brief": "Create greetings.py and import only say_hi.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hi, Asha!"
            },
            {
              "type": "sourceIncludes",
              "value": "from greetings import say_hi",
              "message": "Use from greetings import say_hi"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hi, Asha!"
          ],
          "id": "u6t28p02"
        }
      ]
    },
    {
      "id": "u6t29",
      "title": "The __name__ == \"__main__\" Guard",
      "summary": "Prevent demonstration code from running during import while keeping a file usable as a standalone script.",
      "notebookLM": "",
      "notes": "<h4>The __name__ == &quot;__main__&quot; Guard</h4><p>Prevent demonstration code from running during import while keeping a file usable as a standalone script.</p><h4>The real-world analogy</h4><p>A two-faced file can act as the main performer or quietly serve as a toolbox, depending on how it is opened.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Inspect __name__</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Run or import</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Guard demo code</text></svg><h4>Core ideas</h4><ul><li>Imported modules execute top-level statements once.</li><li>When run directly, __name__ equals &quot;__main__&quot;.</li><li>When imported, __name__ is the module name.</li><li>The main guard isolates tests and command-line entry code.</li></ul><h4>Worked example</h4><pre><code>from pathlib import Path\nPath(&quot;tool.py&quot;).write_text(\n    &quot;def answer():\\n    return 42\\n\\n&quot;\n    &quot;if __name__ == &#x27;__main__&#x27;:\\n    print(&#x27;direct run&#x27;)\\n&quot;\n)\nimport tool\nprint(tool.answer())</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>from pathlib import Path\nPath(&quot;tool.py&quot;).write_text(\n    &quot;def answer():\\n    return 42\\n\\n&quot;\n    &quot;if __name__ == &#x27;__main__&#x27;:\\n    print(&#x27;direct run&#x27;)\\n&quot;\n)\nimport tool\nprint(tool.answer())</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">42</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>print(&quot;Testing module&quot;)\ndef add(a, b): return a + b</code></pre><p class=\"w__why\">The print statement runs as soon as the file is imported. Place test code under the main guard.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>__name__</code></button><button data-pair=\"p1\"><code>__main__</code></button><button data-pair=\"p2\"><code>module name</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Imported</button><button data-pair=\"p1\">Run directly</button><button data-pair=\"p0\">Execution identity</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What happens to unguarded top-level print code during import?",
          "options": [
            "It is ignored",
            "It executes",
            "It becomes a comment",
            "It raises SyntaxError"
          ],
          "answer": 1,
          "why": "Python executes module top-level statements during import."
        },
        {
          "q": "What is __name__ when the file is run directly?",
          "options": [
            "The filename always",
            "\"__main__\"",
            "None",
            "\"import\""
          ],
          "answer": 1,
          "why": "The direct entry module receives this special value."
        },
        {
          "q": "What is __name__ when math_tools is imported?",
          "options": [
            "\"__main__\"",
            "Usually \"math_tools\"",
            "False",
            "The function name"
          ],
          "answer": 1,
          "why": "Imported modules use their module name."
        },
        {
          "q": "What belongs under the main guard?",
          "options": [
            "Reusable function definitions only",
            "Demo, tests or program entry code",
            "All imports always",
            "Class attributes only"
          ],
          "answer": 1,
          "why": "It separates reusable definitions from execution."
        },
        {
          "q": "What does the guard improve?",
          "options": [
            "Module reusability",
            "Internet speed",
            "CSV delimiters",
            "Regex quantifiers"
          ],
          "answer": 0,
          "why": "Importing remains quiet and predictable."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Build a Quiet Module",
          "brief": "Create tool.py with a guarded message, import it and print answer().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "42"
            },
            {
              "type": "sourceIncludes",
              "value": "if __name__ ==",
              "message": "Use if __name__ =="
            },
            {
              "type": "sourceIncludes",
              "value": "import tool",
              "message": "Use import tool"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 42"
          ],
          "id": "u6t29p01"
        },
        {
          "kind": "code",
          "title": "Inspect Imported Module Name",
          "brief": "Create identity.py with a function returning __name__, import it and print the result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "identity"
            },
            {
              "type": "sourceIncludes",
              "value": "return __name__",
              "message": "Use return __name__"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: identity"
          ],
          "id": "u6t29p02"
        }
      ]
    },
    {
      "id": "u6t30",
      "title": "Packages, Libraries, PyPI and pip",
      "summary": "Organise multiple modules into packages and understand how third-party libraries are distributed and installed.",
      "notebookLM": "",
      "notes": "<h4>Packages, Libraries, PyPI and pip</h4><p>Organise multiple modules into packages and understand how third-party libraries are distributed and installed.</p><h4>The real-world analogy</h4><p>A module is one toolbox, a package is the shed holding toolboxes, and a library is a large published collection for one purpose.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Package folder</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">__init__.py</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Import submodule</text></svg><h4>Core ideas</h4><ul><li>A package is a folder containing Python modules.</li><li>__init__.py traditionally marks and initialises a package.</li><li>A library may contain several packages serving one domain.</li><li>pip installs third-party distributions from PyPI.</li></ul><h4>Worked example</h4><pre><code>from pathlib import Path\nPath(&quot;math_pack&quot;).mkdir()\nPath(&quot;math_pack/__init__.py&quot;).write_text(&quot;&quot;)\nPath(&quot;math_pack/calc.py&quot;).write_text(&quot;def double(x):\\n    return x * 2\\n&quot;)\nfrom math_pack import calc\nprint(calc.double(6))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>from pathlib import Path\nPath(&quot;math_pack&quot;).mkdir()\nPath(&quot;math_pack/__init__.py&quot;).write_text(&quot;&quot;)\nPath(&quot;math_pack/calc.py&quot;).write_text(&quot;def double(x):\\n    return x * 2\\n&quot;)\nfrom math_pack import calc\nprint(calc.double(6))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">12</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>from package import *</code></pre><p class=\"w__why\">Broad imports from packages can pollute the namespace and conceal where names originated.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>module</code></button><button data-pair=\"p1\"><code>package</code></button><button data-pair=\"p2\"><code>pip</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Installer</button><button data-pair=\"p1\">Folder of modules</button><button data-pair=\"p0\">One .py file</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What is a package?",
          "options": [
            "One loop",
            "A folder containing modules",
            "A CSV row",
            "A RegEx pattern"
          ],
          "answer": 1,
          "why": "Packages organise related module files."
        },
        {
          "q": "What file traditionally marks a package?",
          "options": [
            "main.txt",
            "__init__.py",
            "package.csv",
            "setup.jpg"
          ],
          "answer": 1,
          "why": "__init__.py remains common practice."
        },
        {
          "q": "How can calc.py inside math_pack be imported?",
          "options": [
            "from math_pack import calc",
            "open math_pack.calc",
            "pip calc only",
            "import from calc"
          ],
          "answer": 0,
          "why": "Dot/package import syntax locates the submodule."
        },
        {
          "q": "What is pip?",
          "options": [
            "A file cursor",
            "A package installer",
            "A JSON parser",
            "A time function"
          ],
          "answer": 1,
          "why": "pip installs Python distributions."
        },
        {
          "q": "What is PyPI?",
          "options": [
            "Python Package Index",
            "Python Path Internal",
            "Pickle Interface",
            "Public Python Interpreter"
          ],
          "answer": 0,
          "why": "PyPI hosts third-party Python packages."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Build a Package",
          "brief": "Create math_pack with calc.py and import calc.double.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "12"
            },
            {
              "type": "sourceIncludes",
              "value": "__init__.py",
              "message": "Use __init__.py"
            },
            {
              "type": "sourceIncludes",
              "value": "from math_pack import calc",
              "message": "Use from math_pack import calc"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 12"
          ],
          "id": "u6t30p01"
        },
        {
          "kind": "code",
          "title": "Import a Package Function Directly",
          "brief": "Create text_pack.formatter.upper and import the function directly.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "ABHYASLAB"
            },
            {
              "type": "sourceIncludes",
              "value": "from text_pack.formatter import upper",
              "message": "Use from text_pack.formatter import upper"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ABHYASLAB"
          ],
          "id": "u6t30p02"
        }
      ]
    },
    {
      "id": "u6t31",
      "title": "Standard Library: time, datetime and calendar",
      "summary": "Use built-in modules for raw timestamps, pauses, human-readable dates and formatted monthly calendars.",
      "notebookLM": "",
      "notes": "<h4>Standard Library: time, datetime and calendar</h4><p>Use built-in modules for raw timestamps, pauses, human-readable dates and formatted monthly calendars.</p><h4>The real-world analogy</h4><p>A stopwatch measures raw seconds, a diary labels human dates, and a wall calendar arranges them visually.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Raw time</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Human date</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Calendar view</text></svg><h4>Core ideas</h4><ul><li>time.time reports seconds since the Unix epoch.</li><li>time.sleep pauses execution for a duration.</li><li>datetime.date and datetime.datetime represent human dates and times.</li><li>calendar.month returns a formatted month.</li></ul><h4>Worked example</h4><pre><code>import datetime\nimport calendar\nday = datetime.date(2026, 8, 5)\nprint(day.year, day.month, day.day)\nprint(calendar.month_name[day.month])</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import datetime\nimport calendar\nday = datetime.date(2026, 8, 5)\nprint(day.year, day.month, day.day)\nprint(calendar.month_name[day.month])</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">2026 8 5</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>time.sleep(&quot;2&quot;)</code></pre><p class=\"w__why\">sleep expects a numeric number of seconds, not a string.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>time.time()</code></button><button data-pair=\"p1\"><code>date</code></button><button data-pair=\"p2\"><code>calendar</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Formatted calendar tools</button><button data-pair=\"p1\">Year-month-day</button><button data-pair=\"p0\">Epoch seconds</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What does time.sleep(2) do?",
          "options": [
            "Stops forever",
            "Pauses about two seconds",
            "Returns today",
            "Creates a timer file"
          ],
          "answer": 1,
          "why": "sleep suspends the current thread."
        },
        {
          "q": "What is the Unix epoch used by time.time?",
          "options": [
            "1 January 1970",
            "1 January 2000",
            "Today",
            "The Python install date"
          ],
          "answer": 0,
          "why": "Epoch seconds are counted from 1970-01-01 UTC."
        },
        {
          "q": "Which returns a date and current time?",
          "options": [
            "datetime.datetime.now()",
            "calendar.month()",
            "time.sleep()",
            "os.getcwd()"
          ],
          "answer": 0,
          "why": "datetime.now creates a date-time value."
        },
        {
          "q": "Which prints a formatted month?",
          "options": [
            "calendar.month",
            "json.month",
            "time.month",
            "Path.month"
          ],
          "answer": 0,
          "why": "The calendar module formats calendar text."
        },
        {
          "q": "Which attribute gives the year of a date?",
          "options": [
            "date.year",
            "date[0]",
            "date.get_year()",
            "calendar.year only"
          ],
          "answer": 0,
          "why": "date objects expose year, month and day attributes."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Inspect a Fixed Date",
          "brief": "Print the numeric date parts and month name for 5 August 2026.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "2026 8 5\nAugust"
            },
            {
              "type": "sourceIncludes",
              "value": "datetime.date",
              "message": "Use datetime.date"
            },
            {
              "type": "sourceIncludes",
              "value": "calendar.month_name",
              "message": "Use calendar.month_name"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 2026 8 5"
          ],
          "id": "u6t31p01"
        },
        {
          "kind": "code",
          "title": "Measure a Tiny Operation",
          "brief": "Use time.perf_counter around a calculation and print whether elapsed time is non-negative.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "499500\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "time.perf_counter",
              "message": "Use time.perf_counter"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 499500"
          ],
          "id": "u6t31p02"
        }
      ]
    },
    {
      "id": "u6t32",
      "title": "Standard Library Review: os, sys, math, statistics, random, csv and json",
      "summary": "Select the correct built-in module for system access, command-line arguments, mathematics, statistics, randomness and data formats.",
      "notebookLM": "",
      "notes": "<h4>Standard Library Review: os, sys, math, statistics, random, csv and json</h4><p>Select the correct built-in module for system access, command-line arguments, mathematics, statistics, randomness and data formats.</p><h4>The real-world analogy</h4><p>A professional toolbelt contains specialised tools; the skill is choosing the smallest correct tool for each job.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Identify problem</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Select module</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Call focused tool</text></svg><h4>Core ideas</h4><ul><li>os and pathlib manage files and paths.</li><li>sys exposes interpreter details and command-line arguments.</li><li>math, statistics and random support numeric work.</li><li>csv and json translate common data formats.</li></ul><h4>Worked example</h4><pre><code>import statistics\nimport random\nscores = [80, 90, 100]\nprint(statistics.mean(scores))\nrandom.seed(7)\nprint(random.choice([&quot;A&quot;, &quot;B&quot;, &quot;C&quot;]))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import statistics\nimport random\nscores = [80, 90, 100]\nprint(statistics.mean(scores))\nrandom.seed(7)\nprint(random.choice([&quot;A&quot;, &quot;B&quot;, &quot;C&quot;]))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">90</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>import random\nprint(random.choice([]))</code></pre><p class=\"w__why\">Choosing from an empty sequence raises IndexError. Validate the collection first.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>statistics</code></button><button data-pair=\"p1\"><code>random</code></button><button data-pair=\"p2\"><code>sys.argv</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Command-line arguments</button><button data-pair=\"p1\">Unpredictable selection</button><button data-pair=\"p0\">Mean and median</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which module calculates a mean?",
          "options": [
            "statistics",
            "os",
            "re",
            "pickle"
          ],
          "answer": 0,
          "why": "statistics.mean computes an average."
        },
        {
          "q": "Which module shuffles a deck?",
          "options": [
            "random",
            "json",
            "pathlib",
            "calendar"
          ],
          "answer": 0,
          "why": "random supports sampling and shuffling."
        },
        {
          "q": "Which attribute holds command-line arguments?",
          "options": [
            "sys.argv",
            "os.args",
            "math.argv",
            "json.args"
          ],
          "answer": 0,
          "why": "sys.argv stores the script arguments."
        },
        {
          "q": "Which module provides sqrt?",
          "options": [
            "math",
            "csv",
            "time",
            "pickle"
          ],
          "answer": 0,
          "why": "math.sqrt performs square roots."
        },
        {
          "q": "Which module parses web API JSON?",
          "options": [
            "json",
            "csv",
            "os",
            "calendar"
          ],
          "answer": 0,
          "why": "json loads JSON text into Python values."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Use Statistics and Random",
          "brief": "Print the mean and a deterministic seeded choice.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "90\nB"
            },
            {
              "type": "sourceIncludes",
              "value": "statistics.mean",
              "message": "Use statistics.mean"
            },
            {
              "type": "sourceIncludes",
              "value": "random.seed",
              "message": "Use random.seed"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 90"
          ],
          "id": "u6t32p01"
        },
        {
          "kind": "code",
          "title": "Use Math Tools",
          "brief": "Print the square root of 81 and ceiling of 4.2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "9.0\n5"
            },
            {
              "type": "sourceIncludes",
              "value": "math.sqrt",
              "message": "Use math.sqrt"
            },
            {
              "type": "sourceIncludes",
              "value": "math.ceil",
              "message": "Use math.ceil"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 9.0"
          ],
          "id": "u6t32p02"
        }
      ]
    },
    {
      "id": "u6t33",
      "title": "Revision Checkpoint 5 - Reusable Toolboxes",
      "summary": "Build a quiet package, import it clearly and combine selected standard-library tools in a reusable workflow.",
      "notebookLM": "",
      "notes": "<h4>Revision Checkpoint 5 - Reusable Toolboxes</h4><p>Build a quiet package, import it clearly and combine selected standard-library tools in a reusable workflow.</p><h4>The real-world analogy</h4><p>A clean workshop labels every toolbox, keeps tests behind a door and records which specialist tool solved each step.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Organise files</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Import cleanly</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Run entry point</text></svg><h4>Core ideas</h4><ul><li>Use modules for one focused concern.</li><li>Use packages for related modules.</li><li>Protect executable code with the main guard.</li><li>Prefer explicit imports and standard-library tools before adding dependencies.</li></ul><h4>Worked example</h4><pre><code>from pathlib import Path\nPath(&quot;toolkit.py&quot;).write_text(\n    &quot;import statistics\\n&quot;\n    &quot;def average(values):\\n    return statistics.mean(values)\\n&quot;\n)\nimport toolkit\nprint(toolkit.average([70, 80, 90]))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>from pathlib import Path\nPath(&quot;toolkit.py&quot;).write_text(\n    &quot;import statistics\\n&quot;\n    &quot;def average(values):\\n    return statistics.mean(values)\\n&quot;\n)\nimport toolkit\nprint(toolkit.average([70, 80, 90]))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">80</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>from toolkit import *</code></pre><p class=\"w__why\">Explicit imports or module namespaces communicate origin and avoid accidental collisions.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>module</code></button><button data-pair=\"p1\"><code>package</code></button><button data-pair=\"p2\"><code>main guard</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Quiet import</button><button data-pair=\"p1\">Related files</button><button data-pair=\"p0\">Focused file</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which import keeps the clearest namespace?",
          "options": [
            "from x import *",
            "import toolkit",
            "exec file",
            "open toolkit.py"
          ],
          "answer": 1,
          "why": "The module prefix shows where names come from."
        },
        {
          "q": "What makes imported test code stay quiet?",
          "options": [
            "try-except",
            "main guard",
            "CSV writer",
            "seek(0)"
          ],
          "answer": 1,
          "why": "The guard runs only for direct execution."
        },
        {
          "q": "What organises several related modules?",
          "options": [
            "Package",
            "Regex group",
            "File cursor",
            "Exception tuple"
          ],
          "answer": 0,
          "why": "A package is a module directory."
        },
        {
          "q": "Which built-in module should calculate an average?",
          "options": [
            "statistics",
            "requests",
            "BeautifulSoup",
            "pickle only"
          ],
          "answer": 0,
          "why": "No third-party dependency is needed."
        },
        {
          "q": "What is a good dependency rule?",
          "options": [
            "Install everything first",
            "Use the smallest appropriate tool",
            "Always write one giant file",
            "Use wildcard imports"
          ],
          "answer": 1,
          "why": "Focused dependencies improve clarity and maintenance."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Build a Statistics Module",
          "brief": "Create toolkit.py with average and call it through the module namespace.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "80"
            },
            {
              "type": "sourceIncludes",
              "value": "import toolkit",
              "message": "Use import toolkit"
            },
            {
              "type": "sourceIncludes",
              "value": "toolkit.average",
              "message": "Use toolkit.average"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 80"
          ],
          "id": "u6t33p01"
        },
        {
          "kind": "code",
          "title": "Build a Two-Module Package",
          "brief": "Create school_tools with grades.py and text.py, then use both.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha\nTrue"
            },
            {
              "type": "sourceIncludes",
              "value": "from school_tools import grades, text",
              "message": "Use from school_tools import grades, text"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Asha"
          ],
          "id": "u6t33p02"
        },
        {
          "kind": "code",
          "title": "Guard a Demo",
          "brief": "Create a module whose demo is guarded and confirm import prints only the function result.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Ready"
            },
            {
              "type": "sourceIncludes",
              "value": "if __name__ ==",
              "message": "Use if __name__ =="
            },
            {
              "type": "sourceIncludes",
              "value": "import safe_tool",
              "message": "Use import safe_tool"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Ready"
          ],
          "id": "u6t33p03"
        }
      ]
    },
    {
      "id": "u6t34",
      "title": "Practical Lab 1 - File Reader, Analyzer and Backup",
      "summary": "Implement the source programs for safe display, word-line-character analysis and file copying.",
      "notebookLM": "",
      "notes": "<h4>Practical Lab 1 - File Reader, Analyzer and Backup</h4><p>Implement the source programs for safe display, word-line-character analysis and file copying.</p><h4>The real-world analogy</h4><p>A document operations team reads safely, measures the document and creates a verified backup.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Read safely</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Analyze stream</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Copy content</text></svg><h4>Core ideas</h4><ul><li>Catch FileNotFoundError for missing inputs.</li><li>Iterate line by line for memory-efficient analysis.</li><li>Count words with split() and characters with len().</li><li>Two files can be managed inside one with statement.</li></ul><h4>Worked example</h4><pre><code>def analyze_file(filename):\n    lines = words = characters = 0\n    with open(filename) as file:\n        for line in file:\n            lines += 1\n            words += len(line.split())\n            characters += len(line)\n    return lines, words, characters</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>def display_file(filename):\n    try:\n        with open(filename, &quot;r&quot;) as file:\n            print(file.read())\n    except FileNotFoundError:\n        print(&quot;File not found&quot;)\nwith open(&quot;sample.txt&quot;, &quot;w&quot;) as file:\n    file.write(&quot;AbhyasLab Unit 6&quot;)\ndisplay_file(&quot;sample.txt&quot;)</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">AbhyasLab Unit 6</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>with open(source) as a, open(destination, &quot;w&quot;) as b:\n    b.write(a)</code></pre><p class=\"w__why\">write expects text, not a file object. Read or stream the source content first.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>display</code></button><button data-pair=\"p1\"><code>analyze</code></button><button data-pair=\"p2\"><code>backup</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Copy to destination</button><button data-pair=\"p1\">Count content</button><button data-pair=\"p0\">Read and print</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which exception handles a missing source file?",
          "options": [
            "ValueError",
            "FileNotFoundError",
            "IndexError",
            "AssertionError"
          ],
          "answer": 1,
          "why": "Opening a missing path raises FileNotFoundError."
        },
        {
          "q": "How should words be counted per line?",
          "options": [
            "len(line.split())",
            "line.tell()",
            "json.loads(line)",
            "line.seek()"
          ],
          "answer": 0,
          "why": "split creates word tokens."
        },
        {
          "q": "Which technique avoids loading a large book at once?",
          "options": [
            "for line in file",
            "read()",
            "readlines()",
            "pickle.load"
          ],
          "answer": 0,
          "why": "Iteration is lazy."
        },
        {
          "q": "Can one with statement manage two files?",
          "options": [
            "No",
            "Yes, separate contexts with a comma",
            "Only binary files",
            "Only on Linux"
          ],
          "answer": 1,
          "why": "Multiple context managers are supported."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Display an Existing File",
          "brief": "Create sample.txt and implement display_file to print its content safely.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "AbhyasLab Unit 6"
            },
            {
              "type": "sourceIncludes",
              "value": "def display_file",
              "message": "Use def display_file"
            },
            {
              "type": "sourceIncludes",
              "value": "except FileNotFoundError",
              "message": "Use except FileNotFoundError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: AbhyasLab Unit 6"
          ],
          "id": "u6t34p01"
        },
        {
          "kind": "code",
          "title": "Handle a Missing Display File",
          "brief": "Call display_file for a missing path and print a friendly message.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "File not found"
            },
            {
              "type": "sourceIncludes",
              "value": "except FileNotFoundError",
              "message": "Use except FileNotFoundError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: File not found"
          ],
          "id": "u6t34p02"
        },
        {
          "kind": "code",
          "title": "Count Lines, Words and Characters",
          "brief": "Analyze a two-line file and print the three counts.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "(2, 3, 13)"
            },
            {
              "type": "sourceIncludes",
              "value": "for line in file",
              "message": "Use for line in file"
            },
            {
              "type": "sourceIncludes",
              "value": "line.split()",
              "message": "Use line.split()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: (2, 3, 13)"
          ],
          "id": "u6t34p03"
        },
        {
          "kind": "code",
          "title": "Copy One File to Another",
          "brief": "Implement backup_file and print the copied content.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Backup ready"
            },
            {
              "type": "sourceIncludes",
              "value": "def backup_file",
              "message": "Use def backup_file"
            },
            {
              "type": "sourceIncludes",
              "value": "open(dest_name, \"w\")",
              "message": "Use open(dest_name, \"w\")"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Backup ready"
          ],
          "id": "u6t34p04"
        },
        {
          "kind": "code",
          "title": "Stream a Large-Style Backup",
          "brief": "Copy line by line instead of using read().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "A\nB\nC"
            },
            {
              "type": "sourceIncludes",
              "value": "for line in source",
              "message": "Use for line in source"
            },
            {
              "type": "sourceIncludes",
              "value": "destination.write(line)",
              "message": "Use destination.write(line)"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: A"
          ],
          "id": "u6t34p05"
        },
        {
          "kind": "code",
          "title": "Verify Backup Equality",
          "brief": "Copy a file and print whether source and destination contents match.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "Path(",
              "message": "Use Path("
            },
            {
              "type": "sourceIncludes",
              "value": "== destination.read_text()",
              "message": "Use == destination.read_text()"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t34p06"
        }
      ]
    },
    {
      "id": "u6t35",
      "title": "Practical Lab 2 - Student CSV and JSON Save State",
      "summary": "Implement the source programs for student records in CSV and nested application state in JSON.",
      "notebookLM": "",
      "notes": "<h4>Practical Lab 2 - Student CSV and JSON Save State</h4><p>Implement the source programs for student records in CSV and nested application state in JSON.</p><h4>The real-world analogy</h4><p>A registrar exports a flat roster to a spreadsheet while a game stores a nested world state in JSON.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Write structured data</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Read it back</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Verify fields</text></svg><h4>Core ideas</h4><ul><li>Use csv.writerows for a table.</li><li>Use newline=&#x27;&#x27; for CSV writing.</li><li>Use json.dump with indent for readable files.</li><li>Use json.load to restore dictionaries and lists.</li></ul><h4>Worked example</h4><pre><code>import json\nstate = {&quot;player&quot;: &quot;Hero99&quot;, &quot;inventory&quot;: [&quot;Sword&quot;, &quot;Shield&quot;]}\nwith open(&quot;save.json&quot;, &quot;w&quot;) as file:\n    json.dump(state, file, indent=4)\nwith open(&quot;save.json&quot;) as file:\n    print(json.load(file)[&quot;player&quot;])</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import csv\nrows = [[&quot;Name&quot;, &quot;Grade&quot;, &quot;Major&quot;], [&quot;Zack&quot;, &quot;A&quot;, &quot;CS&quot;], [&quot;Alice&quot;, &quot;B+&quot;, &quot;Math&quot;], [&quot;Bob&quot;, &quot;A-&quot;, &quot;Physics&quot;]]\nwith open(&quot;students.csv&quot;, &quot;w&quot;, newline=&quot;&quot;) as file:\n    csv.writer(file).writerows(rows)\nwith open(&quot;students.csv&quot;, newline=&quot;&quot;) as file:\n    print(len(list(csv.reader(file))))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">4</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>json.dumps(state, file)</code></pre><p class=\"w__why\">dumps returns a string and does not take a file object. Use dump for files.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>CSV</code></button><button data-pair=\"p1\"><code>JSON</code></button><button data-pair=\"p2\"><code>round trip</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Write then read</button><button data-pair=\"p1\">Nested state</button><button data-pair=\"p0\">Student table</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which method writes a list of CSV rows?",
          "options": [
            "writerows",
            "dump",
            "findall",
            "seek"
          ],
          "answer": 0,
          "why": "writerows handles a 2D sequence."
        },
        {
          "q": "Which JSON function writes to a file?",
          "options": [
            "dumps",
            "dump",
            "loads",
            "reader"
          ],
          "answer": 1,
          "why": "dump accepts data and a file object."
        },
        {
          "q": "Which JSON function restores a dictionary from a file?",
          "options": [
            "load",
            "loads only",
            "writerow",
            "decode"
          ],
          "answer": 0,
          "why": "load parses an open file."
        },
        {
          "q": "Which format fits nested inventory data?",
          "options": [
            "CSV only",
            "JSON",
            "TXT without structure",
            "JPEG"
          ],
          "answer": 1,
          "why": "JSON supports nested arrays and objects."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Create Student CSV",
          "brief": "Write a header and three student records.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "4"
            },
            {
              "type": "sourceIncludes",
              "value": "csv.writer",
              "message": "Use csv.writer"
            },
            {
              "type": "sourceIncludes",
              "value": "writerows",
              "message": "Use writerows"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 4"
          ],
          "id": "u6t35p01"
        },
        {
          "kind": "code",
          "title": "Format CSV Records",
          "brief": "Read a student CSV and print Name: Grade for each data row.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Asha: A\nRavi: B+"
            },
            {
              "type": "sourceIncludes",
              "value": "next(reader)",
              "message": "Use next(reader)"
            },
            {
              "type": "sourceIncludes",
              "value": "for name, grade in reader",
              "message": "Use for name, grade in reader"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Asha: A"
          ],
          "id": "u6t35p02"
        },
        {
          "kind": "code",
          "title": "Save Nested JSON State",
          "brief": "Save a player with inventory and print the player after loading.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Hero99"
            },
            {
              "type": "sourceIncludes",
              "value": "json.dump",
              "message": "Use json.dump"
            },
            {
              "type": "sourceIncludes",
              "value": "indent=4",
              "message": "Use indent=4"
            },
            {
              "type": "sourceIncludes",
              "value": "json.load",
              "message": "Use json.load"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Hero99"
          ],
          "id": "u6t35p03"
        },
        {
          "kind": "code",
          "title": "Read Nested Coordinates",
          "brief": "Store a nested location and print x and y.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "105\n-40"
            },
            {
              "type": "sourceIncludes",
              "value": "[\"location\"][\"x\"]",
              "message": "Use [\"location\"][\"x\"]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 105"
          ],
          "id": "u6t35p04"
        },
        {
          "kind": "code",
          "title": "Convert a Dictionary to JSON Text",
          "brief": "Use dumps with sorting and print the text.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "{\"a\": 1, \"b\": 2}"
            },
            {
              "type": "sourceIncludes",
              "value": "json.dumps",
              "message": "Use json.dumps"
            },
            {
              "type": "sourceIncludes",
              "value": "sort_keys=True",
              "message": "Use sort_keys=True"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: {\"a\": 1, \"b\": 2}"
          ],
          "id": "u6t35p05"
        },
        {
          "kind": "code",
          "title": "CSV to JSON Conversion",
          "brief": "Read two CSV rows and convert them into JSON objects.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "[{\"name\": \"Asha\", \"score\": \"90\"}, {\"name\": \"Ravi\", \"score\": \"80\"}]"
            },
            {
              "type": "sourceIncludes",
              "value": "csv.DictReader",
              "message": "Use csv.DictReader"
            },
            {
              "type": "sourceIncludes",
              "value": "json.dumps",
              "message": "Use json.dumps"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: [{\"name\": \"Asha\", \"score\": \"90\"}, {\"name\": \"Ravi\", \"score\": \"80\"}]"
          ],
          "id": "u6t35p06"
        }
      ]
    },
    {
      "id": "u6t36",
      "title": "Practical Lab 3 - Exception Calculator and InvalidAgeError",
      "summary": "Implement a robust calculator and a domain-specific age validation exception.",
      "notebookLM": "",
      "notes": "<h4>Practical Lab 3 - Exception Calculator and InvalidAgeError</h4><p>Implement a robust calculator and a domain-specific age validation exception.</p><h4>The real-world analogy</h4><p>A calculator routes each failure to a precise message, while a registration gate rejects impossible ages.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Accept input</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Validate operation</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Recover safely</text></svg><h4>Core ideas</h4><ul><li>Catch ValueError for invalid numeric conversion.</li><li>Catch ZeroDivisionError separately.</li><li>Use else for successful results and finally for completion messages.</li><li>Custom exceptions communicate application rules.</li></ul><h4>Worked example</h4><pre><code>def calculate(a, operator, b):\n    if operator == &quot;+&quot;:\n        return a + b\n    if operator == &quot;/&quot;:\n        return a / b\n    raise ValueError(&quot;Unsupported operator&quot;)\nprint(calculate(8, &quot;+&quot;, 2))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>def calculate(a, operator, b):\n    if operator == &quot;+&quot;:\n        return a + b\n    if operator == &quot;-&quot;:\n        return a - b\n    if operator == &quot;*&quot;:\n        return a * b\n    if operator == &quot;/&quot;:\n        return a / b\n    raise ValueError(&quot;Unsupported operator&quot;)\nprint(calculate(8, &quot;+&quot;, 2))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">10</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>except Exception:\n    print(&quot;Invalid&quot;)</code></pre><p class=\"w__why\">One vague catch-all hides whether the issue was input, division or unsupported operation.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>ValueError</code></button><button data-pair=\"p1\"><code>ZeroDivisionError</code></button><button data-pair=\"p2\"><code>InvalidAgeError</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Age rule</button><button data-pair=\"p1\">Division by zero</button><button data-pair=\"p0\">Invalid value</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which error handles float(\"abc\")?",
          "options": [
            "ValueError",
            "IndexError",
            "KeyError",
            "ImportError"
          ],
          "answer": 0,
          "why": "The text cannot be converted."
        },
        {
          "q": "Which error handles 10 / 0?",
          "options": [
            "TypeError",
            "ZeroDivisionError",
            "AssertionError",
            "EOFError"
          ],
          "answer": 1,
          "why": "Division by zero is undefined."
        },
        {
          "q": "Why define InvalidAgeError?",
          "options": [
            "To format CSV",
            "To represent a specific domain rule",
            "To pause time",
            "To parse HTML"
          ],
          "answer": 1,
          "why": "Custom errors improve meaning."
        },
        {
          "q": "Which keyword triggers InvalidAgeError?",
          "options": [
            "raise",
            "return",
            "yield",
            "match"
          ],
          "answer": 0,
          "why": "raise creates the exception."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Addition Operation",
          "brief": "Implement calculate and print 8 + 2.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "10"
            },
            {
              "type": "sourceIncludes",
              "value": "def calculate",
              "message": "Use def calculate"
            },
            {
              "type": "sourceIncludes",
              "value": "raise ValueError",
              "message": "Use raise ValueError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 10"
          ],
          "id": "u6t36p01"
        },
        {
          "kind": "code",
          "title": "Handle Calculator Division by Zero",
          "brief": "Catch division by zero and print a precise message.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Cannot divide by zero"
            },
            {
              "type": "sourceIncludes",
              "value": "except ZeroDivisionError",
              "message": "Use except ZeroDivisionError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Cannot divide by zero"
          ],
          "id": "u6t36p02"
        },
        {
          "kind": "code",
          "title": "Handle Invalid Numeric Input",
          "brief": "Convert invalid text and catch ValueError.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Enter a valid number"
            },
            {
              "type": "sourceIncludes",
              "value": "except ValueError",
              "message": "Use except ValueError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Enter a valid number"
          ],
          "id": "u6t36p03"
        },
        {
          "kind": "code",
          "title": "Reject an Unsupported Operator",
          "brief": "Raise and catch ValueError for the % operator.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Unsupported operator"
            },
            {
              "type": "sourceIncludes",
              "value": "raise ValueError",
              "message": "Use raise ValueError"
            },
            {
              "type": "sourceIncludes",
              "value": "except ValueError as error",
              "message": "Use except ValueError as error"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Unsupported operator"
          ],
          "id": "u6t36p04"
        },
        {
          "kind": "code",
          "title": "Create InvalidAgeError",
          "brief": "Reject age -2 and print the custom error.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Age must be between 0 and 120"
            },
            {
              "type": "sourceIncludes",
              "value": "class InvalidAgeError(Exception)",
              "message": "Use class InvalidAgeError(Exception)"
            },
            {
              "type": "sourceIncludes",
              "value": "raise InvalidAgeError",
              "message": "Use raise InvalidAgeError"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Age must be between 0 and 120"
          ],
          "id": "u6t36p05"
        },
        {
          "kind": "code",
          "title": "Accept a Valid Age",
          "brief": "Validate age 24 and print Valid age.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Valid age"
            },
            {
              "type": "sourceIncludes",
              "value": "def validate_age",
              "message": "Use def validate_age"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Valid age"
          ],
          "id": "u6t36p06"
        }
      ]
    },
    {
      "id": "u6t37",
      "title": "Practical Lab 4 - Email and Phone Validation",
      "summary": "Implement anchored RegEx validators and extract contact data from mixed text.",
      "notebookLM": "",
      "notes": "<h4>Practical Lab 4 - Email and Phone Validation</h4><p>Implement anchored RegEx validators and extract contact data from mixed text.</p><h4>The real-world analogy</h4><p>A contact-quality gate accepts complete valid values and rejects extra text, missing fields or wrong lengths.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Define pattern</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Validate full input</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Extract contacts</text></svg><h4>Core ideas</h4><ul><li>Use anchors for full-string validation.</li><li>Escape the email-domain period.</li><li>Use exact digit counts for phone fields.</li><li>Keep extraction patterns separate from strict validation patterns.</li></ul><h4>Worked example</h4><pre><code>import re\ndef valid_phone(value):\n    return bool(re.fullmatch(r&quot;\\d{3}-\\d{3}-\\d{4}&quot;, value))\nprint(valid_phone(&quot;555-123-4567&quot;))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>import re\ndef valid_email(value):\n    pattern = r&quot;^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$&quot;\n    return bool(re.search(pattern, value))\nprint(valid_email(&quot;student@example.com&quot;))\nprint(valid_email(&quot;student.example.com&quot;))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">True</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>re.search(r&quot;\\d{3}-\\d{3}-\\d{4}&quot;, &quot;Call 555-123-4567&quot;)</code></pre><p class=\"w__why\">search is fine for extraction but not strict validation. Use fullmatch or anchors.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>fullmatch</code></button><button data-pair=\"p1\"><code>findall</code></button><button data-pair=\"p2\"><code>\\.</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Literal dot</button><button data-pair=\"p1\">Extract all</button><button data-pair=\"p0\">Whole input</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "Which function inherently checks the complete string?",
          "options": [
            "fullmatch",
            "findall",
            "sub",
            "split"
          ],
          "answer": 0,
          "why": "fullmatch requires the entire string to match."
        },
        {
          "q": "Which token escapes the email dot?",
          "options": [
            ".",
            "\\.",
            "$",
            "?"
          ],
          "answer": 1,
          "why": "A backslash makes the period literal."
        },
        {
          "q": "How many digits are in the final US phone group?",
          "options": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": 2,
          "why": "The common source format is 3-3-4."
        },
        {
          "q": "Which function extracts all contacts from a paragraph?",
          "options": [
            "findall",
            "match only",
            "tell",
            "dump"
          ],
          "answer": 0,
          "why": "findall collects every occurrence."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Validate a Basic Email",
          "brief": "Return True for a normal email and False for a broken one.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "def valid_email",
              "message": "Use def valid_email"
            },
            {
              "type": "sourceIncludes",
              "value": "\\.[A-Za-z]",
              "message": "Use \\.[A-Za-z]"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t37p01"
        },
        {
          "kind": "code",
          "title": "Validate a Phone Number",
          "brief": "Use fullmatch to validate one correct and one short phone.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True\nFalse"
            },
            {
              "type": "sourceIncludes",
              "value": "re.fullmatch",
              "message": "Use re.fullmatch"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t37p02"
        },
        {
          "kind": "code",
          "title": "Reject Prefixed Phone Text",
          "brief": "Prove strict validation rejects Call 555-123-4567.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "False"
            },
            {
              "type": "sourceIncludes",
              "value": "^\\d{3}",
              "message": "Use ^\\d{3}"
            },
            {
              "type": "sourceIncludes",
              "value": "\\d{4}$",
              "message": "Use \\d{4}$"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: False"
          ],
          "id": "u6t37p03"
        },
        {
          "kind": "code",
          "title": "Extract Multiple Emails",
          "brief": "Extract two emails from mixed text.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['help@site.com', 'admin@site.edu']"
            },
            {
              "type": "sourceIncludes",
              "value": "re.findall",
              "message": "Use re.findall"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['help@site.com', 'admin@site.edu']"
          ],
          "id": "u6t37p04"
        },
        {
          "kind": "code",
          "title": "Extract Multiple Phones",
          "brief": "Extract two 3-3-4 phone values.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "['555-111-2222', '555-333-4444']"
            },
            {
              "type": "sourceIncludes",
              "value": "re.findall",
              "message": "Use re.findall"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: ['555-111-2222', '555-333-4444']"
          ],
          "id": "u6t37p05"
        },
        {
          "kind": "code",
          "title": "Redact Contact Numbers",
          "brief": "Replace both phone numbers with [PHONE].",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "Home [PHONE], Work [PHONE]"
            },
            {
              "type": "sourceIncludes",
              "value": "re.sub",
              "message": "Use re.sub"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: Home [PHONE], Work [PHONE]"
          ],
          "id": "u6t37p06"
        }
      ]
    },
    {
      "id": "u6t38",
      "title": "Practical Lab 5 - Create and Import a Custom Module",
      "summary": "Build a reusable utility module, protect its demonstration code and import it through both module and direct styles.",
      "notebookLM": "",
      "notes": "<h4>Practical Lab 5 - Create and Import a Custom Module</h4><p>Build a reusable utility module, protect its demonstration code and import it through both module and direct styles.</p><h4>The real-world analogy</h4><p>A well-designed toolbox exposes useful tools, labels its contents and keeps its factory test silent when borrowed.</p><svg class=\"fig\" viewBox=\"0 0 720 230\" role=\"img\" aria-label=\"Concept flow\"><text x=\"360\" y=\"28\" text-anchor=\"middle\" class=\"lbl\">Concept flow</text><rect class=\"box\" x=\"35\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"115\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Write module</text><path class=\"arrow\" d=\"M205 116 H270\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"280\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"360\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Guard demo</text><path class=\"arrow\" d=\"M450 116 H515\"><animate attributeName=\"stroke-dashoffset\" values=\"0;28\" dur=\"1.8s\" repeatCount=\"indefinite\"/></path><rect class=\"box\" x=\"525\" y=\"82\" width=\"160\" height=\"68\" rx=\"15\"/><text x=\"605\" y=\"121\" text-anchor=\"middle\" class=\"mono\">Import and use</text></svg><h4>Core ideas</h4><ul><li>Functions and constants belong at module scope.</li><li>Demo code belongs under the main guard.</li><li>Explicit imports communicate dependencies.</li><li>Packages scale the pattern to several related modules.</li></ul><h4>Worked example</h4><pre><code>from pathlib import Path\nPath(&quot;text_tools.py&quot;).write_text(\n    &quot;def word_count(text):\\n    return len(text.split())\\n&quot;\n    &quot;if __name__ == &#x27;__main__&#x27;:\\n    print(word_count(&#x27;demo text&#x27;))\\n&quot;\n)\nimport text_tools\nprint(text_tools.word_count(&quot;learn Python safely&quot;))</code></pre><div class=\"callout\"><strong>Practice-first rule.</strong> Predict the result, run the code, then explain why the file, exception, pattern or module behaved that way.</div><div class=\"w w-guess\" data-answer=\"0\"><span class=\"w__k\">Guess the output</span><p class=\"w__q\">Choose the first line produced by this topic mission.</p><pre><code>from pathlib import Path\nPath(&quot;text_tools.py&quot;).write_text(\n    &quot;def word_count(text):\\n    return len(text.split())\\n&quot;\n    &quot;if __name__ == &#x27;__main__&#x27;:\\n    print(word_count(&#x27;demo text&#x27;))\\n&quot;\n)\nimport text_tools\nprint(text_tools.word_count(&quot;learn Python safely&quot;))</code></pre><div class=\"w-guess__opts\"><button data-o=\"0\">3</button><button data-o=\"1\">Error</button><button data-o=\"2\">None</button><button data-o=\"3\">Different value</button></div><p class=\"w__why\">Run the mission and compare the result with your prediction.</p></div><div class=\"w w-spot\"><span class=\"w__k\">Spot the risk</span><p class=\"w__q\">What is unsafe or incorrect here?</p><pre><code>import tool\nfrom tool import *</code></pre><p class=\"w__why\">Mixing whole-module and wildcard imports is redundant and increases ambiguity.</p></div><div class=\"w w-match\"><span class=\"w__k\">Match the pairs</span><p class=\"w__q\">Connect the term to its purpose.</p><div class=\"w-match__grid\"><div class=\"w-match__col\"><button data-pair=\"p0\"><code>definition</code></button><button data-pair=\"p1\"><code>main guard</code></button><button data-pair=\"p2\"><code>import</code></button></div><div class=\"w-match__col\"><button data-pair=\"p2\">Consume module</button><button data-pair=\"p1\">Protected demo</button><button data-pair=\"p0\">Reusable tool</button></div></div><p class=\"w__why\">Use the vocabulary while explaining your code aloud.</p></div>",
      "mcqs": [
        {
          "q": "What extension is a module file?",
          "options": [
            ".csv",
            ".py",
            ".jpg",
            ".pkl only"
          ],
          "answer": 1,
          "why": "A normal Python source file can be a module."
        },
        {
          "q": "What protects demo code during import?",
          "options": [
            "try",
            "if __name__ == \"__main__\"",
            "finally",
            "re.fullmatch"
          ],
          "answer": 1,
          "why": "The guard distinguishes direct execution."
        },
        {
          "q": "Which call follows import text_tools?",
          "options": [
            "word_count()",
            "text_tools.word_count()",
            "import.word_count()",
            "text_tools->word_count()"
          ],
          "answer": 1,
          "why": "The module namespace prefixes the function."
        },
        {
          "q": "What should reusable module code avoid?",
          "options": [
            "Functions",
            "Unguarded interactive input and side effects",
            "Docstrings",
            "Constants"
          ],
          "answer": 1,
          "why": "Imports should be predictable and quiet."
        }
      ],
      "tasks": [
        {
          "kind": "code",
          "title": "Build text_tools.py",
          "brief": "Create word_count, import the module and count three words.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "3"
            },
            {
              "type": "sourceIncludes",
              "value": "if __name__ ==",
              "message": "Use if __name__ =="
            },
            {
              "type": "sourceIncludes",
              "value": "import text_tools",
              "message": "Use import text_tools"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 3"
          ],
          "id": "u6t38p01"
        },
        {
          "kind": "code",
          "title": "Direct Function Import",
          "brief": "Import word_count directly and use it.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "4"
            },
            {
              "type": "sourceIncludes",
              "value": "from text_tools import word_count",
              "message": "Use from text_tools import word_count"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 4"
          ],
          "id": "u6t38p02"
        },
        {
          "kind": "code",
          "title": "Add a Module Constant",
          "brief": "Create APP_NAME and print it through the module namespace.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "AbhyasLab"
            },
            {
              "type": "sourceIncludes",
              "value": "settings.APP_NAME",
              "message": "Use settings.APP_NAME"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: AbhyasLab"
          ],
          "id": "u6t38p03"
        },
        {
          "kind": "code",
          "title": "Create a Validator Module",
          "brief": "Create validators.py with is_zip and test one value.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "True"
            },
            {
              "type": "sourceIncludes",
              "value": "import validators",
              "message": "Use import validators"
            },
            {
              "type": "sourceIncludes",
              "value": "validators.is_zip",
              "message": "Use validators.is_zip"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: True"
          ],
          "id": "u6t38p04"
        },
        {
          "kind": "code",
          "title": "Build a Utility Package",
          "brief": "Create util_pack with files.py and use extension().",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": ".csv"
            },
            {
              "type": "sourceIncludes",
              "value": "from util_pack.files import extension",
              "message": "Use from util_pack.files import extension"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: .csv"
          ],
          "id": "u6t38p05"
        },
        {
          "kind": "code",
          "title": "Confirm Quiet Import",
          "brief": "Create a guarded module and show that importing it does not print Demo.",
          "starter": "",
          "checks": [
            {
              "type": "stdoutEquals",
              "value": "7"
            },
            {
              "type": "sourceIncludes",
              "value": "if __name__ ==",
              "message": "Use if __name__ =="
            },
            {
              "type": "sourceIncludes",
              "value": "import quiet",
              "message": "Use import quiet"
            }
          ],
          "level": "Level 2 - Try Yourself",
          "hints": [
            "Build one small step, run it, and then continue.",
            "Expected output begins with: 7"
          ],
          "id": "u6t38p06"
        }
      ]
    }
  ],
  "test": {
    "title": "Unit 6 Final Test - Files, Exceptions, RegEx and Modules",
    "marksPerQuestion": 1,
    "durationMinutes": 60,
    "questions": [
      {
        "q": "Which sequence describes manual file handling?",
        "options": [
          "Open, process, close",
          "Import, run, delete",
          "Read, compile, upload",
          "Create, rename, exit"
        ],
        "answer": 0,
        "why": "A manually opened file must be processed and then closed."
      },
      {
        "q": "Which mode preserves old content and adds new text?",
        "options": [
          "r",
          "w",
          "a",
          "b"
        ],
        "answer": 2,
        "why": "Append mode places the cursor at the end."
      },
      {
        "q": "What can happen when 'r' opens a missing file?",
        "options": [
          "Blank file is created",
          "FileNotFoundError",
          "Mode changes to w",
          "Nothing"
        ],
        "answer": 1,
        "why": "Read mode requires the target to exist."
      },
      {
        "q": "Which is normally a binary file?",
        "options": [
          "notes.txt",
          "data.csv",
          "photo.jpg",
          "page.html"
        ],
        "answer": 2,
        "why": "JPEG files contain encoded binary data."
      },
      {
        "q": "What does 'b' add to a mode?",
        "options": [
          "Backup",
          "Binary byte handling",
          "Browser access",
          "Buffer deletion"
        ],
        "answer": 1,
        "why": "Modes such as rb and wb operate on bytes."
      },
      {
        "q": "What does read() return?",
        "options": [
          "One string",
          "One integer",
          "A dictionary",
          "A file path"
        ],
        "answer": 0,
        "why": "read() returns text from the current cursor to the end."
      },
      {
        "q": "What does readlines() return?",
        "options": [
          "Tuple",
          "List of strings",
          "Boolean",
          "Set"
        ],
        "answer": 1,
        "why": "Each list element corresponds to one line."
      },
      {
        "q": "Which method advances one line per call?",
        "options": [
          "write()",
          "readline()",
          "tell()",
          "seek()"
        ],
        "answer": 1,
        "why": "readline() consumes the next line."
      },
      {
        "q": "What is safest for a 10 GB log?",
        "options": [
          "read()",
          "readlines()",
          "for line in file",
          "Convert to JSON"
        ],
        "answer": 2,
        "why": "Direct iteration is lazy and memory-efficient."
      },
      {
        "q": "Why is strip() often used while reading lines?",
        "options": [
          "To delete the file",
          "To remove surrounding whitespace such as newline characters",
          "To sort text",
          "To rewind"
        ],
        "answer": 1,
        "why": "strip() removes leading and trailing whitespace."
      },
      {
        "q": "What does write() not add automatically?",
        "options": [
          "A filename",
          "A newline",
          "A file object",
          "A string"
        ],
        "answer": 1,
        "why": "Newlines must be included explicitly."
      },
      {
        "q": "What happens with file.write(500) in text mode?",
        "options": [
          "Writes 500",
          "TypeError",
          "Creates 500 files",
          "Returns False"
        ],
        "answer": 1,
        "why": "Text write expects a string."
      },
      {
        "q": "Which is a modern way to write an integer?",
        "options": [
          "file.write(score)",
          "file.write(f\"{score}\")",
          "file.print(score)",
          "file.add(score)"
        ],
        "answer": 1,
        "why": "An f-string produces text."
      },
      {
        "q": "Which mode is best for an audit log?",
        "options": [
          "w",
          "a",
          "r",
          "rb"
        ],
        "answer": 1,
        "why": "Append keeps previous entries."
      },
      {
        "q": "What does opening an existing file with 'w' do?",
        "options": [
          "Protects it",
          "Truncates it",
          "Moves to the end",
          "Reads only"
        ],
        "answer": 1,
        "why": "Write mode replaces the old content."
      },
      {
        "q": "What is the main benefit of with open?",
        "options": [
          "Faster internet",
          "Automatic closing",
          "Automatic encryption",
          "Automatic sorting"
        ],
        "answer": 1,
        "why": "The context manager handles cleanup."
      },
      {
        "q": "When is the file normally closed?",
        "options": [
          "After five seconds",
          "When the with block is exited",
          "Only at shutdown",
          "After read()"
        ],
        "answer": 1,
        "why": "Leaving the indented block triggers cleanup."
      },
      {
        "q": "Does the file close if an exception occurs inside the block?",
        "options": [
          "No",
          "Yes",
          "Only on Windows",
          "Only in read mode"
        ],
        "answer": 1,
        "why": "Context management guarantees teardown."
      },
      {
        "q": "Which syntax is correct?",
        "options": [
          "with open(\"a.txt\") as f:",
          "with file open a.txt",
          "open with a.txt",
          "context file()"
        ],
        "answer": 0,
        "why": "This is the standard context-manager form."
      },
      {
        "q": "What happens when reading a closed file?",
        "options": [
          "It reopens",
          "ValueError",
          "Returns None",
          "Creates a copy"
        ],
        "answer": 1,
        "why": "I/O operations on a closed file are invalid."
      },
      {
        "q": "Where does the cursor begin in read mode?",
        "options": [
          "End",
          "Index 0",
          "Random location",
          "Index 1"
        ],
        "answer": 1,
        "why": "Read mode begins at the start."
      },
      {
        "q": "Where is the append cursor positioned for writing?",
        "options": [
          "Beginning",
          "End",
          "Middle",
          "It has no cursor"
        ],
        "answer": 1,
        "why": "Append writes after existing content."
      },
      {
        "q": "What does tell() return?",
        "options": [
          "File text",
          "Current stream position",
          "Filename",
          "Mode"
        ],
        "answer": 1,
        "why": "tell() reports the current offset."
      },
      {
        "q": "What does seek(0) do?",
        "options": [
          "Deletes text",
          "Moves to the start",
          "Closes the file",
          "Moves to the end"
        ],
        "answer": 1,
        "why": "Offset zero is the beginning."
      },
      {
        "q": "Why can a second read() be empty?",
        "options": [
          "File disappeared",
          "Cursor is at end-of-file",
          "Mode changed",
          "String is binary"
        ],
        "answer": 1,
        "why": "read() consumes data and advances the cursor."
      },
      {
        "q": "Which module interacts with folders and the OS?",
        "options": [
          "math",
          "os",
          "csv",
          "re"
        ],
        "answer": 1,
        "why": "os exposes operating-system services."
      },
      {
        "q": "What does os.path.exists return?",
        "options": [
          "A path object",
          "True or False",
          "File text",
          "A list"
        ],
        "answer": 1,
        "why": "It checks whether a path exists."
      },
      {
        "q": "Which is the modern object-oriented path API?",
        "options": [
          "pathlib",
          "calendar",
          "pickle",
          "statistics"
        ],
        "answer": 0,
        "why": "pathlib represents paths as objects."
      },
      {
        "q": "What does Path(\"report.txt\").suffix return?",
        "options": [
          "report",
          ".txt",
          "txt/report",
          "True"
        ],
        "answer": 1,
        "why": "suffix includes the extension dot."
      },
      {
        "q": "What does the / operator do between Path objects and names?",
        "options": [
          "Division",
          "Joins path components",
          "Deletes a folder",
          "Reads text"
        ],
        "answer": 1,
        "why": "Path overloads / for clean joining."
      },
      {
        "q": "Which combination is safest for a growing log?",
        "options": [
          "with + append mode",
          "read + no close",
          "write mode every event",
          "binary mode only"
        ],
        "answer": 0,
        "why": "Append preserves history and with closes safely."
      },
      {
        "q": "Which technique reads a large file lazily?",
        "options": [
          "readlines()",
          "for line in file",
          "read()",
          "str(file)"
        ],
        "answer": 1,
        "why": "File iteration processes one line at a time."
      },
      {
        "q": "Which method rewinds a stream?",
        "options": [
          "tell(0)",
          "seek(0)",
          "read(0)",
          "reset()"
        ],
        "answer": 1,
        "why": "seek changes the cursor."
      },
      {
        "q": "Which object can directly read_text and write_text?",
        "options": [
          "Path",
          "csv.reader",
          "Exception",
          "Match"
        ],
        "answer": 0,
        "why": "pathlib Path offers convenience methods."
      },
      {
        "q": "Which mode is destructive to existing text?",
        "options": [
          "a",
          "r",
          "w",
          "rb"
        ],
        "answer": 2,
        "why": "Write mode truncates existing content."
      },
      {
        "q": "What does CSV stand for?",
        "options": [
          "Computer Saved Variables",
          "Comma-Separated Values",
          "Coded String View",
          "Column Storage Version"
        ],
        "answer": 1,
        "why": "CSV represents tabular values separated by delimiters."
      },
      {
        "q": "What type is one row returned by csv.reader?",
        "options": [
          "Dictionary",
          "List",
          "Set",
          "Integer"
        ],
        "answer": 1,
        "why": "The basic reader returns a list of string fields."
      },
      {
        "q": "Which method writes several rows?",
        "options": [
          "writerows()",
          "readlines()",
          "dump()",
          "appendrows()"
        ],
        "answer": 0,
        "why": "writerows accepts an iterable of rows."
      },
      {
        "q": "Why use newline='' while writing CSV?",
        "options": [
          "Encrypt data",
          "Prevent unwanted blank rows",
          "Convert to JSON",
          "Sort fields"
        ],
        "answer": 1,
        "why": "It lets the csv module control line endings."
      },
      {
        "q": "Which data best fits CSV?",
        "options": [
          "Deeply nested game inventory",
          "Flat student score table",
          "Image bytes",
          "Python class object"
        ],
        "answer": 1,
        "why": "CSV is designed for rows and columns."
      },
      {
        "q": "What does JSON stand for?",
        "options": [
          "JavaScript Object Notation",
          "Joined System Object Network",
          "Java Source Output Name",
          "JSON Standard Object Node"
        ],
        "answer": 0,
        "why": "JSON originated from JavaScript object notation."
      },
      {
        "q": "Which Python structure most resembles a JSON object?",
        "options": [
          "Set",
          "Dictionary",
          "Tuple",
          "Generator"
        ],
        "answer": 1,
        "why": "Both use key-value pairs."
      },
      {
        "q": "Which function returns a JSON string?",
        "options": [
          "json.dump",
          "json.dumps",
          "json.load",
          "json.loads_file"
        ],
        "answer": 1,
        "why": "The s indicates string."
      },
      {
        "q": "Which function reads from an open JSON file?",
        "options": [
          "json.load",
          "json.loads",
          "json.reader",
          "json.open"
        ],
        "answer": 0,
        "why": "load consumes a file object."
      },
      {
        "q": "What happens to Python True in JSON text?",
        "options": [
          "It remains True",
          "It becomes true",
          "It becomes 1 only",
          "It is deleted"
        ],
        "answer": 1,
        "why": "JSON booleans use lowercase true and false."
      },
      {
        "q": "Which format is standard for one million stock-price rows?",
        "options": [
          "JSON",
          "CSV",
          "Pickle",
          "PNG"
        ],
        "answer": 1,
        "why": "Flat analytical data fits CSV."
      },
      {
        "q": "Which format is common for web APIs?",
        "options": [
          "CSV only",
          "JSON",
          "JPEG",
          "Python bytecode"
        ],
        "answer": 1,
        "why": "JSON is language-independent and supports nested data."
      },
      {
        "q": "Which handles nested inventories more naturally?",
        "options": [
          "CSV",
          "JSON",
          "Plain integer",
          "Binary image"
        ],
        "answer": 1,
        "why": "JSON supports arrays and objects inside each other."
      },
      {
        "q": "Which opens naturally in spreadsheet software?",
        "options": [
          "CSV",
          "Pickle",
          "Regex",
          "Module"
        ],
        "answer": 0,
        "why": "CSV maps directly to rows and columns."
      },
      {
        "q": "Which statement is accurate?",
        "options": [
          "CSV preserves every Python type automatically",
          "JSON can represent booleans and null",
          "JSON cannot contain lists",
          "CSV is always smaller regardless of data"
        ],
        "answer": 1,
        "why": "JSON has explicit basic data types."
      },
      {
        "q": "Which mode reads an image?",
        "options": [
          "r",
          "rb",
          "w",
          "a"
        ],
        "answer": 1,
        "why": "Images require binary mode."
      },
      {
        "q": "What does b\"Secret\" create?",
        "options": [
          "Boolean",
          "Byte string",
          "Backup",
          "Binary file automatically"
        ],
        "answer": 1,
        "why": "The b prefix creates bytes."
      },
      {
        "q": "What type does rb read return?",
        "options": [
          "str",
          "bytes",
          "dict",
          "float"
        ],
        "answer": 1,
        "why": "Binary reads produce bytes."
      },
      {
        "q": "Which converts bytes containing UTF-8 text to str?",
        "options": [
          "encode",
          "decode",
          "dump",
          "loads"
        ],
        "answer": 1,
        "why": "Decoding interprets bytes using an encoding."
      },
      {
        "q": "Which mode appends raw bytes?",
        "options": [
          "ab",
          "ba",
          "rw",
          "ra"
        ],
        "answer": 0,
        "why": "ab means append binary."
      },
      {
        "q": "What is serialization?",
        "options": [
          "Sorting data",
          "Converting an object to storable bytes",
          "Deleting memory",
          "Reading HTML"
        ],
        "answer": 1,
        "why": "Serialization creates a transferable representation."
      },
      {
        "q": "Which module serializes Python objects?",
        "options": [
          "pickle",
          "calendar",
          "re",
          "pathlib"
        ],
        "answer": 0,
        "why": "pickle is built for Python object serialization."
      },
      {
        "q": "Which modes are used with pickle files?",
        "options": [
          "r and w",
          "rb and wb",
          "a only",
          "text only"
        ],
        "answer": 1,
        "why": "Pickle works with binary streams."
      },
      {
        "q": "What is the major risk?",
        "options": [
          "Slow printing",
          "Untrusted pickle can execute code",
          "Cannot hold lists",
          "Only works with strings"
        ],
        "answer": 1,
        "why": "pickle.load trusts reconstruction instructions."
      },
      {
        "q": "Which is preferred for exchanging ordinary data across systems?",
        "options": [
          "Untrusted pickle",
          "JSON",
          "Memory addresses",
          "Python repr only"
        ],
        "answer": 1,
        "why": "JSON is language-neutral and safer for data interchange."
      }
    ]
  },
  "project": {
    "title": "Unit 6 Project - AbhyasLab Resilient Data Operations Toolkit",
    "summary": "Build a modular command-line toolkit that safely processes files, validates data, records errors and exports structured reports.",
    "brief": "<h4>Your mission</h4>\n<p>Build a terminal application named <strong>AbhyasLab Resilient Data Operations Toolkit</strong>. It must combine file handling, CSV, JSON, exceptions, regular expressions and reusable modules.</p>\n\n<h4>Required architecture</h4>\n<ol>\n  <li>Create a package named <code>abhyas_toolkit</code> with <code>__init__.py</code>.</li>\n  <li>Add separate modules: <code>file_tools.py</code>, <code>validators.py</code>, <code>reporting.py</code> and <code>exceptions.py</code>.</li>\n  <li>Use <code>with open(...)</code> or <code>pathlib.Path</code> for every file operation.</li>\n  <li>Support reading a text file, counting lines/words/characters, copying it and appending an audit entry.</li>\n  <li>Import student records from CSV and export a summary report to JSON.</li>\n  <li>Validate email, phone, ZIP and date fields with anchored regular expressions.</li>\n  <li>Create at least two custom exceptions, such as <code>InvalidRecordError</code> and <code>UnsafeFileError</code>.</li>\n  <li>Handle <code>FileNotFoundError</code>, <code>PermissionError</code>, <code>ValueError</code>, CSV errors and JSON decoding errors with useful messages.</li>\n  <li>Use <code>else</code> for success-only messages and <code>finally</code> for cleanup or audit completion.</li>\n  <li>Protect all module demonstrations with <code>if __name__ == \"__main__\":</code>.</li>\n  <li>Create <code>main.py</code> as the only interactive entry point.</li>\n  <li>Never load untrusted pickle files. Include this security rule in the README.</li>\n</ol>\n\n<h4>Suggested menu</h4>\n<pre><code>===========================================\nABHYASLAB RESILIENT DATA TOOLKIT\n1. Display a text file\n2. Analyze lines, words and characters\n3. Create a verified backup\n4. Import student CSV\n5. Validate student records\n6. Export JSON report\n7. Search and redact sensitive patterns\n8. View audit log\n9. Run module diagnostics\n10. Quit\n===========================================</code></pre>\n\n<h4>Required validations</h4>\n<ul>\n  <li>Email address with an anchored pattern.</li>\n  <li>Phone number in <code>123-456-7890</code> format.</li>\n  <li>Five-digit ZIP code.</li>\n  <li>Date in <code>YYYY-MM-DD</code> format.</li>\n  <li>Numeric score from 0 through 100.</li>\n</ul>\n\n<h4>Submission package</h4>\n<ul>\n  <li><code>main.py</code> and the complete <code>abhyas_toolkit/</code> package.</li>\n  <li>At least one sample CSV, JSON report, text input and generated audit log.</li>\n  <li><code>README.md</code> explaining modules, error handling, patterns and security decisions.</li>\n  <li>At least twelve test runs, including missing file, invalid JSON, invalid email, division by zero and permission-style failures.</li>\n  <li>A public GitHub repository or public Google Drive link.</li>\n</ul>\n\n<h4>Quality checklist</h4>\n<ul>\n  <li>No existing file is overwritten without an explicit user decision.</li>\n  <li>Every opened resource is closed automatically.</li>\n  <li>Broad catch-all handlers do not silently hide errors.</li>\n  <li>Validation patterns use full-string boundaries.</li>\n  <li>CSV and JSON are chosen according to data shape.</li>\n  <li>Imports are explicit and module demonstrations remain quiet.</li>\n  <li>All user-facing errors are specific and actionable.</li>\n</ul>"
  }
};

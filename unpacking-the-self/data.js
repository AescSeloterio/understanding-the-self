const lessons = [
    {
        id: 0,
        num: "01",
        slug: "intro",
        title: "Introduction to the Self",
        category: "MODULE 00 • INTRODUCTION",
        summary: "What the self is, why understanding it matters, and the key ideas that frame this topic.",
        icon: "compass",
        isLesson: true,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        subtopics: ["01. What is the self?", "02. Why self-understanding matters", "03. Key concepts of unpacking"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed">What the self is, why understanding it matters, and the key ideas that frame this topic.</p>

            <div class="my-6 aspect-video rounded-xl overflow-hidden shadow-sm border border-stone-200">
                <iframe 
                    class="w-full h-full" 
                    src="https://www.youtube.com/embed/UHwVyplU3Pg" 
                    title="Who am I? A philosophical inquiry - TED-Ed" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

            <h3 id="sub0" class="font-serif text-2xl font-bold mt-8 text-stone-900">What is the self?</h3>
            <p class="text-stone-600 leading-relaxed">The self is the totality of who a person is — both the one who experiences (the <strong>"I,"</strong> the subject that thinks, feels, and acts) and the one who is experienced (the <strong>"Me,"</strong> the object of your own reflection). Philosophers and scientists have long tried to pin it down. Socrates urged, <em>"Know thyself."</em> René Descartes found certainty in <em>"I think, therefore I am."</em> William James split the self into the knower and the known, and George Herbert Mead showed how the self is built through social interaction.</p>

            <h3 id="sub1" class="font-serif text-2xl font-bold mt-8 text-stone-900">Why does self-understanding matter?</h3>
            <p class="text-stone-600 leading-relaxed">Knowing yourself is not a luxury. It shapes the quality of your decisions, the depth of your relationships, and your mental well-being. People who understand their values make choices that fit them; people who recognise their emotions are less ruled by them; and people who can name their patterns are free to change them. To understand the self is to live more deliberately — and, as Socrates put it, a life unexamined is barely a life at all.</p>

            <h3 id="sub2" class="font-serif text-2xl font-bold mt-10 text-stone-900">Key concepts of unpacking the self</h3>
            <p class="text-stone-500 text-sm mb-6">Before exploring the dimensions, a few ideas that frame the whole journey.</p>

            <!-- 6 Key Concepts Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                    <span class="text-amber-800 font-bold text-sm">01</span>
                    <h4 class="font-serif font-bold text-stone-900 text-lg">Multifaceted</h4>
                    <p class="text-xs text-stone-600 leading-relaxed">The self is not a single thing but a constellation of dimensions — physical, emotional, intellectual, social, spiritual, and digital.</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                    <span class="text-amber-800 font-bold text-sm">02</span>
                    <h4 class="font-serif font-bold text-stone-900 text-lg">Socially constructed</h4>
                    <p class="text-xs text-stone-600 leading-relaxed">We become ourselves through others. Language, culture, and relationship are not background to the self — they are part of how it forms.</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                    <span class="text-amber-800 font-bold text-sm">03</span>
                    <h4 class="font-serif font-bold text-stone-900 text-lg">Dynamic</h4>
                    <p class="text-xs text-stone-600 leading-relaxed">The self is not fixed. It changes across time, context, and experience — you are not the same self you were ten years ago.</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                    <span class="text-amber-800 font-bold text-sm">04</span>
                    <h4 class="font-serif font-bold text-stone-900 text-lg">Embodied</h4>
                    <p class="text-xs text-stone-600 leading-relaxed">The self is not a mind floating above a body. It is lived in and through the body, which shapes how we think, feel, and act.</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                    <span class="text-amber-800 font-bold text-sm">05</span>
                    <h4 class="font-serif font-bold text-stone-900 text-lg">Narrated</h4>
                    <p class="text-xs text-stone-600 leading-relaxed">We make sense of the self by telling its story — weaving memories, values, and hopes into a sense of who we are and are becoming.</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                    <span class="text-amber-800 font-bold text-sm">06</span>
                    <h4 class="font-serif font-bold text-stone-900 text-lg">Self-aware</h4>
                    <p class="text-xs text-stone-600 leading-relaxed">Uniquely, the self can observe itself. This capacity to reflect — to think about our own thinking — is what makes "unpacking" possible.</p>
                </div>
            </div>
        `,
        quote: null // Reflection box disabled for intro!
    },
    {
        id: 1,
        num: "02",
        slug: "physical",
        title: "Physical Self",
        category: "MODULE 01 • DIMENSION",
        summary: "The body you inhabit and the way you move through the world.",
        icon: "heart",
        isLesson: true,
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
        subtopics: ["01. The body as material self", "02. Body image and self-esteem", "03. Health and embodiment", "04. Example & reflection"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed">The Physical Self is the most visible dimension of who you are — your body, its appearance, its capacities, and the way you inhabit space. It is the first self others meet, and often the first self you become aware of.</p>

            <h3 id="sub0" class="font-serif text-2xl font-bold mt-8 text-stone-900">The body as material self</h3>
            <p class="text-stone-600 leading-relaxed">William James described the body as part of the "empirical self" — the "Me" that includes everything a person can call their own. Your body is not just a vessel that carries you; it is part of what you call "yourself." When we say "my hand" or "my strength," we are already treating the body as belonging to the self.</p>

            <h3 id="sub1" class="font-serif text-2xl font-bold mt-8 text-stone-900">Body image and self-esteem</h3>
            <p class="text-stone-600 leading-relaxed">Body image is the mental picture you hold of your body and the feelings that picture carries. It is shaped by family, peers, and culture — and it does not always match reality. A healthy physical self is not a perfect body, but a body lived in with acceptance, care, and respect.</p>

            <h3 id="sub2" class="font-serif text-2xl font-bold mt-8 text-stone-900">Health and embodiment</h3>
            <p class="text-stone-600 leading-relaxed">How you treat your body — rest, movement, nourishment — shapes how you think and feel. The physical self is the foundation the other dimensions stand on. Stewardship of the body is not vanity; it is care for the ground of your whole experience.</p>

            <div id="sub3" class="mt-8 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">A SIMPLE EXAMPLE</span>
                <p class="text-stone-700 leading-relaxed">A student who trains consistently for weeks begins to walk into class a little taller. The body has not become a different body, but the self-concept has shifted — the physical self shapes confidence, mood, and presence.</p>
            </div>
        `,
        quote: "When do you feel most at home in your own body? When do you feel most disconnected from it?"
    },
    {
        id: 2,
        num: "03",
        slug: "emotional",
        title: "Emotional Self",
        category: "MODULE 02 • DIMENSION",
        summary: "The inner weather of feelings, moods, and how you meet them.",
        icon: "smile",
        isLesson: true,
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
        subtopics: ["01. Recognising emotions", "02. Emotional intelligence", "03. Regulation, not suppression", "04. Example & reflection"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed">The Emotional Self is the layer of feelings, moods, and emotional habits that color every experience. It is not about being "emotional" — it is about knowing what you feel, why you feel it, and what to do with it.</p>

            <h3 id="sub0" class="font-serif text-2xl font-bold mt-8 text-stone-900">Recognising emotions</h3>
            <p class="text-stone-600 leading-relaxed">Before you can manage an emotion, you must be able to name it. Psychologists call this "affect labelling." Simply putting a word to a feeling — "this is anxiety," "this is disappointment" — can reduce its intensity and give the self a place to stand.</p>

            <h3 id="sub1" class="font-serif text-2xl font-bold mt-8 text-stone-900">Emotional intelligence</h3>
            <p class="text-stone-600 leading-relaxed">Daniel Goleman describes emotional intelligence as a set of skills: self-awareness, self-regulation, motivation, empathy, and social skill. Together they shape how well you understand yourself and relate to others — often more powerfully than raw intellect.</p>

            <h3 id="sub2" class="font-serif text-2xl font-bold mt-8 text-stone-900">Regulation, not suppression</h3>
            <p class="text-stone-600 leading-relaxed">A healthy emotional self is not a feeling-less one. It is the capacity to feel fully without being ruled by every emotion — to make space for feelings, learn from them, and choose how to respond rather than react.</p>

            <div id="sub3" class="mt-8 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">A SIMPLE EXAMPLE</span>
                <p class="text-stone-700 leading-relaxed">Pausing before a presentation to name "I am anxious" can loosen the feeling's grip. The emotion has not disappeared, but it is no longer running the show — the self has a handle on it.</p>
            </div>
        `,
        quote: "Which emotion do you find hardest to sit with — and what might it be trying to tell you?"
    },
    {
        id: 3,
        num: "04",
        slug: "intellectual",
        title: "Intellectual Self",
        category: "MODULE 03 • DIMENSION",
        summary: "The thinking mind — curious, questioning, always becoming.",
        icon: "brain",
        isLesson: true,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
        subtopics: ["01. The thinking self", "02. A growth mindset", "03. Lifelong learning", "04. Example & reflection"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed">The Intellectual Self is the dimension of thought — how you learn, reason, wonder, and make sense of the world. It is not defined by grades or IQ, but by curiosity and a willingness to keep revising what you think you know.</p>

            <h3 id="sub0" class="font-serif text-2xl font-bold mt-8 text-stone-900">The thinking self</h3>
            <p class="text-stone-600 leading-relaxed">René Descartes famously concluded, <em>"I think, therefore I am."</em> For him, thought was the one thing that could not be doubted — the very proof of the self. The intellectual self is this inner voice that questions, reasons, and reflects.</p>

            <h3 id="sub1" class="font-serif text-2xl font-bold mt-8 text-stone-900">A growth mindset</h3>
            <p class="text-stone-600 leading-relaxed">Psychologist Carol Dweck distinguishes a fixed mindset (abilities are set) from a growth mindset (abilities develop through effort). The intellectual self thrives when it treats difficulty as a sign of growth, not a verdict on worth.</p>

            <h3 id="sub2" class="font-serif text-2xl font-bold mt-8 text-stone-900">Lifelong learning</h3>
            <p class="text-stone-600 leading-relaxed">The intellectual self is never finished. It deepens through reading, questioning, conversation, and reflection. To keep learning is to keep becoming — the mind, like the self, is something you build.</p>

            <div id="sub3" class="mt-8 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">A SIMPLE EXAMPLE</span>
                <p class="text-stone-700 leading-relaxed">Choosing to see a difficult subject as "not yet mastered" rather than "never understood" changes how a student engages with it. The same challenge, framed differently, becomes a path instead of a wall.</p>
            </div>
        `,
        quote: "What is a belief you have changed your mind about? What helped you change it?"
    },
    {
        id: 4,
        num: "05",
        slug: "social",
        title: "Social Self",
        category: "MODULE 04 • DIMENSION",
        summary: "The self that exists in relation — shaped by and shaping others.",
        icon: "users",
        isLesson: true,
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        subtopics: ["01. The looking-glass self", "02. Self as role", "03. Belonging and identity", "04. Example & reflection"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed">The Social Self is the dimension of relationship. We do not become ourselves alone; we become ourselves in and through others — in the roles we play, the groups we belong to, and the reflections others offer back to us.</p>

            <h3 id="sub0" class="font-serif text-2xl font-bold mt-8 text-stone-900">The looking-glass self</h3>
            <p class="text-stone-600 leading-relaxed">Sociologist Charles Cooley argued that we come to know ourselves through others. We imagine how we appear to people, imagine their judgment of that appearance, and develop a feeling about ourselves in response. The social self is, in part, a self seen through a mirror held by others.</p>

            <h3 id="sub1" class="font-serif text-2xl font-bold mt-8 text-stone-900">Self as role</h3>
            <p class="text-stone-600 leading-relaxed">George Herbert Mead described the self as having two sides: the "I" (the spontaneous, acting self) and the "Me" (the self as seen from the outside, shaped by the "generalized other" — society's expectations). We are constantly negotiating between who we feel we are and who we are expected to be.</p>

            <h3 id="sub2" class="font-serif text-2xl font-bold mt-8 text-stone-900">Belonging and identity</h3>
            <p class="text-stone-600 leading-relaxed">The groups we belong to — family, friends, culture, nation — give us language for who we are. Belonging can ground the self, but it can also constrain it. A mature social self knows which reflections to take in and which to set down.</p>

            <div id="sub3" class="mt-8 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">A SIMPLE EXAMPLE</span>
                <p class="text-stone-700 leading-relaxed">You may speak, act, and even feel differently with family than with close friends. Neither version is "fake" — the social self is genuinely context-dependent, and noticing that is the beginning of self-understanding.</p>
            </div>
        `,
        quote: "Which relationship has most shaped how you see yourself — for better or worse?"
    },
    {
        id: 5,
        num: "06",
        slug: "spiritual",
        title: "Spiritual Self",
        category: "MODULE 05 • DIMENSION",
        summary: "The search for meaning, value, and what endures.",
        icon: "sparkles",
        isLesson: true,
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
        subtopics: ["01. The inner core", "02. Meaning and purpose", "03. Practice and transcendence", "04. Example & reflection"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed">The Spiritual Self is not necessarily about religion. It is the dimension concerned with meaning, purpose, values, and the things that feel larger than the individual self. It asks: what matters, and why?</p>

            <h3 id="sub0" class="font-serif text-2xl font-bold mt-8 text-stone-900">The inner core</h3>
            <p class="text-stone-600 leading-relaxed">William James called the spiritual self the most enduring part of who we are — our inner judgments, conscience, and capacity to reflect on ourselves. It is the seat of our values and the quiet voice that asks whether we are living in line with them.</p>

            <h3 id="sub1" class="font-serif text-2xl font-bold mt-8 text-stone-900">Meaning and purpose</h3>
            <p class="text-stone-600 leading-relaxed">Psychiatrist Viktor Frankl, writing from the camps of the Second World War, argued that the deepest human drive is not pleasure but meaning. The spiritual self is sustained by a sense of purpose — something worth suffering for, something that makes life feel like a story rather than a sequence of events.</p>

            <h3 id="sub2" class="font-serif text-2xl font-bold mt-8 text-stone-900">Practice and transcendence</h3>
            <p class="text-stone-600 leading-relaxed">For some, the spiritual self is nurtured through prayer or worship; for others, through meditation, nature, art, or service to others. What these share is a movement beyond the small self — toward connection, gratitude, or awe.</p>

            <div id="sub3" class="mt-8 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">A SIMPLE EXAMPLE</span>
                <p class="text-stone-700 leading-relaxed">A person who volunteers regularly may describe it not as duty or sacrifice, but as alignment — an activity that expresses what they find most meaningful. The spiritual self is where action and value meet.</p>
            </div>
        `,
        quote: "What would you say gives your life its deepest sense of meaning?"
    },
    {
        id: 6,
        num: "07",
        slug: "digital",
        title: "Digital Self",
        category: "MODULE 06 • DIMENSION",
        summary: "Who you are online — curated, connected, and traced.",
        icon: "globe",
        isLesson: true,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        subtopics: ["01. The virtual persona", "02. The digital footprint", "03. Online and offline selves", "04. Example & reflection"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed">The Digital Self is the newest dimension of the self — the version of you that exists online. Through profiles, posts, and traces, we now carry a self that lives on screens, one that is curated, permanent, and seen by people we may never meet.</p>

            <h3 id="sub0" class="font-serif text-2xl font-bold mt-8 text-stone-900">The virtual persona</h3>
            <p class="text-stone-600 leading-relaxed">Online, we choose what to show. A profile is rarely the whole self — it is a curated performance, a highlight reel. The digital self is not false, but it is selective, and the gap between the online self and the offline self is worth examining.</p>

            <h3 id="sub1" class="font-serif text-2xl font-bold mt-8 text-stone-900">The digital footprint</h3>
            <p class="text-stone-600 leading-relaxed">What we post, like, and search leaves traces that can outlive the moment. The digital self has a permanence the offline self rarely does. Understanding this dimension means recognising that online actions are real actions with real, lasting consequences.</p>

            <h3 id="sub2" class="font-serif text-2xl font-bold mt-8 text-stone-900">Online and offline selves</h3>
            <p class="text-stone-600 leading-relaxed">A healthy digital self is not an absent one — it is an integrated one. It asks whether the person you present online reflects who you are offline, and whether your digital life supports or erodes the self you want to be.</p>

            <div id="sub3" class="mt-8 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">A SIMPLE EXAMPLE</span>
                <p class="text-stone-700 leading-relaxed">The version of you on social media may be more polished than the one at the dinner table. Noticing that gap is the first step toward an integrated digital self — one that uses technology without being used by it.</p>
            </div>
        `,
        quote: "Does your online self reflect who you are offline? Where do the two diverge?"
    },
    {
        id: 7,
        num: "08",
        slug: "references",
        title: "References & Sources",
        category: "RESOURCES",
        summary: "The works referenced throughout this topic, for further reading.",
        icon: "book-open",
        isLesson: false,
        image: null,
        subtopics: ["01. Foundational Texts", "02. Institutional Resources"],
        content: `
            <p class="text-stone-600 text-lg leading-relaxed mb-6">Below are the works referenced throughout this topic, provided for further reading and academic inquiry.</p>

            <div class="space-y-3">
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">01</span>
                    <p class="text-sm text-stone-700"><strong>Socrates, in Plato.</strong> <em>Apology</em>. The injunction "Know thyself" and "the unexamined life is not worth living."</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">02</span>
                    <p class="text-sm text-stone-700"><strong>Descartes, R. (1637).</strong> <em>Discourse on the Method</em>. The proposition "I think, therefore I am."</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">03</span>
                    <p class="text-sm text-stone-700"><strong>James, W. (1890).</strong> <em>The Principles of Psychology</em>. The distinction between the "I" (knower) and the "Me" (known), and the spiritual self.</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">04</span>
                    <p class="text-sm text-stone-700"><strong>Mead, G. H. (1934).</strong> <em>Mind, Self, and Society</em>. The "I" and the "Me," and the self as socially constructed.</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">05</span>
                    <p class="text-sm text-stone-700"><strong>Cooley, C. H. (1902).</strong> <em>Human Nature and the Social Order</em>. The looking-glass self.</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">06</span>
                    <p class="text-sm text-stone-700"><strong>Goleman, D. (1995).</strong> <em>Emotional Intelligence: Why It Can Matter More Than IQ</em>.</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">07</span>
                    <p class="text-sm text-stone-700"><strong>Dweck, C. S. (2006).</strong> <em>Mindset: The New Psychology of Success</em>. Fixed vs. growth mindset.</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">08</span>
                    <p class="text-sm text-stone-700"><strong>Frankl, V. (1946).</strong> <em>Man's Search for Meaning</em>. The will to meaning and the spiritual self.</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">09</span>
                    <p class="text-sm text-stone-700"><strong>Turkle, S. (2011).</strong> <em>Alone Together: Why We Expect More from Technology and Less from Each Other</em>. The digital self.</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
                    <span class="font-bold text-amber-800 text-sm">10</span>
                    <p class="text-sm text-stone-700"><strong>University of Santo Tomas.</strong> <em>Understanding the Self (GEED 10023)</em> topic materials and frameworks on "Unpacking the Self."</p>
                </div>
            </div>
        `,
        quote: null
    }
];
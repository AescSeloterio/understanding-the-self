const STORAGE_KEY = 'unpacking_self_progress';
const REFLECTIONS_KEY = 'unpacking_self_reflections';

// Load saved progress state
let completedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || new Array(7).fill(false);
let reflectionsState = JSON.parse(localStorage.getItem(REFLECTIONS_KEY)) || {};

let activeView = 'dashboard';

function initApp() {
    renderSidebar();
    renderView();
    setupMobileMenu();
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedState));
}

function saveReflection(lessonId) {
    const input = document.getElementById(`reflectionInput_${lessonId}`);
    if (input) {
        reflectionsState[lessonId] = input.value;
        localStorage.setItem(REFLECTIONS_KEY, JSON.stringify(reflectionsState));
        
        const saveBtn = document.getElementById(`saveBtn_${lessonId}`);
        if (saveBtn) {
            saveBtn.innerText = 'Saved!';
            saveBtn.classList.replace('bg-stone-900', 'bg-emerald-600');
            setTimeout(() => {
                saveBtn.innerText = 'Save reflection';
                saveBtn.classList.replace('bg-emerald-600', 'bg-stone-900');
            }, 2000);
        }
    }
}

function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    nav.innerHTML = lessons.map((item, idx) => {
        const isActive = activeView === idx;
        const isDone = item.isLesson ? completedState[idx] : false;
        
        return `
            <button onclick="navigateTo(${idx})" class="w-full text-left flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition ${
                isActive ? 'bg-stone-900 text-white font-medium' : 'text-stone-600 hover:bg-stone-100'
            }">
                <div class="flex items-center gap-3 overflow-hidden">
                    <span class="text-xs shrink-0 ${isActive ? 'opacity-60' : 'text-stone-400'}">${item.num}</span>
                    <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0"></i>
                    <span class="truncate">${item.title}</span>
                </div>
                ${isDone ? `<i data-lucide="check" class="w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-400' : 'text-emerald-600'}"></i>` : ''}
            </button>
        `;
    }).join('');

    lucide.createIcons();
    updateProgress();
}

function renderView() {
    const main = document.getElementById('mainContent');
    if (!main) return;

    if (activeView === 'dashboard') {
        const coreLessons = lessons.filter(l => l.isLesson);

        main.innerHTML = `
            <div class="reveal space-y-12">
                <section class="space-y-6">
                    <span class="text-xs font-semibold tracking-widest uppercase text-stone-400">TOPIC</span>
                    <h1 class="font-serif text-5xl md:text-6xl font-extrabold text-stone-900 leading-tight">Unpacking the Self</h1>
                    <p class="text-lg text-stone-600 max-w-2xl leading-relaxed">
                        A guided topic through the six dimensions of the self — physical, emotional, intellectual, social, spiritual, and digital. Read, reflect, and mark each lesson complete as you go.
                    </p>
                    <div class="flex flex-wrap gap-6 text-sm text-stone-500 pt-2">
                        <span class="flex items-center gap-2"><i data-lucide="layers" class="w-4 h-4"></i> 7 lessons</span>
                        <span class="flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4"></i> Self-paced</span>
                    </div>
                    <div>
                        <button onclick="navigateTo(0)" class="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-800 transition">
                            Start learning <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </button>
                    </div>
                </section>

                <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col gap-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-serif text-lg font-bold">Your progress</h3>
                        <span class="text-sm text-stone-500"><span id="dashCompletedCount">0</span> of 7 complete</span>
                    </div>
                    <div class="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                        <div id="dashProgressBar" class="bg-amber-600 h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
                    </div>
                    <div class="flex justify-between items-center text-sm pt-2">
                        <span id="dashPercentText" class="text-stone-500">0% complete</span>
                        <button onclick="navigateTo(getNextIncompleteIndex())" class="text-amber-800 font-medium hover:underline flex items-center gap-1">
                            Continue <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>

                <section class="space-y-6">
                    <h2 class="font-serif text-3xl font-bold">What you'll learn</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${coreLessons.map((item, idx) => `
                            <button onclick="navigateTo(${idx})" class="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-amber-600 transition text-left flex items-center gap-4 group">
                                <div class="w-6 h-6 rounded-full border-2 border-stone-300 flex items-center justify-center shrink-0 group-hover:border-amber-600">
                                    ${completedState[idx] ? '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>' : ''}
                                </div>
                                <div>
                                    <h4 class="font-serif font-bold text-stone-900 group-hover:text-amber-800 transition">${item.title}</h4>
                                    <p class="text-xs text-stone-400">Lesson ${item.num}</p>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                </section>
            </div>
        `;
    } else {
        const item = lessons[activeView];
        const prevItem = lessons[activeView - 1];
        const nextItem = lessons[activeView + 1];
        const isCompleted = item.isLesson ? completedState[activeView] : false;
        const savedReflection = reflectionsState[item.id] || '';

        main.innerHTML = `
            <div class="reveal space-y-10">
                <div>
                    <button onclick="navigateTo('dashboard')" class="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 mb-4 transition">
                        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Topic outline
                    </button>
                    <span class="text-xs font-semibold tracking-wider text-stone-400 uppercase">${item.category}</span>
                    <h1 class="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 mt-1">${item.title}</h1>
                    <p class="text-stone-600 mt-2 text-base md:text-lg">${item.summary}</p>
                    
                    ${item.isLesson ? `
                        <div class="mt-4">
                            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium transition ${
                                isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200/60 text-stone-600'
                            }">
                                <i data-lucide="${isCompleted ? 'check-circle' : 'file-text'}" class="w-3.5 h-3.5"></i>
                                <span>${isCompleted ? 'Completed' : 'In progress'}</span>
                            </span>
                        </div>
                    ` : ''}
                </div>

                ${item.image ? `
                    <div class="w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-sm border border-stone-200">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                    </div>
                ` : ''}

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-2">
                    <div class="lg:col-span-1 space-y-3">
                        <h5 class="text-xs font-bold text-stone-400 uppercase tracking-wider">IN THIS LESSON</h5>
                        <ul class="space-y-2 text-xs font-medium text-stone-600">
                            ${item.subtopics.map(sub => `
                                <li class="py-1 border-b border-stone-100 last:border-0">${sub}</li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="lg:col-span-3 space-y-6">
                        ${item.content}

                        ${item.quote ? `
                            <div class="bg-[#F6F3EC] border-l-4 border-amber-600 p-4 sm:p-6 rounded-r-2xl space-y-4 my-8">
                                <span class="text-xs font-bold tracking-widest text-amber-800 uppercase">REFLECT</span>
                                <blockquote class="font-serif text-lg sm:text-xl italic text-stone-800">
                                    "${item.quote}"
                                </blockquote>

                                <div class="space-y-2 pt-2">
                                    <textarea id="reflectionInput_${item.id}" rows="4" placeholder="Write your private reflection here..." class="w-full p-3 sm:p-4 rounded-xl border border-stone-300 bg-white text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-y">${savedReflection}</textarea>
                                    
                                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-1">
                                        <p class="text-[11px] text-stone-500 flex items-center gap-1">
                                            <i data-lucide="lock" class="w-3 h-3 shrink-0"></i> Saved privately on this device.
                                        </p>
                                        <button onclick="saveReflection(${item.id})" id="saveBtn_${item.id}" class="px-4 py-1.5 bg-stone-900 text-white text-xs rounded-full hover:bg-stone-800 transition self-end sm:self-auto">
                                            Save reflection
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${item.isLesson ? `
                            <div class="pt-6 border-t border-stone-200">
                                <button onclick="toggleComplete(${item.id})" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition ${
                                    isCompleted ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-stone-900 text-white hover:bg-stone-800'
                                }">
                                    <i data-lucide="${isCompleted ? 'check' : 'check-circle'}" class="w-4 h-4"></i>
                                    <span>${isCompleted ? 'Completed' : 'Mark as complete'}</span>
                                </button>
                            </div>
                        ` : ''}

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-stone-200 mt-8">
                            ${prevItem ? `
                                <button onclick="navigateTo(${prevItem.id})" class="p-4 bg-white rounded-2xl border border-stone-200 text-left hover:border-amber-600 transition space-y-1">
                                    <span class="text-xs text-stone-400 flex items-center gap-1"><i data-lucide="arrow-left" class="w-3 h-3"></i> Previous</span>
                                    <p class="font-serif font-bold text-stone-900 truncate">${prevItem.title}</p>
                                </button>
                            ` : '<div></div>'}

                            ${nextItem ? `
                                <button onclick="navigateTo(${nextItem.id})" class="p-4 bg-white rounded-2xl border border-stone-200 text-right hover:border-amber-600 transition space-y-1">
                                    <span class="text-xs text-stone-400 flex items-center justify-end gap-1">Next <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
                                    <p class="font-serif font-bold text-stone-900 truncate">${nextItem.title}</p>
                                </button>
                            ` : '<div></div>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    lucide.createIcons();
    triggerScrollFadeIn();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.add('-translate-x-full');
    if (sidebarOverlay) sidebarOverlay.classList.add('hidden');
}

function navigateTo(target) {
    activeView = target;
    closeMobileSidebar();
    renderSidebar();
    renderView();
}

function toggleComplete(id) {
    completedState[id] = !completedState[id];
    saveProgress();
    renderSidebar();
    renderView();
}

function getNextIncompleteIndex() {
    const idx = completedState.findIndex(val => !val);
    return idx === -1 ? 0 : idx;
}

function updateProgress() {
    const count = completedState.filter(Boolean).length;
    const percent = Math.round((count / 7) * 100);

    const sidebarCount = document.getElementById('sidebarProgressCount');
    const topPercent = document.getElementById('topPercentText');
    const topBar = document.getElementById('topProgressBar');

    if (sidebarCount) sidebarCount.innerText = `${count}/7`;
    if (topPercent) topPercent.innerText = `${percent}%`;
    if (topBar) topBar.style.width = `${percent}%`;

    const dashCount = document.getElementById('dashCompletedCount');
    const dashBar = document.getElementById('dashProgressBar');
    const dashPercent = document.getElementById('dashPercentText');

    if (dashCount) dashCount.innerText = count;
    if (dashBar) dashBar.style.width = `${percent}%`;
    if (dashPercent) dashPercent.innerText = `${percent}% complete`;
}

function triggerScrollFadeIn() {
    setTimeout(() => {
        const elements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    }, 50);
}

function openOutlineModal() {
    const list = document.getElementById('outlineList');
    list.innerHTML = lessons.map((item, idx) => `
        <div onclick="navigateTo(${idx}); closeOutlineModal();" class="p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-600 transition cursor-pointer flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
                    <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                </div>
                <div>
                    <span class="text-xs text-stone-400 font-semibold uppercase">${item.isLesson ? 'LESSON ' + item.num : 'RESOURCE'}</span>
                    <h4 class="font-serif font-bold text-stone-900">${item.title}</h4>
                </div>
            </div>
            ${item.isLesson ? `
                <span class="text-xs font-semibold ${completedState[idx] ? 'text-emerald-600' : 'text-amber-800'} flex items-center gap-1">
                    ${completedState[idx] ? '<i data-lucide="check" class="w-3.5 h-3.5"></i> Complete' : 'Start →'}
                </span>
            ` : `
                <span class="text-xs text-stone-400 font-medium">View →</span>
            `}
        </div>
    `).join('');
    
    document.getElementById('outlineModal').classList.remove('hidden');
    lucide.createIcons();
}

function closeOutlineModal() {
    document.getElementById('outlineModal').classList.add('hidden');
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
        if (sidebar) sidebar.classList.remove('-translate-x-full');
        if (sidebarOverlay) sidebarOverlay.classList.remove('hidden');
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);
}

window.addEventListener('DOMContentLoaded', initApp);
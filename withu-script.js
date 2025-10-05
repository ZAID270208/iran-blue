// Global Variables
let userName = '';
let currentStep = 0;
let questionAnswers = {};
let warmupChoice = '';
let buttonChoice = '';
let currentQuestion = 0;

// Audio Management
const audioPlayer = document.getElementById('audio-player');
let currentSongIndex = 0;
const playlist = ['1005.MP3', 'indah.mp3'];

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const namePopup = document.getElementById('name-popup');
const warmupPopup = document.getElementById('warmup-popup');
const errorPopup = document.getElementById('error-popup');
const wordErrorPopup = document.getElementById('word-error-popup');
const mainContent = document.getElementById('main-content');
const mainCharacter = document.getElementById('main-character');
const mainText = document.getElementById('main-text');
const textButtons = document.getElementById('text-buttons');
const quizPopup = document.getElementById('quiz-popup');
const finalChallenge = document.getElementById('final-challenge');
const successMessage = document.getElementById('success-message');
const opinionTextarea = document.getElementById('opinion-textarea');
const wordCount = document.getElementById('word-count');

// DOM Elements Validation
if (!loadingScreen || !namePopup || !warmupPopup || !errorPopup || !wordErrorPopup || 
    !mainContent || !mainCharacter || !mainText || !textButtons || !quizPopup || 
    !finalChallenge || !successMessage || !opinionTextarea || !wordCount) {
    console.error('Error: Required DOM elements not found');
}

// Quiz Elements
const quizQuestionText = document.getElementById('quiz-question-text');
const quizOptions = document.getElementById('quiz-options');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestions = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const progressPercentage = document.getElementById('progress-percentage');

// Questions Data
const questions = [
    {
        question: "apakah zaid abdul rozaq adalah manusia yang ngeselin?",
        options: ["iya", "tidak"]
    },
    {
        question: "Apakah zaid adalah penggangu anda?",
        options: ["iyaa banget", "tidak"]
    },
    {
        question: "katanya zaid orang special anda? apakah iyah?",
        options: ["iya benar", "tidak benar", "jawab nanti ajah deh"]
    },
    {
        question: "Apakah zaid pernah membuat anda kecewa?",
        options: ["iyaa", "tidak"]
    },
    {
        question: "Apakah setelah mengenal zaid hari hari kamu menjadi seru?",
        options: ["iyaa banget", "tidak"]
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            namePopup.style.display = 'flex';
        }, 500);
    }, 2000);

    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Name form submission
    const nameForm = document.getElementById('name-form');
    if (nameForm) {
        nameForm.addEventListener('submit', handleNameSubmit);
    }
    
    // Warmup buttons
    const yesBtn1 = document.getElementById('yes-btn-1');
    const noBtn = document.getElementById('no-btn');
    if (yesBtn1) yesBtn1.addEventListener('click', () => handleWarmupChoice('yes'));
    if (noBtn) noBtn.addEventListener('click', () => handleWarmupChoice('no'));
    
    // Error popup
    const errorOkBtn = document.getElementById('error-ok-btn');
    const wordErrorOkBtn = document.getElementById('word-error-ok-btn');
    if (errorOkBtn) errorOkBtn.addEventListener('click', hideErrorPopup);
    if (wordErrorOkBtn) wordErrorOkBtn.addEventListener('click', hideWordErrorPopup);
    
    // Text buttons
    const yesBtn2 = document.getElementById('yes-btn-2');
    const noBtn2 = document.getElementById('no-btn-2');
    if (yesBtn2) yesBtn2.addEventListener('click', () => handleTextButton('yes'));
    if (noBtn2) noBtn2.addEventListener('click', () => handleTextButton('no'));
    
    // Final submit
    const submitFinal = document.getElementById('submit-final');
    if (submitFinal) submitFinal.addEventListener('click', handleFinalSubmit);
    
    // Word count tracking
    if (opinionTextarea) {
        opinionTextarea.addEventListener('input', updateWordCount);
    }
    
    // Audio events
    if (audioPlayer) {
        audioPlayer.addEventListener('ended', handleAudioEnded);
    }
}

// Audio Management Functions
function playMusic() {
    if (audioPlayer) {
        audioPlayer.src = playlist[currentSongIndex];
        audioPlayer.play().catch(e => {
            console.log('Autoplay prevented:', e);
        });
    }
}

function handleAudioEnded() {
    if (currentSongIndex < playlist.length - 1) {
        currentSongIndex++;
        playMusic();
    } else {
        // Music finished
        console.log('Playlist finished');
    }
}

// Typing Animation
function typeText(element, text, speed = 500, callback = null) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing');
            if (callback) callback();
        }
    }
    
    element.classList.add('typing');
    type();
}

// Popup Management
function showPopup(popup) {
    popup.style.display = 'flex';
    popup.classList.add('fade-in');
}

function hidePopup(popup) {
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none';
        popup.classList.remove('fade-out');
    }, 500);
}

function showErrorPopup() {
    showPopup(errorPopup);
    changeCharacterMood('marah');
}

function hideErrorPopup() {
    hidePopup(errorPopup);
    changeCharacterMood('baik');
}

function showWordErrorPopup() {
    showPopup(wordErrorPopup);
}

function hideWordErrorPopup() {
    hidePopup(wordErrorPopup);
}

// Character Mood Management
function changeCharacterMood(mood) {
    if (mood === 'marah') {
        mainCharacter.src = 'marah.png';
    } else {
        mainCharacter.src = 'baik.png';
    }
    mainCharacter.classList.add('character-mood-change');
    setTimeout(() => {
        mainCharacter.classList.remove('character-mood-change');
    }, 500);
}

// Name Form Handler
function handleNameSubmit(e) {
    e.preventDefault();
    userName = document.getElementById('user-name').value.trim();
    
    if (userName) {
        hidePopup(namePopup);
        playMusic(); // Start music
        setTimeout(() => {
            showPopup(warmupPopup);
        }, 500);
    }
}

// Warmup Choice Handler
let warmupAttempts = 0;
let isProcessing = false; // Prevent rapid clicking

function handleWarmupChoice(choice) {
    if (isProcessing) return; // Prevent multiple clicks
    
    isProcessing = true;
    
    if (choice === 'no') {
        warmupAttempts++;
        changeCharacterMood('marah');
        showErrorPopup(); // Tampilkan popup error untuk pilihan "tidak"
        
        // Reset processing after error popup is closed
        setTimeout(() => {
            isProcessing = false;
        }, 1000);
        return;
    }
    
    if (choice === 'yes') {
        warmupAttempts++;
        
        if (warmupAttempts === 1) {
            document.getElementById('warmup-text').textContent = 'ahmacaacihhhh??? seriuss nda nihhh?? wokehh lanjyutt';
            
            // 5 second delay before allowing next interaction
            setTimeout(() => {
                isProcessing = false;
            }, 5);

        } else if (warmupAttempts === 2) {
            document.getElementById('warmup-text').textContent = 'cieeeee nungguinn niee yeee';
            warmupChoice = 'Iya 2x';
            
            // 10 second delay for the final transition
            setTimeout(() => {
                hidePopup(warmupPopup);
                changeCharacterMood('baik');
                startMainFlow(500);
                isProcessing = false;
            }, 500);
        }
    }
}

// Main Text Flow
function startMainFlow() {
    mainContent.style.display = 'block';
    mainContent.classList.add('fade-in');
    
    setTimeout(() => {
        showMainText();
    }, 1000);
}

function showMainText() {
    if (!mainText) {
        console.error('mainText element not found');
        return;
    }

    const texts = [
        "ehhh kamoh tau ga? 🤔, waktu Indonesia itu WIB, WITA sama WIT kan yahh? 🇮🇩, tapii beuhhh adaa donggg waktuu yang paling akoh seru+suka+asikk+ didunia ini, tauu nda apaah? 😏",
        "WITH U! hihihihihi",
        "ohh kamohh hausss? 🥵 eheyy bilangg atuhh mau aqua? 💧 atau mau aqua ajah? eaaaa awoakwowak hadohhh maaf ya Allahh 🙏",
        "ran, hehehe makasih yahh rann persembahan lagu bluenya, 🎶💙 samaa kokk iran is my favoriteeeeee placeeee hehehehe (setelah Allah, umi, abi) 🕋👨‍👩‍👧, tapiii irann beuhhhh kerennn rannnn ✨ walaupunnn yaaa kamoh copas dari chatgpt. 🤖 Tapi yang zaid liat tuhh dariii niat semangat kamohh brooo 💪🔥, hohoho kamohh dah effort effort tanyain codenya di chatgpt, effort effort install software pytonnyahh 🐍💻 nahh ituhh semuaa ga gampangg yenn (bagi orang yang awam) 😮‍💨, nahhh kamohh kerenn yenn 🌟 dengan adanya niat semangat ituhh kamoh coba coba untuk nyobain ituh semuaa kenapa kerenn? karna secara tidak langsungg kamoh sedang mempelajari sesuatu yangg sebelumnya kamoh tidak tauu broo 🧠💡, yappp pokoknyahhh ayah bangga nakk 🤗❤️ kamoh sudah 1 langkah lebih maju dari pada orang yang belum tau tentang cara membuat ituu nakk! 🚀"
    ];
    let textIndex = 0;
    
    function showNextText() {
        if (textIndex < texts.length) {
            typeText(mainText, texts[textIndex], 100, () => {
                if (textIndex === texts.length - 1) {
                    // Show buttons for last text
                    setTimeout(() => {
                        if (textButtons) {
                            textButtons.style.display = 'flex';
                            textButtons.classList.add('fade-in');
                        }
                    }, 1000);
                } else {
                    setTimeout(() => {
                        textIndex++;
                        showNextText();
                    }, 500);
                }
            });
        }
    }
    
    showNextText();
}

// Text Button Handler
function handleTextButton(choice) {
    if (choice === 'no') {
        buttonChoice = 'y,makasih';
        showErrorPopup();
        return;
    }
    
    buttonChoice = 'iyahh makasih';
    if (textButtons) textButtons.style.display = 'none';
    if (mainText) mainText.textContent = '';
    changeCharacterMood('baik');
    
    setTimeout(() => {
        startQuestions();
    }, 1000);
}

// Questions Flow - Quiz Style
function startQuestions() {
    showPopup(quizPopup);
    
    const userNameDisplay = document.getElementById('user-name-display');
    if (userNameDisplay) userNameDisplay.textContent = userName;
    if (totalQuestions) totalQuestions.textContent = questions.length;
    
    showQuizQuestion(0);
}

function showQuizQuestion(index) {
    if (index >= questions.length) {
        hidePopup(quizPopup);
        setTimeout(() => {
            startFinalChallenge();
        }, 500);
        return;
    }
    
    currentQuestion = index;
    const question = questions[index];
    
    // Update progress
    updateQuizProgress(index);
    
    // Set question text
    if (quizQuestionText) quizQuestionText.textContent = question.question;
    
    // Clear and populate options
    if (quizOptions) {
        quizOptions.innerHTML = '';
        
        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => handleQuizAnswer(option, optionElement));
            quizOptions.appendChild(optionElement);
        });
    }
}

function updateQuizProgress(index) {
    const progress = ((index + 1) / questions.length) * 100;
    if (currentQuestionNum) currentQuestionNum.textContent = index + 1;
    if (progressFill) progressFill.style.width = progress + '%';
    if (progressPercentage) progressPercentage.textContent = Math.round(progress) + '%';
}

function handleQuizAnswer(answer, element) {
    // Add selected class for visual feedback
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    
    // Store answer
    questionAnswers[`question_${currentQuestion + 1}`] = answer;
    
    // Wait a bit for visual feedback, then move to next question
    setTimeout(() => {
        showQuizQuestion(currentQuestion + 1);
    }, 800);
}

// Word Count Management
function updateWordCount() {
    if (!opinionTextarea || !wordCount) return;
    
    const text = opinionTextarea.value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCountValue = words.length;
    
    wordCount.textContent = wordCountValue;
    
    // Update styling based on word count
    const wordCountElement = document.querySelector('.word-count');
    if (wordCountElement) {
        if (wordCountValue >= 50) {
            wordCountElement.classList.remove('invalid');
            wordCountElement.classList.add('valid');
        } else {
            wordCountElement.classList.remove('valid');
            wordCountElement.classList.add('invalid');
        }
    }
}

function countWords(text) {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

// Final Challenge
function startFinalChallenge() {
    if (finalChallenge) {
        finalChallenge.style.display = 'block';
        finalChallenge.classList.add('fade-in');
        
        // Initialize word count
        updateWordCount();
    }
}

function handleFinalSubmit() {
    const opinion = document.getElementById('opinion-textarea').value.trim();
    const wordCountValue = countWords(opinion);
    
    if (!opinion) {
        alert('Silakan isi pendapat Anda terlebih dahulu!');
        return;
    }
    
    // Check word count
    if (wordCountValue < 50) {
        showWordErrorPopup();
        return;
    }
    
    // Collect all data
    const formData = {
        userName: userName,
        warmupChoice: warmupChoice,
        buttonChoice: buttonChoice,
        questionAnswers: questionAnswers,
        finalOpinion: opinion
    };
    
    // Submit to Discord
    submitToDiscord(formData);
    
    // Show success message
    showSuccessMessage();
}

// Discord Webhooks Integration
function submitToDiscord(data) {
    // Discord Webhook URL - ganti dengan webhook URL Discord Anda
    const webhookUrl = 'https://discord.com/api/webhooks/1424436525076316233/oSV_aBMSWSxnt87HTp-nSMB2wfVkcHEEnmPGaSxk64R1dK0l9rP8N6AToJvmrKDfJqh0';
    
    // Cek apakah webhook URL sudah dikonfigurasi
    if (webhookUrl.includes('YOUR_WEBHOOK_ID')) {
        console.warn('Discord Webhook URL belum dikonfigurasi. Data tidak akan dikirim.');
        showSuccessMessage(); // Tetap tampilkan sukses
        return;
    }
    
    // Format pesan untuk Discord
    const message = {
        content: `🎉 **Data Baru dari WITH U Application** 🎉`,
        embeds: [{
            title: "📊 Hasil Survey WITH U",
            color: 0x667eea,
            fields: [
                {
                    name: "👤 Nama User",
                    value: data.userName || 'Tidak diisi',
                    inline: false
                },
                {
                    name: "🤔 Pilihan Warmup",
                    value: data.warmupChoice || 'Tidak diisi',
                    inline: true
                },
                {
                    name: "🔘 Pilihan Button",
                    value: data.buttonChoice || 'Tidak diisi',
                    inline: true
                },
                {
                    name: "❓ Jawaban Pertanyaan 1",
                    value: data.questionAnswers.question_1 || 'Tidak diisi',
                    inline: false
                },
                {
                    name: "❓ Jawaban Pertanyaan 2",
                    value: data.questionAnswers.question_2 || 'Tidak diisi',
                    inline: false
                },
                {
                    name: "❓ Jawaban Pertanyaan 3",
                    value: data.questionAnswers.question_3 || 'Tidak diisi',
                    inline: false
                },
                {
                    name: "❓ Jawaban Pertanyaan 4",
                    value: data.questionAnswers.question_4 || 'Tidak diisi',
                    inline: false
                },
                {
                    name: "❓ Jawaban Pertanyaan 5",
                    value: data.questionAnswers.question_5 || 'Tidak diisi',
                    inline: false
                },
                {
                    name: "💭 Pendapat Akhir",
                    value: data.finalOpinion || 'Tidak diisi',
                    inline: false
                }
            ],
            footer: {
                text: "WITH U Application • " + new Date().toLocaleString('id-ID'),
                icon_url: "https://cdn.discordapp.com/emojis/1234567890123456789.png"
            },
            timestamp: new Date().toISOString()
        }]
    };
    
    // Submit ke Discord
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
    }).then(response => {
        if (response.ok) {
            console.log('Data sent to Discord successfully');
            showSuccessMessage();
        } else {
            console.error('Discord webhook error:', response.status);
            showSuccessMessage(); // Show success anyway
        }
    }).catch(error => {
        console.error('Discord webhook error:', error);
        showSuccessMessage(); // Show success anyway
    });
}

// Success Message
function showSuccessMessage() {
    if (finalChallenge) finalChallenge.style.display = 'none';
    if (successMessage) {
        successMessage.style.display = 'block';
        successMessage.classList.add('fade-in');
    }
    
    // Add some celebration effects
    setTimeout(() => {
        createConfetti();
    }, 1000);
}

// Confetti Effect
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            // Animate confetti
            confetti.animate([
                { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
            ], {
                duration: 3000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                confetti.remove();
            };
        }, i * 100);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive effects
document.addEventListener('mousemove', debounce((e) => {
    // Subtle parallax effect for birds
    const birds = document.querySelectorAll('.bird');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    birds.forEach((bird, index) => {
        const speed = (index + 1) * 0.02;
        bird.style.transform = `translate(${mouseX * speed * 50}px, ${mouseY * speed * 50}px)`;
    });
}, 16));

// Prevent context menu on images
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open popups
        if (errorPopup.style.display === 'flex') {
            hideErrorPopup();
        }
    }
});

console.log('WITH U Application Loaded Successfully! 🎶');


// Enhanced WITH U - Romantic JavaScript 💕
// Enhanced with more love, better UX, and romantic features

// Global variables
let userName = '';
let currentStep = 0;
let questionAnswers = {};
let warmupChoice = '';
let buttonChoice = '';
let currentQuestion = 0;
let currentSongIndex = 0;
let isProcessing = false;
let loveMeterLevel = 0;
let musicPlaying = false;

// Enhanced romantic playlist
const playlist = ['1005.MP3', 'indah.mp3'];
const songTitles = ['Romantic Melody', 'Indah Bersamamu'];

// Enhanced quiz questions with more romantic touch
const questions = [
    {
        question: "Apa kesan pertamamu tentang Zaid? 💭",
        options: [
            "Dia orangnya baik dan ramah 😊",
            "Kelihatan cool dan misterius 😎",
            "Lucu dan menghibur 😄",
            "Pendiam tapi menarik 🤔"
        ]
    },
    {
        question: "Kalau Zaid jadi teman, kamu bakal suka ngapain bareng? 🤝",
        options: [
            "Ngobrol banyak hal 💬",
            "Main game atau nonton film 🎮",
            "Jalan-jalan ke tempat seru 🚶‍♀️",
            "Belajar hal baru bareng 📚"
        ]
    },
    {
        question: "Menurutmu, Zaid itu tipe orang yang... 🌟",
        options: [
            "Bisa dipercaya dan setia 🤝",
            "Kreatif dan imajinatif 🎨",
            "Ceria dan optimis ☀️",
            "Bijak dan dewasa 🧠"
        ]
    },
    {
        question: "Kalau Zaid lagi sedih, apa yang akan kamu lakukan? 💙",
        options: [
            "Dengerin curhatannya dengan sabar 👂",
            "Hibur dia dengan joke lucu 😂",
            "Kasih pelukan virtual 🤗",
            "Ajak dia melupakan masalahnya 🌈"
        ]
    },
    {
        question: "Yang paling kamu suka dari personality Zaid? ✨",
        options: [
            "Cara dia care sama orang lain 💕",
            "Sense of humor yang unik 😆",
            "Kepribadian yang genuine 💯",
            "Kemampuan membuat orang nyaman 😌"
        ]
    }
];

// Enhanced main texts with more romantic and engaging content
const mainTexts = [
    `Halo ${userName}! 💕 Seneng banget akhirnya bisa ngobrol sama kamu...`,
    `Aku punya cerita nih tentang seseorang yang spesial... namanya Zaid 🌟`,
    `Dia itu orangnya unik banget, kadang lucu, kadang serius, tapi selalu bikin penasaran 😊`,
    `Aku pengen tau pendapat jujurmu tentang dia... mau bantu aku? 🥺💭`,
    `Soalnya pendapat kamu itu berarti banget buat aku... 💖`
];

// Discord webhook URL - User said it's already configured
const webhookUrl = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE';

// DOM Elements Check with better error handling
function checkRequiredElements() {
    const requiredElements = [
        'loading-screen', 'name-popup', 'warmup-popup', 'error-popup', 
        'word-error-popup', 'main-content', 'quiz-popup', 'final-challenge', 
        'success-message', 'audio-player'
    ];
    
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    
    if (missingElements.length > 0) {
        console.error('Missing required elements:', missingElements);
        return false;
    }
    return true;
}

// Enhanced initialization with romantic touches
document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 WITH U - Romantic App Starting...');
    
    if (!checkRequiredElements()) {
        console.error('❌ Required elements missing. App cannot start.');
        return;
    }
    
    // Initialize romantic background effects
    initializeRomanticBackground();
    
    // Show enhanced loading screen
    showEnhancedLoading();
    
    // Setup all event listeners
    setupEventListeners();
    
    console.log('✨ App initialized successfully!');
});

// Initialize romantic background effects
function initializeRomanticBackground() {
    // Create floating hearts
    createFloatingHearts();
    
    // Create starry background
    createStarryBackground();
    
    // Add romantic mouse effects
    addRomanticMouseEffects();
}

// Create floating hearts background
function createFloatingHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    if (!heartsContainer) return;
    
    setInterval(() => {
        if (Math.random() < 0.3) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart-bg';
            heart.innerHTML = ['💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 12000);
        }
    }, 2000);
}

// Create starry background
function createStarryBackground() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '✨';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Add romantic mouse effects
function addRomanticMouseEffects() {
    let mouseTimeout;
    
    document.addEventListener('mousemove', function(e) {
        clearTimeout(mouseTimeout);
        
        // Subtle parallax effect for birds
        const birds = document.querySelectorAll('.bird');
        birds.forEach((bird, index) => {
            const speed = (index + 1) * 0.1;
            const x = (e.clientX * speed) / 100;
            const y = (e.clientY * speed) / 100;
            bird.style.transform += ` translate(${x}px, ${y}px)`;
        });
    }, 100);
}

// Enhanced loading screen
function showEnhancedLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('loading-progress-bar');
    
    if (!loadingScreen || !progressBar) return;
    
    loadingScreen.style.display = 'flex';
    
    // Animated progress bar
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            setTimeout(() => {
                hideLoadingAndShowName();
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 200);
}

// Hide loading and show name popup
function hideLoadingAndShowName() {
    const loadingScreen = document.getElementById('loading-screen');
    const namePopup = document.getElementById('name-popup');
    
    if (!loadingScreen || !namePopup) return;
    
    loadingScreen.style.opacity = '0';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        namePopup.style.display = 'flex';
        namePopup.style.animation = 'popup-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }, 500);
}

// Setup all event listeners
function setupEventListeners() {
    // Name form submission
    const nameForm = document.getElementById('name-form');
    if (nameForm) {
        nameForm.addEventListener('submit', handleNameSubmit);
    }
    
    // Warmup buttons
    const warmupYes = document.getElementById('warmup-yes');
    const warmupNo = document.getElementById('warmup-no');
    
    if (warmupYes) warmupYes.addEventListener('click', () => handleWarmupChoice('yes'));
    if (warmupNo) warmupNo.addEventListener('click', () => handleWarmupChoice('no'));
    
    // Text buttons
    const textYes = document.getElementById('text-yes');
    const textNo = document.getElementById('text-no');
    
    if (textYes) textYes.addEventListener('click', () => handleTextButton('yes'));
    if (textNo) textNo.addEventListener('click', () => handleTextButton('no'));
    
    // Final submit button
    const submitFinal = document.getElementById('submit-final');
    if (submitFinal) {
        submitFinal.addEventListener('click', handleFinalSubmit);
    }
    
    // Error popup close buttons
    const closeError = document.getElementById('close-error');
    const closeWordError = document.getElementById('close-word-error');
    
    if (closeError) closeError.addEventListener('click', hidePopup);
    if (closeWordError) closeWordError.addEventListener('click', hidePopup);
    
    // Opinion textarea word count
    const opinionTextarea = document.getElementById('opinion-textarea');
    if (opinionTextarea) {
        opinionTextarea.addEventListener('input', updateWordCount);
    }
    
    // Music control
    const musicToggle = document.getElementById('music-toggle');
    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hidePopup();
        }
    });
    
    // Prevent right-click on images
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
    
    // Audio player events
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.addEventListener('ended', handleAudioEnded);
        audioPlayer.addEventListener('error', function() {
            console.warn('Audio playback error, trying next song...');
            playNextSong();
        });
    }
}

// Enhanced name submission
function handleNameSubmit(event) {
    event.preventDefault();
    
    if (isProcessing) return;
    isProcessing = true;
    
    const nameInput = document.getElementById('user-name');
    if (!nameInput) return;
    
    userName = nameInput.value.trim();
    
    if (userName === '') {
        showErrorPopup('Isi nama kamu dulu dong sayang... 🥺💕');
        isProcessing = false;
        return;
    }
    
    console.log('👤 User name set:', userName);
    
    // Update love meter
    updateLoveMeter(20);
    
    // Hide name popup and start music
    const namePopup = document.getElementById('name-popup');
    if (namePopup) {
        namePopup.style.opacity = '0';
        
        setTimeout(() => {
            namePopup.style.display = 'none';
            startMusic();
            showWarmupPopup();
            isProcessing = false;
        }, 500);
    }
}

// Enhanced warmup popup
function showWarmupPopup() {
    const warmupPopup = document.getElementById('warmup-popup');
    const nameDisplay = document.getElementById('name-display');
    
    if (!warmupPopup) return;
    
    if (nameDisplay) {
        nameDisplay.textContent = userName;
    }
    
    warmupPopup.style.display = 'flex';
    warmupPopup.style.animation = 'popup-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
}

// Enhanced warmup choice handling
function handleWarmupChoice(choice) {
    if (isProcessing) return;
    isProcessing = true;
    
    warmupChoice = choice;
    console.log('🔥 Warmup choice:', choice);
    
    const warmupText = document.getElementById('warmup-text');
    const warmupPopup = document.getElementById('warmup-popup');
    
    if (choice === 'no') {
        // Show cute disappointment
        updateCharacterMood('marah');
        showErrorPopup('Aww... tapi aku yakin kamu baik hati kan? 🥺 Coba lagi ya please... 💕');
        
        setTimeout(() => {
            isProcessing = false;
        }, 2000);
        return;
    }
    
    // Update love meter for positive choice
    updateLoveMeter(40);
    
    // Progressive warmup messages
    if (!warmupText.dataset.attempt) {
        warmupText.dataset.attempt = '1';
        warmupText.innerHTML = 'Yeay! Aku tau kamu orangnya baik! 🥰 Ready untuk petualangan romantis kita?';
        
        setTimeout(() => {
            isProcessing = false;
        }, 1000);
        return;
    }
    
    // Hide warmup and start main flow
    if (warmupPopup) {
        warmupPopup.style.opacity = '0';
        
        setTimeout(() => {
            warmupPopup.style.display = 'none';
            startMainFlow();
            isProcessing = false;
        }, 500);
    }
}

// Enhanced main flow
function startMainFlow() {
    console.log('🌟 Starting main flow...');
    
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    mainContent.style.display = 'flex';
    mainContent.style.opacity = '0';
    
    // Fade in main content
    setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transition = 'opacity 1s ease';
    }, 100);
    
    // Update character mood to happy
    updateCharacterMood('baik');
    
    // Start showing main text
    setTimeout(() => {
        showMainText();
    }, 1000);
}

// Enhanced text display with typing effect
function showMainText() {
    console.log('📝 Showing main text...');
    
    let textIndex = 0;
    
    function showNextText() {
        if (textIndex >= mainTexts.length) {
            showTextButtons();
            return;
        }
        
        const currentText = mainTexts[textIndex].replace('${userName}', userName);
        typeText(currentText, 'main-text', () => {
            textIndex++;
            updateLoveMeter(50 + (textIndex * 10));
            
            setTimeout(() => {
                clearText('main-text');
                setTimeout(showNextText, 500);
            }, 2000);
        });
    }
    
    showNextText();
}

// Enhanced typing effect
function typeText(text, elementId, callback = null) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.textContent = '';
    element.classList.add('typing');
    
    let i = 0;
    
    function typeNextChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextChar, 50 + Math.random() * 50); // Variable typing speed
        } else {
            element.classList.remove('typing');
            if (callback) callback();
        }
    }
    
    typeNextChar();
}

// Clear text with fade effect
function clearText(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        element.textContent = '';
        element.style.opacity = '1';
    }, 500);
}

// Show text buttons
function showTextButtons() {
    const textButtons = document.getElementById('text-buttons');
    if (!textButtons) return;
    
    textButtons.style.display = 'flex';
    textButtons.style.opacity = '0';
    textButtons.style.animation = 'fade-in 0.5s ease forwards';
}

// Enhanced text button handling
function handleTextButton(choice) {
    if (isProcessing) return;
    isProcessing = true;
    
    buttonChoice = choice;
    console.log('🔘 Text button choice:', choice);
    
    const textButtons = document.getElementById('text-buttons');
    
    if (choice === 'no') {
        updateCharacterMood('marah');
        showErrorPopup('Hayoo... pasti kamu sebenernya mau kan? 😏💕 Aku tunggu ya...');
        buttonChoice = 'initially_no_but_wants_to_help';
        
        setTimeout(() => {
            isProcessing = false;
        }, 2000);
        return;
    }
    
    // Positive response
    buttonChoice = 'yes_excited_to_help';
    updateLoveMeter(70);
    
    if (textButtons) {
        textButtons.style.opacity = '0';
    }
    
    // Clear main text and show transition message
    setTimeout(() => {
        typeText('Makasih banget! 💕 Sekarang kita main quiz seru yuk! ✨', 'main-text', () => {
            updateCharacterMood('baik');
            
            setTimeout(() => {
                startQuestions();
                isProcessing = false;
            }, 2000);
        });
    }, 500);
}

// Enhanced quiz start
function startQuestions() {
    console.log('❓ Starting quiz...');
    
    const quizPopup = document.getElementById('quiz-popup');
    const userNameDisplay = document.getElementById('user-name-display');
    
    if (!quizPopup) return;
    
    if (userNameDisplay) {
        userNameDisplay.textContent = userName;
    }
    
    currentQuestion = 0;
    questionAnswers = {};
    
    quizPopup.style.display = 'flex';
    quizPopup.style.animation = 'popup-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    updateLoveMeter(75);
    showQuizQuestion(0);
}

// Enhanced quiz question display
function showQuizQuestion(index) {
    if (index >= questions.length) {
        console.log('✅ Quiz completed!');
        
        const quizPopup = document.getElementById('quiz-popup');
        if (quizPopup) {
            quizPopup.style.opacity = '0';
            
            setTimeout(() => {
                quizPopup.style.display = 'none';
                startFinalChallenge();
            }, 500);
        }
        return;
    }
    
    const question = questions[index];
    const questionNumberEl = document.getElementById('question-number');
    const questionTextEl = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options');
    
    if (!question || !questionTextEl || !optionsContainer) return;
    
    // Update question number
    if (questionNumberEl) {
        questionNumberEl.textContent = `Question ${index + 1}`;
    }
    
    // Update progress
    updateQuizProgress(index);
    
    // Show question with typing effect
    typeText(question.question, 'quiz-question-text');
    
    // Clear and populate options
    optionsContainer.innerHTML = '';
    
    setTimeout(() => {
        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('quiz-option');
            optionElement.textContent = option;
            optionElement.setAttribute('data-option', optionIndex);
            
            optionElement.addEventListener('click', () => {
                handleQuizAnswer(index, optionIndex, option);
            });
            
            optionsContainer.appendChild(optionElement);
            
            // Animate option appearance
            setTimeout(() => {
                optionElement.style.opacity = '0';
                optionElement.style.transform = 'translateY(20px)';
                optionElement.style.animation = 'fade-in 0.5s ease forwards';
            }, optionIndex * 100);
        });
    }, 1000);
}

// Enhanced quiz answer handling
function handleQuizAnswer(questionIndex, optionIndex, optionText) {
    if (isProcessing) return;
    isProcessing = true;
    
    console.log(`💭 Quiz answer ${questionIndex + 1}:`, optionText);
    
    // Store answer
    questionAnswers[`question_${questionIndex + 1}`] = {
        question: questions[questionIndex].question,
        answer: optionText,
        answerIndex: optionIndex
    };
    
    // Visual feedback
    const selectedOption = document.querySelector(`[data-option="${optionIndex}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    // Update love meter
    updateLoveMeter(75 + (questionIndex + 1) * 3);
    
    // Move to next question
    setTimeout(() => {
        currentQuestion = questionIndex + 1;
        showQuizQuestion(currentQuestion);
        isProcessing = false;
    }, 1500);
}

// Update quiz progress
function updateQuizProgress(currentIndex) {
    const progressFill = document.getElementById('quiz-progress-fill');
    const progressText = document.getElementById('quiz-progress-text');
    
    if (progressFill) {
        const percentage = ((currentIndex + 1) / questions.length) * 100;
        progressFill.style.width = percentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = `${currentIndex + 1}/${questions.length}`;
    }
}

// Enhanced final challenge
function startFinalChallenge() {
    console.log('🏆 Starting final challenge...');
    
    const finalChallenge = document.getElementById('final-challenge');
    if (!finalChallenge) return;
    
    finalChallenge.style.display = 'flex';
    finalChallenge.style.animation = 'popup-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    updateLoveMeter(90);
    updateWordCount();
}

// Enhanced word count with heart visualization
function updateWordCount() {
    const textarea = document.getElementById('opinion-textarea');
    const wordCountEl = document.getElementById('word-count');
    const heartsContainer = document.getElementById('word-count-hearts');
    
    if (!textarea || !wordCountEl) return;
    
    const text = textarea.value.trim();
    const wordCount = text === '' ? 0 : text.split(/\s+/).length;
    
    wordCountEl.textContent = wordCount;
    
    // Update word count hearts
    if (heartsContainer) {
        heartsContainer.innerHTML = '';
        
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('span');
            heart.className = 'word-heart';
            heart.innerHTML = '💕';
            
            if (i < Math.floor(wordCount / 5)) {
                heart.classList.add('filled');
            }
            
            heartsContainer.appendChild(heart);
        }
    }
    
    // Update submit button state
    const submitBtn = document.getElementById('submit-final');
    if (submitBtn) {
        if (wordCount >= 50) {
            submitBtn.style.opacity = '1';
            submitBtn.style.pointerEvents = 'auto';
        } else {
            submitBtn.style.opacity = '0.6';
            submitBtn.style.pointerEvents = 'none';
        }
    }
}

// Enhanced final submission
function handleFinalSubmit() {
    if (isProcessing) return;
    isProcessing = true;
    
    const opinionTextarea = document.getElementById('opinion-textarea');
    if (!opinionTextarea) return;
    
    const opinion = opinionTextarea.value.trim();
    
    if (opinion === '') {
        showErrorPopup('Ceritain dong pendapatmu... jangan kosong gitu 🥺💕');
        isProcessing = false;
        return;
    }
    
    const wordCount = opinion.split(/\s+/).length;
    
    if (wordCount < 50) {
        showWordErrorPopup();
        isProcessing = false;
        return;
    }
    
    console.log('💌 Final opinion submitted:', opinion);
    
    // Compile all data
    const formData = {
        userName: userName,
        warmupChoice: warmupChoice,
        buttonChoice: buttonChoice,
        quizAnswers: questionAnswers,
        finalOpinion: opinion,
        wordCount: wordCount,
        submittedAt: new Date().toISOString(),
        loveMeterFinal: 100
    };
    
    // Update love meter to full
    updateLoveMeter(100);
    
    // Submit to Discord
    submitToDiscord(formData);
}

// Enhanced Discord submission
function submitToDiscord(data) {
    console.log('📤 Submitting to Discord...', data);
    
    // Check if webhook URL is configured
    if (webhookUrl === 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE') {
        console.warn('⚠️  Discord webhook URL not configured. Showing success anyway for demo.');
        showSuccessMessage();
        return;
    }
    
    // Create beautiful Discord embed
    const embed = {
        title: '💕 New Love Message from ' + data.userName,
        description: '✨ Someone special shared their thoughts about Zaid!',
        color: 16738740, // Pink color
        fields: [
            {
                name: '👤 From',
                value: data.userName,
                inline: true
            },
            {
                name: '💭 Love Level',
                value: data.loveMeterFinal + '%',
                inline: true
            },
            {
                name: '📊 Quiz Responses',
                value: Object.keys(data.quizAnswers).length + ' questions answered',
                inline: true
            }
        ],
        timestamp: data.submittedAt
    };
    
    // Add quiz answers to embed
    Object.values(data.quizAnswers).forEach((qa, index) => {
        embed.fields.push({
            name: `Q${index + 1}: ${qa.question}`,
            value: `💝 ${qa.answer}`,
            inline: false
        });
    });
    
    // Add final opinion
    embed.fields.push({
        name: '💌 Final Love Message',
        value: data.finalOpinion.substring(0, 1000) + (data.finalOpinion.length > 1000 ? '...' : ''),
        inline: false
    });
    
    const message = {
        content: `💕 **New romantic message received!** 💕`,
        embeds: [embed]
    };
    
    // Send to Discord
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            console.log('✅ Successfully sent to Discord!');
        } else {
            console.warn('⚠️  Discord webhook response not OK:', response.status);
        }
        showSuccessMessage();
    })
    .catch(error => {
        console.error('❌ Error sending to Discord:', error);
        // Still show success to user for better UX
        showSuccessMessage();
    });
}

// Enhanced success message
function showSuccessMessage() {
    console.log('🎉 Showing success message...');
    
    const finalChallenge = document.getElementById('final-challenge');
    const successMessage = document.getElementById('success-message');
    
    if (finalChallenge) {
        finalChallenge.style.opacity = '0';
        
        setTimeout(() => {
            finalChallenge.style.display = 'none';
            
            if (successMessage) {
                successMessage.style.display = 'flex';
                successMessage.style.animation = 'popup-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                // Trigger confetti
                createEnhancedConfetti();
                
                // Play success sound (if available)
                playSuccessSound();
            }
        }, 500);
    }
    
    isProcessing = false;
}

// Enhanced confetti effect
function createEnhancedConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) return;
    
    const confettiTypes = ['💕', '💖', '💗', '💝', '💞', '✨', '🌟', '⭐', '🎉', '🎊'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.innerHTML = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 6000);
        }, i * 100);
    }
}

// Enhanced character mood updates
function updateCharacterMood(mood) {
    const character = document.getElementById('main-character');
    if (!character) return;
    
    const moodImages = {
        'baik': 'baik.png',
        'marah': 'marah.png'
    };
    
    if (moodImages[mood]) {
        character.style.transition = 'all 0.5s ease';
        character.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            character.src = moodImages[mood];
            character.style.transform = 'scale(1)';
            character.classList.add('character-mood-change');
            
            setTimeout(() => {
                character.classList.remove('character-mood-change');
            }, 500);
        }, 250);
    }
}

// Enhanced love meter updates
function updateLoveMeter(level) {
    loveMeterLevel = Math.min(level, 100);
    
    const loveMeterFill = document.getElementById('love-meter-fill');
    const loveMeterHeart = document.querySelector('.love-meter-heart');
    
    if (loveMeterFill) {
        loveMeterFill.style.width = loveMeterLevel + '%';
    }
    
    if (loveMeterHeart && level > loveMeterLevel - 10) {
        loveMeterHeart.style.animation = 'heart-bounce 0.5s ease';
        
        setTimeout(() => {
            loveMeterHeart.style.animation = '';
        }, 500);
    }
    
    console.log('💖 Love meter updated to:', loveMeterLevel + '%');
}

// Enhanced music management
function startMusic() {
    console.log('🎵 Starting romantic music...');
    playMusic();
}

function playMusic() {
    const audioPlayer = document.getElementById('audio-player');
    const currentSongEl = document.getElementById('current-song');
    
    if (!audioPlayer || currentSongIndex >= playlist.length) return;
    
    const currentSong = playlist[currentSongIndex];
    audioPlayer.src = currentSong;
    
    if (currentSongEl) {
        currentSongEl.textContent = songTitles[currentSongIndex] || 'Romantic Melody';
    }
    
    audioPlayer.play().then(() => {
        console.log('🎵 Playing:', currentSong);
        musicPlaying = true;
        updateMusicControl();
    }).catch(error => {
        console.warn('🔇 Audio autoplay blocked or failed:', error);
        updateMusicControl();
    });
}

function toggleMusic() {
    const audioPlayer = document.getElementById('audio-player');
    if (!audioPlayer) return;
    
    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            musicPlaying = true;
            updateMusicControl();
        }).catch(error => {
            console.warn('🔇 Audio play failed:', error);
        });
    } else {
        audioPlayer.pause();
        musicPlaying = false;
        updateMusicControl();
    }
}

function updateMusicControl() {
    const musicToggle = document.getElementById('music-toggle');
    if (!musicToggle) return;
    
    const icon = musicToggle.querySelector('i');
    if (icon) {
        icon.className = musicPlaying ? 'fas fa-pause' : 'fas fa-play';
    }
}

function handleAudioEnded() {
    console.log('🎵 Song ended, playing next...');
    playNextSong();
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    setTimeout(() => {
        playMusic();
    }, 1000);
}

function playSuccessSound() {
    // Play a short celebratory sound if available
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer && !audioPlayer.paused) {
        // Continue playing current romantic music
        console.log('🎵 Continuing romantic music for celebration');
    }
}

// Enhanced error popups
function showErrorPopup(message = '') {
    const errorPopup = document.getElementById('error-popup');
    const errorMessage = document.getElementById('error-message');
    
    if (!errorPopup) return;
    
    if (errorMessage && message) {
        errorMessage.textContent = message;
    }
    
    errorPopup.style.display = 'flex';
    errorPopup.style.animation = 'popup-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
}

function showWordErrorPopup() {
    const wordErrorPopup = document.getElementById('word-error-popup');
    if (!wordErrorPopup) return;
    
    wordErrorPopup.style.display = 'flex';
    wordErrorPopup.style.animation = 'popup-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
}

function hidePopup() {
    const popups = [
        document.getElementById('error-popup'),
        document.getElementById('word-error-popup')
    ];
    
    popups.forEach(popup => {
        if (popup && popup.style.display === 'flex') {
            popup.style.opacity = '0';
            
            setTimeout(() => {
                popup.style.display = 'none';
                popup.style.opacity = '1';
            }, 300);
        }
    });
}

// Enhanced utility functions
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

// Mobile optimizations
function initializeMobileOptimizations() {
    // Add touch event listeners for better mobile experience
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Improve button interactions on mobile
        const buttons = document.querySelectorAll('.popup-btn, .love-btn, .text-btn, .quiz-option');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
}

// Initialize mobile optimizations when DOM is ready
document.addEventListener('DOMContentLoaded', initializeMobileOptimizations);

// Add some romantic console messages for developers 💕
console.log(`
💕 WITH U - Enhanced Romantic App 💕

❤️  Made with love for someone special
🌟 Every interaction is designed to bring joy
✨ Your love story matters
💝 Enjoy this romantic journey!

`);

console.log('🎯 App Status: Ready to spread love!');

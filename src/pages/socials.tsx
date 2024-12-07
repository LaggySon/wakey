export default function Social() {

    const authors = ["mike","pete","george","james","gabe"]
    const contents = [
        "Start your day with a smile and end it with a laugh! 🌟 #GoodVibesOnly",
        "Coffee first, adulting second. ☕️ #MorningMotivation",
        "Life's better when you're laughing. 😂 #HappinessMatters",
        "Exploring new places, one adventure at a time. 🗺️ #TravelGoals",
        "Weekend vibes: Relax, refresh, and recharge. 🌞 #WeekendMood",
        "Chasing dreams, not people. 💫 #StayFocused",
        "Sipping on success, one step at a time. 🍹 #MotivationMonday",
        "Every moment is a fresh beginning. 🌅 #PositiveVibes",
        "Let the good times roll! 🎉 #PartyTime",
        "Sunsets are proof that endings can be beautiful too. 🌄 #NatureLovers",
        "Be yourself; everyone else is already taken. 🌟 #BeUnique",
        "Work hard, stay humble, and always be kind. 💪 #LifeLessons",
        "When in doubt, dance it out! 💃 #FeelGoodFriday",
        "Cheers to the little things in life! 🥂 #Gratitude",
        "Dream big, hustle harder. 🚀 #SuccessMindset",
        "Find joy in the ordinary moments. 🌼 #SimplePleasures",
        "Good vibes, good company, and great memories. 🌈 #FriendshipGoals",
        "Dare to be different, it's worth it. 🎨 #BeCreative",
        "Monday blues? Not here! 💙 #FreshStart",
        "Celebrate life, no matter how small the victory. 🎉 #CelebrateEveryday"
    ];

    const imageUrls = [
        "https://via.placeholder.com/800x600.png?text=Good+Vibes+Only",
        "https://via.placeholder.com/800x600.png?text=Coffee+First",
        "https://via.placeholder.com/800x600.png?text=Keep+Laughing",
        "https://via.placeholder.com/800x600.png?text=Travel+Goals",
        "https://via.placeholder.com/800x600.png?text=Weekend+Mood",
        "https://via.placeholder.com/800x600.png?text=Chasing+Dreams",
        "https://via.placeholder.com/800x600.png?text=Motivation+Monday",
        "https://via.placeholder.com/800x600.png?text=Positive+Vibes",
        "https://via.placeholder.com/800x600.png?text=Let+Good+Times+Roll",
        "https://via.placeholder.com/800x600.png?text=Nature+Lovers",
        "https://via.placeholder.com/800x600.png?text=Be+Unique",
        "https://via.placeholder.com/800x600.png?text=Life+Lessons",
        "https://via.placeholder.com/800x600.png?text=Dance+It+Out",
        "https://via.placeholder.com/800x600.png?text=Gratitude",
        "https://via.placeholder.com/800x600.png?text=Success+Mindset",
        "https://via.placeholder.com/800x600.png?text=Simple+Pleasures",
        "https://via.placeholder.com/800x600.png?text=Friendship+Goals",
        "https://via.placeholder.com/800x600.png?text=Be+Creative",
        "https://via.placeholder.com/800x600.png?text=Fresh+Start",
        "https://via.placeholder.com/800x600.png?text=Celebrate+Everyday"
    ];

    function getRandomElement(list:Array<any>) {
        if (!Array.isArray(list) || list.length === 0){
            throw new Error("Input must be a non-empty array");
        }
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex];
    }

    function createPost() {
        return {
            author: getRandomElement(authors),
            content: getRandomElement(contents)
        }
    }

    const firstPost = createPost()

    return (
        <div>
            <h1>{firstPost.author}</h1>
            <p>{firstPost.content}</p>
        </div>
    )
}
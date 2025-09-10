# Grokit App - Project Brief

## 🍽️ App Overview

**Grokit** is a comprehensive mobile-first web application that combines shopping, meal planning, and nutrition tracking into one seamless experience. The app serves as a smart cooking companion that helps users save money, eat healthier, reduce food waste, and save time through intelligent meal planning and shopping list management.

### Core Value Proposition
- **Smart Shopping**: Intelligent shopping lists with price tracking
- **Meal Planning**: AI-powered weekly meal planning with calorie tracking  
- **Nutrition Insights**: Comprehensive nutrition and spending analytics
- **Personalized Experience**: Tailored recommendations based on dietary preferences and cooking skills

---

## 🎯 Target Audience

**Primary Users:**
- Health-conscious individuals who want to track nutrition and spending
- Busy professionals looking to streamline meal planning and grocery shopping
- Budget-conscious families aiming to reduce food costs and waste
- Cooking enthusiasts of all skill levels (beginner to advanced)

**User Goals:**
- Save money on groceries
- Eat healthier meals
- Reduce food waste
- Save time on meal planning

---

## 📱 Application Architecture

### Tech Stack
- **Frontend Framework**: React (web-based, mobile-responsive)
- **Styling**: Tailwind CSS with custom gradients and animations
- **Icons**: Lucide React icon library
- **State Management**: React Hooks (useState)
- **Responsive Design**: Mobile-first approach with max-width containers

### Project Structure
```
src/
├── components/
│   ├── onboarding/
│   │   ├── SignupScreen
│   │   ├── CookingPreferencesScreen
│   │   └── GoalsNotificationsScreen
│   └── main/
│       ├── HomeDashboard
│       ├── ShoppingListScreen
│       ├── MealPlannerScreen
│       └── NutritionReportsScreen
└── App.js (Main component with navigation)
```

---

## 🚀 Features Overview

### 1. Onboarding Flow (3 Steps)
**Step 1: User Registration & Preferences**
- Full name and email collection
- Dietary preferences selection (Vegetarian, Vegan, Gluten-Free, Dairy-Free)
- Weekly budget setting (£20-£200 range)
- Progress indicator (33% completion)

**Step 2: Cooking Preferences**
- Cooking skill level selection (Beginner, Intermediate, Advanced)
- Preferred cuisines (Italian, Asian, Mexican, Mediterranean, Indian, American)
- Available cooking time (15min, 30min, 45min, 1hour+)
- Progress indicator (67% completion)

**Step 3: Goals & Notifications**
- Primary goal selection (Save Money, Eat Healthier, Reduce Waste, Save Time)
- Notification preferences with toggle switches:
  - Meal reminders
  - Shopping alerts  
  - Cooking timers
- Progress indicator (100% completion)

### 2. Home Dashboard
**Smart Overview Screen:**
- Personalized greeting with time-based messages
- Quick action cards with visual indicators:
  - Shopping List (with item count)
  - Plan Meals
  - Cook Now
  - Analytics
- Today's meal schedule with:
  - Meal type badges (Breakfast, Lunch, Dinner)
  - Scheduled times
  - Calorie information
  - Visual meal indicators

### 3. Shopping List Management
**Intelligent Shopping Features:**
- Real-time search and add functionality
- Item completion tracking with visual checkboxes
- Price tracking per item
- Organized sections:
  - "To Buy" items with pending status
  - "Completed" items with strikethrough styling
- Quantity management
- Running total calculations

### 4. Meal Planner
**Weekly Planning Interface:**
- Calendar grid view (7 days × 3 meals)
- Week navigation with arrow controls
- Drag-and-drop meal scheduling (visual slots)
- AI meal planning button for automated suggestions
- Color-coded meal types
- Calorie tracking per meal
- Visual meal cards with nutritional info

### 5. Nutrition & Reports Dashboard
**Multi-Tab Analytics:**

**Overview Tab:**
- Daily calorie progress (current vs. target)
- Weekly spending tracking
- Visual progress bars
- Goal achievement indicators

**Nutrition Tab:**
- Macro tracking (Calories, Protein, Carbs, Fat)
- Progress bars with color coding:
  - Green: ≥90% of target
  - Blue: 70-89% of target  
  - Yellow: <70% of target
- Daily goal vs. actual consumption

**Spending Tab:**
- Category-wise spending breakdown:
  - Produce (35%)
  - Proteins (28%)  
  - Dairy (15%)
  - Pantry (19%)
- Smart insights with achievement badges
- Waste reduction tracking
- Budget performance indicators

---

## 🎨 UI/UX Design System

### Color Scheme
- **Primary**: Green (#10B981) - represents freshness and health
- **Secondary**: Blue (#3B82F6) - represents trust and reliability
- **Gradients**: Green-to-blue gradients for CTAs and headers
- **Neutral**: Gray scale for backgrounds and text
- **Status Colors**: Green (success), Red (over-budget), Yellow (warning)

### Design Patterns
- **Cards**: Rounded corners (rounded-xl) with subtle shadows
- **Buttons**: Gradient backgrounds for primary actions
- **Progress Bars**: Rounded with dynamic width and color coding
- **Icons**: Lucide React icons with consistent sizing
- **Typography**: Font weight hierarchy (normal, medium, semibold, bold)

### Responsive Design
- Mobile-first approach with max-width containers
- Touch-friendly button sizes and spacing
- Optimized for single-hand usage
- Smooth transitions and hover states

---

## 🔧 Current Development Status

### ✅ Completed Features
- [x] Complete onboarding flow (3 steps)
- [x] User preference collection and validation
- [x] Bottom tab navigation system
- [x] Home dashboard with quick actions
- [x] Shopping list with add/complete functionality
- [x] Meal planner grid layout
- [x] Nutrition tracking with progress indicators
- [x] Multi-tab reports system
- [x] Responsive mobile design
- [x] State management for all screens

### 🔄 In Progress
- [ ] Data persistence (currently in-memory only)
- [ ] AI meal suggestion integration
- [ ] Recipe database integration
- [ ] User authentication system

### 📋 Future Enhancements
- [ ] Barcode scanning for shopping items
- [ ] Recipe sharing and social features  
- [ ] Grocery store price comparison
- [ ] Smart notifications and reminders
- [ ] Export functionality for shopping lists
- [ ] Integration with fitness apps
- [ ] Meal photo capture and logging

---

## 🛠️ Technical Implementation Details

### State Management
```javascript
// Main app navigation state
const [currentScreen, setCurrentScreen] = useState('signup');
const [activeTab, setActiveTab] = useState('home');
const [onboardingStep, setOnboardingStep] = useState(1);

// Feature-specific states
const [shoppingItems, setShoppingItems] = useState([]);
const [formData, setFormData] = useState({});
const [activeTab, setActiveTab] = useState('overview');
```

### Key Components Structure
- **GrokitApp**: Main container with navigation logic
- **OnboardingScreens**: Multi-step form with validation
- **MainScreens**: Tab-based navigation with individual features
- **Reusable Elements**: Progress bars, cards, buttons, toggles

### Data Models
```javascript
// Shopping Item
{
  id: number,
  name: string,
  quantity: number,
  price: number,
  completed: boolean
}

// Meal Item  
{
  id: number,
  type: string, // 'Breakfast', 'Lunch', 'Dinner'
  name: string,
  time: string,
  calories: number
}

// User Preferences
{
  dietaryPrefs: string[],
  weeklyBudget: number,
  cookingSkill: string,
  preferredCuisines: string[],
  cookingTime: string,
  primaryGoal: string,
  notifications: object
}
```

---

## 📊 Performance & Optimization

### Current Optimizations
- Efficient React hooks usage
- Conditional rendering for large lists
- Optimized re-renders with proper state management
- Mobile-first responsive design
- Lightweight icon library (Lucide React)

### Planned Optimizations
- Data caching strategies
- Lazy loading for meal images
- Progressive Web App (PWA) features
- Offline functionality
- Performance monitoring

---

## 🚀 Deployment & Environment

### Development Setup
1. React application with modern JavaScript (ES6+)
2. Tailwind CSS for styling
3. Component-based architecture
4. Mobile-responsive design testing

### Future Deployment Considerations
- Progressive Web App (PWA) implementation
- Mobile app development (React Native conversion)
- Backend API integration
- Database integration for data persistence
- User authentication and security

---

## 📈 Success Metrics & KPIs

### User Engagement
- Onboarding completion rate
- Daily active users
- Feature adoption rates
- Session duration and frequency

### Business Impact
- User-reported cost savings
- Meal planning consistency
- Food waste reduction
- Nutritional goal achievement

### Technical Performance
- App load time and responsiveness
- Error rates and crash analytics  
- User retention rates
- Feature usage analytics

---

## 🔄 Version History

### v1.0.0 - MVP (Current)
- Complete onboarding flow
- Core shopping, meal planning, and reporting features
- Mobile-responsive design
- In-memory state management

### Planned Releases
- **v1.1.0**: Data persistence and user accounts
- **v1.2.0**: AI meal suggestions and recipe integration
- **v1.3.0**: Advanced analytics and social features
- **v2.0.0**: Native mobile app and advanced AI features

---

*This project brief serves as the complete reference for the Grokit app development. All features, design patterns, and technical implementations are documented to ensure consistent development and future enhancements.*

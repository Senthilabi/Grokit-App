import React, { useState } from 'react';
import { 
  Home, 
  ShoppingCart, 
  Calendar, 
  BarChart3, 
  Settings,
  Plus,
  Search,
  Check,
  X,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Target,
  ChefHat,
  Wand2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Onboarding Screens
const SignupScreen = ({ onNext }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dietaryPrefs: [],
    weeklyBudget: 50
  });

  const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'];

  const toggleDietary = (option) => {
    setFormData(prev => ({
      ...prev,
      dietaryPrefs: prev.dietaryPrefs.includes(option)
        ? prev.dietaryPrefs.filter(p => p !== option)
        : [...prev.dietaryPrefs, option]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Step 1 of 3</span>
            <span>33%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{width: '33%'}}></div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Grokit</h1>
        <p className="text-gray-600 mb-6">Your smart cooking companion</p>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Dietary Preferences</label>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleDietary(option)}
                  className={`px-3 py-2 rounded-full border text-sm ${
                    formData.dietaryPrefs.includes(option)
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weekly Budget: £{formData.weeklyBudget}
            </label>
            <input
              type="range"
              min="20"
              max="200"
              value={formData.weeklyBudget}
              onChange={(e) => setFormData(prev => ({...prev, weeklyBudget: parseInt(e.target.value)}))}
              className="w-full"
            />
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={!formData.email || !formData.name}
          className={`w-full py-3 rounded-lg font-medium ${
            formData.email && formData.name
              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const CookingPreferencesScreen = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    cookingSkill: '',
    preferredCuisines: [],
    cookingTime: ''
  });

  const cuisines = ['Italian', 'Asian', 'Mexican', 'Mediterranean', 'Indian', 'American'];

  const handleCuisineToggle = (cuisine) => {
    setFormData(prev => ({
      ...prev,
      preferredCuisines: prev.preferredCuisines.includes(cuisine)
        ? prev.preferredCuisines.filter(c => c !== cuisine)
        : [...prev.preferredCuisines, cuisine]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Step 2 of 3</span>
            <span>67%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{width: '67%'}}></div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your cooking</h1>
        <p className="text-gray-600 mb-6">This helps us suggest the perfect meals for you</p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Cooking Skill Level</label>
            <div className="space-y-2">
              {['Beginner', 'Intermediate', 'Advanced'].map((skill) => (
                <label key={skill} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="cookingSkill"
                    value={skill}
                    checked={formData.cookingSkill === skill}
                    onChange={(e) => setFormData(prev => ({...prev, cookingSkill: e.target.value}))}
                    className="w-4 h-4 text-green-600"
                  />
                  <span className="ml-3 text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Cuisines</label>
            <div className="flex flex-wrap gap-2">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => handleCuisineToggle(cuisine)}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    formData.preferredCuisines.includes(cuisine)
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Available Cooking Time</label>
            <div className="grid grid-cols-2 gap-3">
              {['15min', '30min', '45min', '1hour+'].map((time) => (
                <button
                  key={time}
                  onClick={() => setFormData(prev => ({...prev, cookingTime: time}))}
                  className={`p-3 border rounded-lg text-center ${
                    formData.cookingTime === time
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={!formData.cookingSkill || !formData.cookingTime}
            className={`flex-1 py-3 rounded-lg font-medium ${
              formData.cookingSkill && formData.cookingTime
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const GoalsNotificationsScreen = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    primaryGoal: '',
    notifications: {
      mealReminders: true,
      shoppingAlerts: true,
      cookingTimers: true
    }
  });

  const handleNotificationToggle = (type) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Step 3 of 3</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-full"></div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Set your goals</h1>
        <p className="text-gray-600 mb-6">Help us personalize your Grokit experience</p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Primary Goal</label>
            <div className="space-y-2">
              {['Save Money', 'Eat Healthier', 'Reduce Waste', 'Save Time'].map((goal) => (
                <label key={goal} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="primaryGoal"
                    value={goal}
                    checked={formData.primaryGoal === goal}
                    onChange={(e) => setFormData(prev => ({...prev, primaryGoal: e.target.value}))}
                    className="w-4 h-4 text-green-600"
                  />
                  <span className="ml-3 text-gray-700">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Notifications</label>
            <div className="space-y-3">
              {[
                { key: 'mealReminders', label: 'Meal reminders' },
                { key: 'shoppingAlerts', label: 'Shopping alerts' },
                { key: 'cookingTimers', label: 'Cooking timers' }
              ].map((notification) => (
                <label key={notification.key} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-gray-700">{notification.label}</span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.notifications[notification.key]}
                      onChange={() => handleNotificationToggle(notification.key)}
                      className="sr-only"
                    />
                    <div
                      onClick={() => handleNotificationToggle(notification.key)}
                      className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                        formData.notifications[notification.key] ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          formData.notifications[notification.key] ? 'translate-x-6' : 'translate-x-0.5'
                        } mt-0.5`}
                      />
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700"
          >
            Back
          </button>
          <button
            onClick={onComplete}
            disabled={!formData.primaryGoal}
            className={`flex-1 py-3 rounded-lg font-medium ${
              formData.primaryGoal
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Finish Setup
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Screens
const HomeDashboard = () => {
  const todaysMeals = [
    { id: 1, type: 'Breakfast', name: 'Avocado Toast', time: '8:00 AM', calories: 320 },
    { id: 2, type: 'Lunch', name: 'Chicken Salad', time: '1:00 PM', calories: 450 },
    { id: 3, type: 'Dinner', name: 'Salmon & Vegetables', time: '7:00 PM', calories: 520 }
  ];

  const quickActions = [
    { id: 'shopping', label: 'Shopping List', icon: ShoppingCart, color: 'bg-blue-500', items: 12 },
    { id: 'meals', label: 'Plan Meals', icon: Calendar, color: 'bg-green-500' },
    { id: 'cooking', label: 'Cook Now', icon: ChefHat, color: 'bg-orange-500' },
    { id: 'reports', label: 'Analytics', icon: BarChart3, color: 'bg-purple-500' }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-4 space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-1">Good morning! 👋</h1>
        <p className="text-green-100">Ready to cook something amazing today?</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button key={action.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md">
                <div className={`${action.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-medium text-gray-800 text-sm">{action.label}</h3>
                {action.items && <p className="text-xs text-gray-500 mt-1">{action.items} items</p>}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Today's Meals</h2>
        <div className="space-y-3">
          {todaysMeals.map((meal) => (
            <div key={meal.id} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {meal.type}
                    </span>
                    <span className="text-sm text-gray-500">{meal.time}</span>
                  </div>
                  <h3 className="font-medium text-gray-800">{meal.name}</h3>
                  <p className="text-sm text-gray-500">{meal.calories} calories</p>
                </div>
                <ChefHat className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ShoppingListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, name: 'Organic Bananas', quantity: 6, price: 2.50, completed: false },
    { id: 2, name: 'Whole Milk', quantity: 1, price: 1.20, completed: true },
    { id: 3, name: 'Chicken Breast', quantity: 500, price: 6.99, completed: false }
  ]);

  const addItem = () => {
    if (searchText.trim()) {
      const newItem = {
        id: Date.now(),
        name: searchText,
        quantity: 1,
        price: 0,
        completed: false
      };
      setShoppingItems([...shoppingItems, newItem]);
      setSearchText('');
    }
  };

  const toggleCompleted = (id) => {
    setShoppingItems(items => 
      items.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const pendingItems = shoppingItems.filter(item => !item.completed);
  const completedItems = shoppingItems.filter(item => item.completed);

  return (
    <div className="flex-1 bg-gray-50 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Shopping List</h1>
          <p className="text-gray-600">{pendingItems.length} items remaining</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Add items to your list..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={addItem}
          disabled={!searchText.trim()}
          className={`px-4 py-3 rounded-xl ${
            searchText.trim() ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
          }`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {pendingItems.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">To Buy ({pendingItems.length})</h2>
          <div className="space-y-2">
            {pendingItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleCompleted(item.id)}
                      className="w-6 h-6 border-2 border-gray-300 rounded-full hover:border-green-500"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-gray-800">£{item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {completedItems.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Completed ({completedItems.length})</h2>
          <div className="space-y-2">
            {completedItems.map((item) => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-xl opacity-75">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleCompleted(item.id)}
                      className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </button>
                    <div>
                      <h3 className="font-medium text-gray-600 line-through">{item.name}</h3>
                      <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-gray-600">£{item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MealPlannerScreen = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];
  
  const mealPlan = {
    0: { Breakfast: { name: 'Avocado Toast', calories: 320 }, Lunch: null, Dinner: null },
    1: { Breakfast: null, Lunch: { name: 'Greek Salad', calories: 450 }, Dinner: null },
    2: { Breakfast: null, Lunch: null, Dinner: null },
    3: { Breakfast: null, Lunch: null, Dinner: null },
    4: { Breakfast: null, Lunch: null, Dinner: null },
    5: { Breakfast: null, Lunch: null, Dinner: null },
    6: { Breakfast: null, Lunch: null, Dinner: null }
  };

  return (
    <div className="flex-1 bg-gray-50 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Meal Planner</h1>
          <p className="text-gray-600">Plan your weekly meals</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl">
          <Wand2 className="w-4 h-4" />
          <span className="text-sm font-medium">AI Plan</span>
        </button>
      </div>

      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
        <button onClick={() => setCurrentWeek(currentWeek - 1)} className="p-2 hover:bg-gray-50 rounded-lg">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="text-center">
          <h2 className="font-semibold text-gray-800">This Week</h2>
          <p className="text-sm text-gray-500">Sep 9 - Sep 15</p>
        </div>
        <button onClick={() => setCurrentWeek(currentWeek + 1)} className="p-2 hover:bg-gray-50 rounded-lg">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-7 border-b border-gray-200">
          {daysOfWeek.map((day, index) => (
            <div key={day} className="p-3 text-center border-r border-gray-200 last:border-r-0">
              <div className="font-medium text-gray-800">{day}</div>
              <div className="text-sm text-gray-500">{9 + index}/09</div>
            </div>
          ))}
        </div>

        {mealTypes.map((mealType) => (
          <div key={mealType} className="border-b border-gray-200 last:border-b-0">
            <div className="grid grid-cols-7">
              {daysOfWeek.map((_, dayIndex) => {
                const meal = mealPlan[dayIndex]?.[mealType];
                return (
                  <div key={`${dayIndex}-${mealType}`} className="p-2 border-r border-gray-200 last:border-r-0 min-h-[100px]">
                    {meal ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-2 h-full">
                        <span className="text-xs font-medium text-green-700">{mealType}</span>
                        <h4 className="text-sm font-medium text-gray-800 mt-1">{meal.name}</h4>
                        <div className="text-xs text-green-600 mt-1">{meal.calories} cal</div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-2 h-full flex flex-col items-center justify-center hover:border-green-300 cursor-pointer">
                        <div className="text-xs text-gray-400 mb-1">{mealType}</div>
                        <Plus className="w-4 h-4 text-gray-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NutritionReportsScreen = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'nutrition', label: 'Nutrition', icon: Target },
    { id: 'spending', label: 'Spending', icon: DollarSign }
  ];

  const nutritionData = {
    calories: { current: 1650, target: 1800, percentage: 92 },
    protein: { current: 85, target: 120, percentage: 71 },
    carbs: { current: 180, target: 200, percentage: 90 },
    fat: { current: 65, target: 70, percentage: 93 }
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 70) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  return (
    <div className="flex-1 bg-gray-50 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Nutrition & Reports</h1>
          <p className="text-gray-600">Track your health and spending goals</p>
        </div>
      </div>

      <div className="flex bg-white rounded-xl p-1 shadow-sm overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Daily Calories</p>
                  <p className="text-xl font-bold text-gray-800">1650</p>
                  <p className="text-xs text-green-600">of 1800</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Weekly Spending</p>
                  <p className="text-xl font-bold text-gray-800">£87.50</p>
                  <p className="text-xs text-blue-600">of £105</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Progress</h3>
            <div className="space-y-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                const amount = [14.50, 11.20, 16.80, 9.30, 13.70, 18.90, 12.40][index];
                const budget = 15.00;
                const percentage = (amount / budget) * 100;
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{day}</span>
                      <span className="text-sm font-medium text-gray-800">£{amount.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${amount > budget ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'nutrition' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Nutrition Goals</h3>
          <div className="space-y-4">
            {Object.entries(nutritionData).map(([nutrient, data]) => (
              <div key={nutrient}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 capitalize">{nutrient}</span>
                  <span className="text-sm text-gray-600">
                    {data.current}{nutrient === 'calories' ? '' : 'g'} / {data.target}{nutrient === 'calories' ? '' : 'g'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(data.percentage)}`}
                    style={{ width: `${Math.min(data.percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-gray-500 mt-1">{data.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'spending' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Spending by Category</h3>
            <div className="space-y-3">
              {[
                { category: 'Produce', amount: 28.50, percentage: 35 },
                { category: 'Proteins', amount: 22.80, percentage: 28 },
                { category: 'Dairy', amount: 12.40, percentage: 15 },
                { category: 'Pantry', amount: 15.60, percentage: 19 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm font-medium text-gray-800">
                      £{item.amount.toFixed(2)} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Smart Insights</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">Great savings this week!</p>
                  <p className="text-xs text-green-600">You're £17.50 under budget</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Award className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Waste reduction goal met</p>
                  <p className="text-xs text-blue-600">15% reduction vs last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
export default function GrokitApp() {
  const [currentScreen, setCurrentScreen] = useState('signup');
  const [activeTab, setActiveTab] = useState('home');
  const [onboardingStep, setOnboardingStep] = useState(1);

  const handleOnboardingNext = () => {
    if (onboardingStep === 1) {
      setOnboardingStep(2);
      setCurrentScreen('step2');
    } else if (onboardingStep === 2) {
      setOnboardingStep(3);
      setCurrentScreen('step3');
    }
  };

  const handleOnboardingBack = () => {
    if (onboardingStep === 2) {
      setOnboardingStep(1);
      setCurrentScreen('signup');
    } else if (onboardingStep === 3) {
      setOnboardingStep(2);
      setCurrentScreen('step2');
    }
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('main');
  };

  // Onboarding Flow
  if (currentScreen !== 'main') {
    return (
      <div className="min-h-screen flex flex-col">
        {currentScreen === 'signup' && (
          <SignupScreen onNext={handleOnboardingNext} />
        )}
        {currentScreen === 'step2' && (
          <CookingPreferencesScreen 
            onNext={handleOnboardingNext} 
            onBack={handleOnboardingBack}
          />
        )}
        {currentScreen === 'step3' && (
          <GoalsNotificationsScreen 
            onComplete={handleOnboardingComplete}
            onBack={handleOnboardingBack}
          />
        )}
      </div>
    );
  }

  // Main App with Bottom Navigation
  const tabs = [
    { id: 'home', label: 'Home', icon: Home, component: HomeDashboard },
    { id: 'shopping', label: 'Shopping', icon: ShoppingCart, component: ShoppingListScreen },
    { id: 'meals', label: 'Meals', icon: Calendar, component: MealPlannerScreen },
    { id: 'reports', label: 'Reports', icon: BarChart3, component: NutritionReportsScreen }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeDashboard;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-xl font-bold text-green-600">Grokit</h1>
          <Settings className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto min-h-full">
          <ActiveComponent />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

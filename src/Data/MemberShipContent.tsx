import right from '../assets/svg/right.svg';
import check from '../assets/svg/check.svg';

import p1 from "../assets/img/projects/1.jpg";
import p2 from "../assets/img/projects/2.jpg";
import p3 from "../assets/img/projects/3.jpg";
import p4 from "../assets/img/projects/4.jpg";


const PrintingData = [
    {
        title: "Free",
        price: "$0",
        duration: "/ forever",
        description: "Sign up now to be notified of new content and support Mosso, help keep this site independent.",
        img: check,
        itemcontent: {

            item1: "Access to all free private posts",
            item2: "Weekly newsletter",
            item3: "No card details required"

        },
        btn: "Sign Up for free"
    },
    {
        title: "Premium",
        price: "$9",
        duration: "/ monthly",
        description: "Get access to the library of paid members only posts.",
        img: check,
        itemcontent: {

            item1: "Full access to Premium posts",
            item2: "Weekly email newsletter",
            item3: "Support independent publishing",
            item4: "Monthly exclusive content",
            item5: "Simple, secure card payment"

        },
        btn: "Sign Up Now"
    },
    {
        title: "Premium Plus",
        price: "$14",
        duration: "/ monthly",
        description: "Get access to everything.",
        img: check,
        itemcontent: {

            item1: "Full access to Premium posts",
            item2: "Weekly email newsletter",
            item3: "Support independent publishing",
            item4: "Monthly exclusive content",
            item5: "Simple, secure card payment"

        },
        btn: "Sign Up Now"
    },

];


const PrintingDataYear = [
    {
        title: "Free",
        price: "$0",
        duration: "/ forever",
        description: "Sign up now to be notified of new content and support Mosso, help keep this site independent.",
        img: check,
        itemcontent: {

            item1: "Access to all free private posts",
            item2: "Weekly newsletter",
            item3: "No card details required"

        },
        btn: "Sign Up for free"
    },
    {
        title: "Premium",
        price: "$59",
        duration: "/ yearly",
        description: "Get access to the library of paid members only posts.",
        img: check,
        itemcontent: {

            item1: "Full access to Premium posts",
            item2: "Weekly email newsletter",
            item3: "Support independent publishing",
            item4: "Monthly exclusive content",
            item5: "Simple, secure card payment"

        },
        btn: "Sign Up for free"
    },
    {
        title: "Premium Plus",
        price: "$99",
        duration: "/ yearly",
        description: "Get access to everything.",
        img: check,
        itemcontent: {
            item1: "Full access to Premium posts",
            item2: "Weekly email newsletter",
            item3: "Support independent publishing",
            item4: "Monthly exclusive content",
            item5: "Simple, secure card payment"
        },
        btn: "Sign Up for free"
    },
];

const AccordionData = [
    {
        id: 1,
        title: "What is the Mosso subscription model?",
        img: right,
        description: "Discover the Mosso subscription model, offering tailored access to premium content with flexible monthly and yearly plans."
    },
    {
        id: 2,
        title: "What is the difference between plans?",
        img: right,
        description: "Uncover the distinctions between our subscription plans, designed to suit varying needs and preferences for both monthly and yearly options."
    },
    {
        id: 3,
        title: "How can I maximize the benefits of my subscription?",
        img: right,
        description: "Unlock the full potential of your subscription by learning expert tips on optimizing benefits and maximizing your experience."
    },
    {
        id: 4,
        title: "How can I manage my subscription?",
        img: right,
        description: "Seamlessly manage your subscription with intuitive controls, enabling effortless updates and adjustments to suit your evolving needs."
    },
    {
        id: 5,
        title: "How to upgrade/downgrade my subscription plan?",
        img: right,
        description: "Navigate the process of upgrading or downgrading your subscription plan with ease, ensuring it aligns perfectly with your requirements."
    },
    {
        id: 6,
        title: "How to renew my existing plan?",
        img: right,
        description: "Learn the simple steps to renew your existing plan hassle-free, ensuring uninterrupted access to our exclusive content and features."
    },
    {
        id: 7,
        title: "What is the cancelation policy?",
        img: right,
        description: "Understand our cancelation policy to make informed decisions, providing clarity on terms and procedures for ending your subscription."
    }
];


const PremiumData = [
    {
        id: 1,
        img: p1,
        description: "Spring Fashion Trends to Embrace This Season"
    },
    {
        id: 2,
        img: p2,
        description: "Revolutionary Advancements in AI Technology"
    },
    {
        id: 3,
        img: p3,
        description: "Exploring Culinary Delights: A Gastronomic Journey"
    },
    {
        id: 4,
        img: p4,
        description: "Transform Your Body: Fitness Tips and Techniques"
    }
]
export {
    PrintingData,
    AccordionData,
    PremiumData,
    PrintingDataYear
}
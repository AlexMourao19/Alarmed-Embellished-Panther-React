import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Alarmed Embellished Panther</title>
        <meta property="og:title" content="Alarmed Embellished Panther" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">expenses</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">loans</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">budget</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Expenses</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Loans</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Budget</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Log In</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="home-text110">
              Track all your expenses and loans in one place.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Manage and categorize your expenses easily.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Keep track of any loans you have and their details.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Plan your monthly budget and track your spending.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Our finance app makes it simple to track all your expenses, loans,
              and monthly expenditures in one convenient location. Take control
              of your finances today!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Track Your Finances with Ease</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Expense Management</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Personalized Budgeting</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Loan Tracking</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Track all your expenses in one place
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">Budget Planning</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">Manage Loans</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Take control of your expenses, loans, and personal budget with our
              finance app.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Start Managing Your Finances Today
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Expense Tracking</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Loan Management</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Budget Planning</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Effortlessly track all your expenses in one place.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Keep tabs on any loans you have and manage them effectively.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Plan your monthly expenses and stay within your budget.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              *All plans come with a free trial period of 14 days.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              **Money-back guarantee within the first month of subscription.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$5.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$9.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$19.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$59.99/year</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">Save 16%</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Upgrade Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$99.99/year</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">Save 17%</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$199.99/year</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">Save 17%</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Expense tracking</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Loan management</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Monthly budgeting</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">All Plan 1 features</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Advanced reporting</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Bill reminders</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Priority email support</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">All Plan 2 features</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Tax optimization tools</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Net worth tracking</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Priority phone support</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Financial goal setting</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Custom categories</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Email support</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Ad-free experience</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Export data to CSV</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Phone support</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Investment tracking</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">
              $100 bonus on investment account setup
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">
              $50 discount on financial planning services
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">
              $25 Amazon gift card on referral signup
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">
              $200 discount on tax preparation services
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">
              $150 discount on estate planning services
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Sign Up</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Add Expenses</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Manage Loans</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Set Budget</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Create an account to start using the finance app.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Track all your expenses by adding them to the app.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Keep track of any loans you have taken and manage repayments.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Define your monthly budget and monitor your spending.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">5 stars</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              I highly recommend this app to anyone looking to gain control over
              their finances. It&apos;s a game-changer!
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              I&apos;ve tried several finance apps before, but this one stands
              out for its simplicity and effectiveness. It&apos;s a must-have
              for anyone serious about managing their money.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              I love how this app helps me stay on top of my expenses and
              savings goals. It&apos;s like having a personal finance assistant
              in my pocket!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              This finance app has completely transformed the way I manage my
              expenses. It&apos;s user-friendly interface and detailed tracking
              features have made my life so much easier.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, ABC Company</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Freelancer</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Small Business Owner</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Marketing Manager</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">
              123 Finance Street, Cityville, USA
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">contact@financeapp.com</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Visit our office during business hours.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Send us an email for any inquiries or support.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home

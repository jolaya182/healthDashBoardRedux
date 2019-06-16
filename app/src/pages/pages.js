/* *
  title: pages.js 

  date: 5/28/2019

  author:  javier olaya

  description: react list of page components  that displays the section of the pages  
         
 */
import { Link, Route } from 'react-router-dom';
import { MainMenu } from "./menus";
import '../css/pages.scss'
import App from '../components/App';

const PageTemplate = ({ children }) => <div className="page">
  <MainMenu></MainMenu>
  {children}
</div>

export const Whoops404 = () => <div className="whoops-404">
  <h1>Resource not found at '{location.pathname}'</h1>
</div>

export const Appointments = () =>
  <PageTemplate>
    <div className="appointment">
      <h1>Appointments</h1>
      <section className="events">
        <App></App>
      </section>
    </div>

  </PageTemplate>

export const Profile = () =>
  <PageTemplate>
    <section className="products">
      <h1>[Profile]</h1>
    </section>
  </PageTemplate>

export const Membership = () =>
  <PageTemplate>
    <section className="contact">
      <h1>[Membership]</h1>
    </section>
  </PageTemplate>

export const Location = () =>
  <PageTemplate>
    <section className="events">
      <h1>[Location]</h1>
    </section>
  </PageTemplate>

export const Physicians = () =>
  <PageTemplate>
    <section className="events">
      <h1>[physicians]</h1>
    </section>
  </PageTemplate>
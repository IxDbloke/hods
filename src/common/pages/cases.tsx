import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { Details, Table, Tabs, Tag } from '@not-govuk/components';

const Page: FC<PageProps> = props => (
  <Fragment>
    <h1>Cases</h1>
    <Table
  caption="Dates and amounts"
  keys={["priority", "status","assignee", "lastUpdated","person", "purchase","hints", "previousOutcome",]}
  headings={{
    priority: "Priority",
    status: "Status",
    assignee: "Assignee",
    lastUpdated: "Last updated",
    person: "Person",
    purchase: "Purchase",
    hints: "Hints",
    previousOutcome: "Previous purchase"
  }}
  data={[
    {
      priority: "High",
      status: "New",
      assignee: "774893",
      lastUpdated: "1 Apr",
      person: "Alasdair-Satma Greenburg-Cohen",
      purchase: "donut",
      hints: "Vegan",
      previousOutcome: "Yum-Yum"
    },
    {
      priority: "High",
      status: "Open",
      assignee: "774893",
      lastUpdated: "1 Apr",
      person: "Jo Blu",
      purchase: "donut",
      hints: "",
      previousOutcome: "Chocolate snowball"
    },
    {
      priority: "Medium",
      status: "Closed",
      assignee: "774893",
      lastUpdated: "1 Apr",
      person: "Ralphy Yella",
      purchase: "donut",
      hints: "Nut allergy",
      previousOutcome: ""
    }
  ]}
/>
  </Fragment>
);

export default Page;
export const title = 'Cases';

import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { Details, Table, Tabs, Tag } from '@not-govuk/components';

const Page: FC<PageProps> = props => (
  <Fragment>
    <h1>Cases</h1>
    <Tabs
      items={[
        {
          label: "My cases",
          id: "my-cases",
          content: (
            <Fragment>
              <h2>My cases</h2>
              <Table
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
          ),
        },
        {
          label: "New",
          id: "new",
          content: (
            <Fragment>
              <h2>New</h2>
              <Table
                keys={["manager", "opened", "closed"]}
                headings={{
                  manager: "Case manager",
                  opened: "Cases opened",
                  closed: "Cases closed",
                }}
                data={[
                  {
                    manager: "David Francis",
                    opened: "24",
                    closed: "18",
                  },
                  {
                    manager: "Paul Farmer",
                    opened: "16",
                    closed: "20",
                  },
                  {
                    manager: "Rita Patel",
                    opened: "24",
                    closed: "27",
                  },
                ]}
              />
            </Fragment>
          ),
        },
        {
          label: "Live",
          id: "live",
          content: (
            <Fragment>
              <h2>Live</h2>
              <Table
                keys={["manager", "opened", "closed"]}
                headings={{
                  manager: "Case manager",
                  opened: "Cases opened",
                  closed: "Cases closed",
                }}
                data={[
                  {
                    manager: "David Francis",
                    opened: "98",
                    closed: "95",
                  },
                  {
                    manager: "Paul Farmer",
                    opened: "122",
                    closed: "131",
                  },
                  {
                    manager: "Rita Patel",
                    opened: "126",
                    closed: "142",
                  },
                ]}
              />
            </Fragment>
          ),
        },
        {
          label: "To check",
          id: "to-check",
          content: (
            <Fragment>
              <h2>To check</h2>
              <Table
                keys={["manager", "opened", "closed"]}
                headings={{
                  manager: "Case manager",
                  opened: "Cases opened",
                  closed: "Cases closed",
                }}
                data={[
                  {
                    manager: "David Francis",
                    opened: "1380",
                    closed: "1472",
                  },
                  {
                    manager: "Paul Farmer",
                    opened: "1129",
                    closed: "1083",
                  },
                  {
                    manager: "Rita Patel",
                    opened: "1539",
                    closed: "1265",
                  },
                ]}
              />
            </Fragment>
          ),
        },
      ]}
    />
  </Fragment>
);

export default Page;
export const title = 'Tabs';

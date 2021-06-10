import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { Details, Table, Tabs, Tag } from '@not-govuk/components';
import { Timeline } from '@hods/components';

const Page: FC<PageProps> = props => (
  <Fragment>
    <h1>Dave Singh</h1>
    <Tabs
      items={[
        {
          label: "Details",
          id: "details",
          content: (
            <Fragment>
              <h2>Details</h2>
              <Table
  caption="Personal details"
  keys={["date", "amount"]}
  headings={{
    amount: "Dave Singh, David Singh",
    date: "Name(s)",
  }}
  data={[
    {
      amount: "14 Glebe St Glasgow G3 8TT",
      date: "Addresses",
    },
    {
      amount: "",
      date: "Date of birth",
    },
    {
      amount: "mad_daveyboy@gmail.com",
      date: "Email",
    },
    {
      amount: "0788899911",
      date: "Phone number",
    },
  ]}
/>
<Table
caption="Case details"
keys={["date", "amount"]}
headings={{
amount: "1 Apr 2023",
date: "Added",
}}
data={[
{
amount: "14 Apr 2023",
date: "Last updated",
},
{
amount: "This, that, the other",
date: "Stuff done",
},
]}
/>
            </Fragment>
          ),
        },
        {
          label: "Timeline",
          id: "timeline",
          content: (
            <Fragment>
              <h2>Timeline</h2>
              <Timeline
  items={[
    {
      action: "Response submitted",
      date: new Date("15 Mar 2021 16:27"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      action: "Issue under investigation",
      by: "Douglas Pollock",
      date: new Date("15 Mar 2021 10:04"),
      description:
        "This is a description of the event. This field accepts unformatted text only.",
    },
    {
      action: "Issue raised on GitHub",
      by: "Karypun",
      date: new Date("25 Jan 2021 9:35"),
      description:
        "This is a description of the event.",
    },
  ]}
/>
            </Fragment>
          ),
        },
        {
          label: "Notes",
          id: "notes",
          content: (
            <Fragment>
              <h2>Notes</h2>
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
      ]}
    />
  </Fragment>
);

export default Page;
export const title = 'Case details';

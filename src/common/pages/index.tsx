import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { Button } from '@not-govuk/components';

const Page: FC<PageProps> = props => (
  <Fragment>
    <h1>Home</h1>
    <Button href="/cases" value="Cases page" />
    <p>This is a sandpit for the Home Office prototying kit.</p>
    <p>Simple <A href="/cases">cases page</A> with a data table.</p>
    <p>A <A href="/details">details page</A> about a citizen called 'Dave Singh'.</p>
    <p>A <A href="/tabs">tabs page</A> - each tab contains a different table.</p>
    <p><A href="/foo">cases page</A> built in HTML rather than React - this kit can handle both.</p>
  </Fragment>
);

export default Page;
export const title = 'Home';

import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { Button } from '@not-govuk/components';

const Page: FC<PageProps> = props => (
  <Fragment>
    <h1>Home</h1>
    <Button href="/cases" value="Cases page" />
    <p>This is a sandpit for the Home Office prototying kit. </p>
    <p>View the <A href="/cases">cases page</A>.</p>
    <p>View the <A href="/details">details page</A>.</p>
    <p>View the <A href="/tabs">tabs page</A>.</p>
    <p><A href="/foo">foo</A> is an example of an html page.</p>
  </Fragment>
);

export default Page;
export const title = 'Home';

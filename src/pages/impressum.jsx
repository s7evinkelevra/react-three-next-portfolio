import Menu from '@/components/dom/Menu';
import CenteredContainer from '@/components/dom/CenteredContainer';

// dom components goes here
const Page = (props) => {

  return (
    <>
      <CenteredContainer>
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>Jan L&uuml;demann<br />
          Vor der Rodau 80<br />
          27386 Bothel</p>

        <h2>Kontakt</h2>
        <p>Telefon: 01735304722<br />
          Telefax: wird nachgereicht<br />
          E-Mail: jan.luedemann@gmail.com</p>

        <h2>Redaktionell verantwortlich</h2>
        <p>Jan L&uuml;demann<br />
          Vor der Rodau 80<br />
          27386 Bothel</p>
      </CenteredContainer>
      <Menu width={"600px"} />
    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
/* Page.r3f = (props) => {

  return (
    <>

    </>
  )
} */

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Impressum',
    },
  }
}

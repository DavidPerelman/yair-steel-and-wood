import { getProject } from "@/lib/data";
import CustomHead from "@/components/customHead/CustomHead";
import SingleProjectContainer from "@/components/singleProjectContainer/SingleProjectContainer";
import SingleProjectPageContainer from "@/components/singleProjectPageContainer/SingleProjectPageContainer";

const SingleProjectPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITHOUT AN API
  const data = await getProject(slug);
  const project = JSON.parse(JSON.stringify(data));

  return (
    <>
      <CustomHead
        title={`יאיר ברזל ועץ - ${project.title}`}
        description={`יאיר ברזל ועץ - ${project.title}`}
      />
      <SingleProjectPageContainer project={project} />
      {/* <SingleProjectContainer project={project} /> */}
    </>
  );
};

export default SingleProjectPage;

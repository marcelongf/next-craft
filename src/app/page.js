import Text from "@/components/Text"
import Container from "@/components/Container"
import json from "@/json/default.json"

const getJson = async () => {
  return json
}

const Node = ({ node, data }) => {
  let typeName = "";
  if (typeof node.type === "object") {
    typeName = node.type.resolvedName;
  } else {
    typeName = node.type;
  }

  const Children = node.nodes.map((x, index) => {
    return <Node key={x} node={data[x]} data={data} />;
  });
  
  switch (typeName) {
    case "Container":
      return <Container {...node.props}>{Children}</Container>;
    case "Text":
      return <Text {...node.props} />;
  }
};

const Preview = async () => {
  const data = await getJson()

  return (
    <div className="h-screen flex flex-col ">
      <Node node={data.ROOT} data={data} />
    </div>
  );
};
export default Preview;

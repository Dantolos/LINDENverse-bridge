import StructurListItem from '../../components/utils/structure/listItem';
import { getDirectoryStructure } from '../../utils/directoryStructure';

export async function getStaticProps() {
  const directoryStructure = getDirectoryStructure('');
  return {
    props: {
      directoryStructure,
    },
  };
}

export default function DirectoryPage({ directoryStructure }) {

  const renderItems = (items, parentPath = '') => {
    const directoryItems = items.filter((item) => item.type === 'directory');

    return directoryItems.map((item, index) => {
      const subItems = Array.isArray(item.children) ? renderItems(item.children, `${parentPath}/${item.name}`) : null;
      const hasIndexChild = item.children.some((subItem) => subItem.name === 'index.js');
      const itemPath = `data/${parentPath}/${item.name}`;
      
      return (
        <div key={index} style={{  }}>
          <StructurListItem dirname={item.name} hasIndexChild={hasIndexChild} path={itemPath} />
          {subItems && (
            <div style={{  border: 'solid lightgrey', borderWidth: '0 0 0 1px', borderRadius: '0 30px', width: 'fit-content' }}>
              {subItems.map((subItem, subIndex) => (
                <div key={subIndex} style={{paddingLeft: '20px'}}>{subItem}</div>
              ))}
            </div>
          )}
        </div>
      );
    });
  };
 
  return (
    <div className='Content'>
      <h1>Datasets</h1>
      {renderItems(directoryStructure)}
    </div>
  );
}

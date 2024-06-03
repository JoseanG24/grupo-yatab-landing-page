"use client";
import UpArrow from "@/icons/UpArrow";
import DownArrow from "@/icons/DownArrow";

const ExpandService = () => {
  const [expanded, setExpanded] = useState(false);
  const [buttonStyle, setButtonStyle] = useState(styles.button);

  const toggleExpand = () => {
    setExpanded(!expanded);
    setButtonStyle(expanded ? styles.button : styles.buttonActive);
  };

  return (
    <div>
     
    </div>
  );
};

export default ExpandService;

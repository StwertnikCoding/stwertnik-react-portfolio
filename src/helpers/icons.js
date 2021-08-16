import { faBackspace, faAngleDoubleRight, faPen, faTrash, faSpinner, faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faBackspace, faAngleDoubleRight, faPen, faTrash, faSpinner, faPlus);
}

export default Icons;
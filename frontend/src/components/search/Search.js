import { useEffect, useState } from "react";
import SearchInput from './SearchInput'
const Search = () => {
    console.log("HI")
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredName, setFilteredName] = useState("");

    const allUsers = [{
        "id": 1,
        "username": "gfelder0"
      }, {
        "id": 2,
        "username": "pcausier1"
      }, {
        "id": 3,
        "username": "efassbender2"
      }, {
        "id": 4,
        "username": "pwinchcombe3"
      }, {
        "id": 5,
        "username": "dabdy4"
      }, {
        "id": 6,
        "username": "ffordy5"
      }, {
        "id": 7,
        "username": "bclemoes6"
      }, {
        "id": 8,
        "username": "tglenfield7"
      }, {
        "id": 9,
        "username": "rfranzman8"
      }, {
        "id": 10,
        "username": "mcurado9"
      }, {
        "id": 11,
        "username": "ddudeka"
      }, {
        "id": 12,
        "username": "ovannikovb"
      }, {
        "id": 13,
        "username": "tstorrahc"
      }, {
        "id": 14,
        "username": "kdoggrelld"
      }, {
        "id": 15,
        "username": "jberkeleye"
      }, {
        "id": 16,
        "username": "smawdf"
      }, {
        "id": 17,
        "username": "mokkerg"
      }, {
        "id": 18,
        "username": "nspeerh"
      }, {
        "id": 19,
        "username": "kfilyaevi"
      }, {
        "id": 20,
        "username": "ctutillj"
      }, {
        "id": 21,
        "username": "aroomsk"
      }, {
        "id": 22,
        "username": "atilsleyl"
      }, {
        "id": 23,
        "username": "afontenotm"
      }, {
        "id": 24,
        "username": "igearen"
      }, {
        "id": 25,
        "username": "mfearno"
      }, {
        "id": 26,
        "username": "khutchensp"
      }, {
        "id": 27,
        "username": "mstaningq"
      }, {
        "id": 28,
        "username": "bkaubischr"
      }, {
        "id": 29,
        "username": "kfalcos"
      }, {
        "id": 30,
        "username": "zdisbrowt"
      }, {
        "id": 31,
        "username": "mdevoielsu"
      }, {
        "id": 32,
        "username": "efallav"
      }, {
        "id": 33,
        "username": "apestorw"
      }, {
        "id": 34,
        "username": "fmattiassix"
      }, {
        "id": 35,
        "username": "acattoy"
      }, {
        "id": 36,
        "username": "ddudlistonz"
      }, {
        "id": 37,
        "username": "etschiersch10"
      }, {
        "id": 38,
        "username": "awartonby11"
      }, {
        "id": 39,
        "username": "hvinau12"
      }, {
        "id": 40,
        "username": "rwaghorn13"
      }, {
        "id": 41,
        "username": "lbowers14"
      }, {
        "id": 42,
        "username": "kpoupard15"
      }, {
        "id": 43,
        "username": "asimoneschi16"
      }, {
        "id": 44,
        "username": "blefevre17"
      }, {
        "id": 45,
        "username": "dattwell18"
      }, {
        "id": 46,
        "username": "elindegard19"
      }, {
        "id": 47,
        "username": "bgranham1a"
      }, {
        "id": 48,
        "username": "gwillerton1b"
      }, {
        "id": 49,
        "username": "njacob1c"
      }, {
        "id": 50,
        "username": "rallibone1d"
      }]

      const displayUsernames = allUsers.map((person) =>
      {
        return(
            <li>{person}</li>
        )
      })

      function handleSearch(newSearchQuery){
        setSearchQuery(newSearchQuery)
        allUsers.map((person) => {
            if(person.username.includes(searchQuery)){
                setFilteredName(person)
            }
        })
      }


  return (
    <div className = "App">
        <SearchInput handleSearch = {handleSearch}/>
        <h2> Filtered Name:
            <ul>
                {filteredName}
            </ul>
        </h2>
        <br></br>
        <h2> Names: 
            <ul>
                {displayUsernames}
            </ul>
        </h2>
    </div>
  );
};

export default Search;

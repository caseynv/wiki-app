

export default function Records(){
    const records = [
      
      {
        username: "Intelligence",
        number: "100",
      },
      {
        username: "Loiytr",
        number: "99",
      },
      {
        username: "L2",
        number: "98",
      },
      {
        username: "INTR",
        number: "95",
      },
      {
        username: "Writop",
        number: "90",
      },
      {
        username: "COCREAT",
        number: "81",
      },
      {
        username: "Bot504",
        number: "79",
      },
      {
        username: "BEING1234",
        number: "71",
      },
      {
        username: "Cumpo",
        number: "68",
      },
      {
        username: "P098",
        number: "51",
      },
      {
        username: "LEVteam",
        number: "11",
      },
    ];
    
    return(
        <>
            <div className="w-1/2 text-xl capitalize text-center m-auto">leaderboard</div>
            <div className="w-1/2 pl-6 text-lg capitalize py-8 flex m-auto">
                <p className="w-2/3">username</p>
                <p className="">total number of edits</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                {records.map((record, i) => 
                <div className="flex w-1/2 justify-center shadow-md border my-4">
                    <p className="w-2/3 m-8">{record.username}</p>
                    <p className="m-8">{record.number}</p>
                </div>)}
            </div>
        </>
    )
}
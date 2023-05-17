import {
    Navbar,
    Typography,
    Button,
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

export default function Header({data}) {
    const listMenu = ['Phim mới', 'Phim bộ', 'Phim lẻ', 'Thể loại', 'Phim chiếu rạp'];

    return (
        <Navbar className="sticky inset-0 z-10 h-max max-w-full bg-opacity-0 border-none dark:bg-gray-900 rounded-none py-3">
            <div className="mx-auto max-w-screen-2xl flex flex-wrap items-center justify-between gap-y-4 text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    Squigly Movie
                </Typography>
                <ul className="flex p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {listMenu && listMenu.length > 0 &&
                        listMenu.map((item,index) => (
                            item==='Thể loại' ? 
                            (
                                <Menu key={index}>
                                    <MenuHandler>
                                        <li>
                                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent" aria-current="page">{item}</a>
                                        </li>
                                    </MenuHandler>
                                    <MenuList className="grid grid-cols-5 gap-5">
                                        {
                                            data && data.length > 0 && data.map((item) => (
                                                <MenuItem key={item.id}>{item.name}</MenuItem>
                                            ))
                                        }
                                    </MenuList>
                                </Menu>
                            ) 
                            :
                            (
                                <li key={index}>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent" aria-current="page">{item}</a>
                                </li>
                            )
                        ))
                    }
                </ul>
                <div className="relative flex w-full gap-2 md:w-max">
                    <Input
                        type="search"
                        color="gray"
                        label="Search..."
                        className="pr-20 bg-blue-gray-900 border-none"
                        containerProps={{
                            className: "min-w-[288px] border border-gray-700 rounded-[7px]",
                        }}
                    />
                    <Button
                        size="sm"
                        color="orange"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </Navbar>
    );
}

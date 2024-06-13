import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IPost } from '@/model/Post'
import { EllipsisVertical } from 'lucide-react'

export default function PromiseCardDropdown({post}: {post: IPost}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span><EllipsisVertical color={'white'} /></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>문제가 있으신가요?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            신고하기
          </DropdownMenuItem>
          <DropdownMenuItem className='text-red-500'>
            차단하기
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
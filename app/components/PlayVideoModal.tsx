import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PlayVideoModalProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  age?: number;
  release?: number;
  duration?: number;
}

const PlayVideoModal = ({
  title,
  overview,
  youtubeUrl,
  state,
  changeState,
  release,
  age,
  duration,
}: PlayVideoModalProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            <p className="border py-0.5 border-gray-200 rounded ">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;

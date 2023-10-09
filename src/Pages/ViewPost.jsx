import React from 'react'
import AppBar from '../Components/AppBar'
import { BiComment, BiLike, BiSolidLike, BiCommentAdd } from 'react-icons/bi'
import { FiSave, FiShare } from 'react-icons/fi'
import PostsSmall from '../Components/Posts/PostsSmall'
import Comment from '../Components/Comment'
import { FaComment } from 'react-icons/fa'


export default function ViewPost() {
    return (
        <div className="w-full">
            <AppBar />
            <div className='grid grid-cols-12'>
                <div className='col-span-8 p-4 space-y-8'>
                    <div className='flex flex-col bg-gray-200 p-8 rounded-md cursor-pointer space-y-4'>
                        <div className='flex items-center'>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscot-inline-1658958010.jpg" className='h-12 w-12 rounded-full object-cover' />
                            <div className='px-2 font-Mt'>
                                <h1 className='text-xl font-bold'>Blockchain Technologies Today And Tommorow</h1>
                                <h1 className='text-sm'>Posted By Samuel Voight on 08/9/23</h1>
                            </div>
                        </div>
                        <div className='pr-6'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit bibendum gravida. Nulla facilisi. Cras eleifend sagittis massa sit amet pretium. Nullam vestibulum magna ac dui finibus pharetra. Morbi cursus erat mi, vitae laoreet mauris hendrerit non. Mauris convallis imperdiet nisi a faucibus. Sed finibus diam et venenatis pharetra. Phasellus vehicula egestas erat, vel tincidunt quam. Nam diam ex, ultrices ac quam in, scelerisque euismod justo. Nullam iaculis mattis euismod. Morbi feugiat felis vitae augue vehicula vehicula. Suspendisse potenti. Curabitur tortor neque, fermentum eget velit sit amet, aliquam dictum metus. Donec finibus justo quis quam interdum dictum. Phasellus tortor purus, ultricies at dictum eget, viverra non nulla.
                                <br></br>
                                <br></br>
                                Aenean vitae egestas lacus, non tincidunt odio. Nunc et eros vehicula, faucibus felis sed, lacinia ligula. Duis nec magna ipsum. Vivamus cursus tincidunt orci, a mattis nisl ultrices a. Nam vehicula elit vitae sem molestie tempus. Integer a velit ac erat tempus porttitor. Suspendisse eu leo a velit tincidunt fermentum. Aliquam condimentum augue eget elementum tincidunt. Donec id velit lectus. Phasellus fermentum quam est, tristique tristique sapien mollis vel. Nulla facilisi.
                                <br></br>
                                <br></br>
                                Pellentesque sed risus nec ipsum pretium tempor id at ligula. Ut vel ipsum dolor. Cras posuere lacus et purus faucibus, nec pharetra nunc faucibus. Donec rutrum odio eget placerat euismod. Aliquam convallis sagittis quam, et bibendum velit. Ut faucibus turpis lorem, eu ornare mi fermentum at. Nam vitae vehicula nibh. Maecenas ac purus in sapien blandit ultrices. Donec vel lacus lobortis enim eleifend sodales. Vestibulum arcu nulla, porta a dolor in, sagittis eleifend orci. Donec molestie tempus mauris fermentum tincidunt. Nunc blandit mi diam, quis imperdiet odio facilisis ac. Mauris sit amet vestibulum ipsum, auctor cursus metus. Aenean egestas interdum diam sit amet posuere. Sed dignissim est eros, vitae imperdiet purus fermentum vitae. Cras vitae urna a urna condimentum efficitur vel id dui.
                                <br></br>
                                <br></br>
                                Phasellus rutrum odio ut sollicitudin imperdiet. Nullam posuere ultrices pretium. Duis dictum efficitur ante non vestibulum. Mauris ut nunc porta, sollicitudin nibh vitae, auctor nulla. Fusce ut commodo tellus, in consequat erat. Nunc maximus velit at risus efficitur, ac ornare metus porttitor. In efficitur justo eget nisi porta rhoncus sed vel lorem. Fusce commodo dui tortor. Sed efficitur tortor eu neque vestibulum, nec aliquam urna dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                <br></br>
                                <br></br>
                                Cras sit amet suscipit leo, ac sagittis leo. Donec quis euismod lorem. Aliquam volutpat lorem erat, a sodales nulla ullamcorper ac. Phasellus eget mollis tortor. Curabitur accumsan mauris sit amet metus varius, a ullamcorper ligula ullamcorper. Donec nibh augue, sagittis id ultricies sit amet, ultricies vitae felis. Vestibulum massa lorem, tristique at erat in, rhoncus gravida metus. Etiam nec arcu quis est convallis volutpat sit amet et nulla. Nam sed nisl sit amet metus rhoncus blandit et vel turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse rutrum diam nec ex viverra, eget ultricies tellus egestas. Morbi eu ultrices nisi, in mollis enim.
                            </p>
                        </div>
                        <div className='px-4 flex w-full items-center'>
                            <div className='flex space-x-4'>
                                <BiLike size={24} />
                                <FiShare size={24} />
                                <BiComment size={24} />
                            </div>
                            <div className='space-x-4 flex uppercase font-Mt text-sm ml-8'>
                                <h1>251 Views</h1>
                                <h1>|</h1>
                                <h1>20 Comments</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-200 p-4 rounded-md'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold'>Comments</h1>
                            <div className='p-1 rounded-md hover:bg-black cursor-pointer hover:text-white'>
                                <BiCommentAdd size={28} />
                            </div>
                        </div>
                        <div className='space-y-4 mt-4'>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                </div>
                <div className='col-span-3 p-4'>
                    <div className='p-4 font-Mt bg-white rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-2xl font-bold text-blue-700 uppercase tracking-wider'>Trending</h1>
                        <div className='w-full py-2 space-y-2'>
                            <PostsSmall userName="Alex Taylor" postTitle="Working With AWS" profileURl="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" />
                            <PostsSmall userName="Andrew Matt" postTitle="Azure Fundamentals" profileURl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                            <PostsSmall userName="Kevin Thomas" postTitle="Cypersecuity and Owasp" profileURl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80" />
                            <PostsSmall userName="George Brown" postTitle="GCP And Google AI" profileURl="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                            <PostsSmall userName="Samuel Voight" postTitle="Blockchain Technologies Today And Tommorow" profileURl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscot-inline-1658958010.jpg" />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
